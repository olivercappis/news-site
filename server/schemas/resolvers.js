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
                // Find the user by ID
                const user = await User.findById(userId);
                if (!user) {
                    throw new Error('User not found');
                }

                // Add the new preference to the user's preferences array
                user.preferences.push({ name });

                // Save the updated user
                await user.save();

                return user; // Return the updated user
            } catch (error) {
                console.error(error);
                throw new Error('Error adding preference');
            }
        },

    },
};

module.exports = resolvers;
