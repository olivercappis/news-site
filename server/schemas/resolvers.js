const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },
        user: async (parent, { email }) => {
            return await User.findOne({ email });
        },
    },
    Mutation: {
        addUser: async (parent, { email, password }) => {
            const user = await User.create({ email, password });
            const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '6h' });
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

            const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '6h' });
            return { token, user };
        },
        addPreference: async (_, { userId, name }) => {
            try {

                const user = await User.findById(userId);
                if (!user) {
                    throw new Error('User not found');
                }

                user.preferences.push({ name });

                await user.save();

                return user;
            } catch (error) {
                console.error(error);
                throw new Error('Error adding preference');
            }
        },
        getNewsByPreferences: async (_, { userId }) => {
            try {

                const user = await User.findById(userId);

                if (!user) {
                    throw new Error('User not found');
                }

                const categories = user.preferences.map(pref => pref.name).join(',');

                const apiUrl = `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.API_KEY1}&language=en&categories=${categories}&published_after=2024-09-05`;

                const response = await axios.get(apiUrl);

                return response.data.data;

            } catch (error) {
                console.error(error);
                throw new Error('Error fetching news based on user preferences');
            }
        },
        getGeneralNews: async () => {
            try {
                const apiUrl = `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_API_KEY}&language=en&categories=general&published_after=2024-09-05`;

                const response = await axios.get(apiUrl);

                return response.data.data;
            } catch (error) {
                console.error(error);
                throw new Error('Error fetching general news');
            }
        },
    },
};

module.exports = resolvers;
