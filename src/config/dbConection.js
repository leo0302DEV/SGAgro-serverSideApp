import mongoose from "mongoose";

async function conectToDataBase() {
    try {
        mongoose.connect(
            process.env.DB_CONECTION_STRING
        );
        return mongoose.connection;
    } catch (error) {
        console.log(error);
    }
}

export default conectToDataBase;