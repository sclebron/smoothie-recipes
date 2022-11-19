const { Smoothies } = require('../models');

const resolvers = {
    Query: {
        smoothies: async () => {
            return Smoothies.find();
        }
    }
}

module.exports = resolvers;