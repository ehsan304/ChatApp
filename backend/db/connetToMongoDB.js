import mongoose from "mongoose";

const connectTOMongoDB = async () => {
    try {    // try to connect with the database ************* // if it is connected then we will get a response as true and if not then we will get false. ****************** //
        await mongoose.connect(process.env.MONGO_DB_URI)
            console.log("Connected to MongoDB")

} catch (error) {    // catch any error that may occur while connecting with the database ****************** //
        console.log("error connecting to mongo db", error.message);   // throw an error if there is a problem in connectiong with the database. ************* //
    }
};


export default connectTOMongoDB;
