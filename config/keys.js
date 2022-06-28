module.exports = {
    mongoURI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.4cour.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
}