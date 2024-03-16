import mongoose from "mongoose";

export const connection = async () => {
    try {
        await mongoose.connect(`${process.env.MDB}`); 
        console.log('connect to data Base');
    } catch (error) {
        console.log(error);
        throw new Error('Error when starting the database');
    }
}