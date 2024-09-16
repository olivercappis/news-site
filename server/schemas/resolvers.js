const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { AuthenticationError } = require('apollo-server-express');
const axios = require('axios');
require('dotenv').config()

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },
        user: async (parent, { email }) => {
            return await User.findOne({ email });
        },
        getGeneralNews: async () => {
            try {
                const apiUrl = `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.API_KEY3}&language=en&categories=general&published_after=2024-09-05`;

                const response = await axios.get(apiUrl);
                console.log(response)

                return response.data.data;
            } catch (error) {
                console.error(error);
                throw new Error('Error fetching general news');
            }
        },
        getNewsByPreferences: async (_, { userId }) => {
            try {

                const user = await User.findById(userId);

                if (!user) {
                    throw new Error('User not found');
                }

                const categories = user.preferences.map(pref => pref.name.toLowerCase()).join(',');
                console.log('-----------------')
                console.log(categories)
                console.log('-----------------')

                const apiUrl = `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.API_KEY3}&language=en&categories=${categories}&published_after=2024-09-05`;
                console.log(apiUrl)

                const response = await axios.get(apiUrl);

                console.log(response)
                return response.data.data;

            } catch (error) {
                console.error(error);
                throw new Error('Error fetching news based on user preferences');
            }
        },
    },
    Mutation: {
        addUser: async (parent, { email, password }) => {
            const user = await User.create({ email, password });
            const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '6h' });
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect password');
            }

            const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '6h' });
            return { token, user };
        },
        addPreference: async (_, { userId, name }) => {
            try {
                const user = await User.findById(userId);
                if (!user) {
                    throw new Error('User not found');
                }

                // Check if the preference already exists
                if (!user.preferences.some(pref => pref.name === name)) {
                    user.preferences.push({ name });
                }

                await user.save();
                return user; // Return the updated user with the new preference
            } catch (error) {
                console.error(error);
                throw new Error('Error adding preference');
            }
        },
        removePreference: async (_, { userId, name }) => {
            try {
                const user = await User.findById(userId);
                if (!user) {
                    throw new Error('User not found');
                }

                // Remove the preference
                user.preferences = user.preferences.filter(pref => pref.name !== name);

                await user.save();
                return user; // Return the updated user with the removed preference
            } catch (error) {
                console.error(error);
                throw new Error('Error removing preference');
            }
        },
        // getNewsByPreferences: async (_, { userId }) => {
        //     try {

        //         const user = await User.findById(userId);

        //         if (!user) {
        //             throw new Error('User not found');
        //         }

        //         const categories = user.preferences.map(pref => pref.name).join(',');

        //         const apiUrl = `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.API_KEY1}&language=en&categories=${categories}&published_after=2024-09-05`;

        //         const response = await axios.get(apiUrl);

        //         return response.data.data;

        //     } catch (error) {
        //         console.error(error);
        //         throw new Error('Error fetching news based on user preferences');
        //     }
        // },
        // getGeneralNews: async () => {
        //     try {
        //         const apiUrl = `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.API_KEY1}&language=en&categories=general&published_after=2024-09-05`;

        //         const response = await axios.get(apiUrl);
        //         console.log(response)

        //         return response.data.data;
        //     } catch (error) {
        //         console.error(error);
        //         throw new Error('Error fetching general news');
        //     }
        // },
    },
};

module.exports = resolvers;
