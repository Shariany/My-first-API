const mongoose = requre("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://vansharian_db_user:<db_password>@cluster0.nyl5ue4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log();
        
    }  catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;