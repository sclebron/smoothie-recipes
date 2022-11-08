const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Smoothie {
        _id: ID
        title: String
        imageUrl: String
        ingredients: String
        recipes: String
    }
    type Query {
        
    }
`