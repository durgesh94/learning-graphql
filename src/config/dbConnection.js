import mongoose from "mongoose";

async function connectMongoDB() {
    try {
        await mongoose.connect('mongodb+srv://durgesh17:durgesh17@cluster0.swigquy.mongodb.net/myDB');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
    }
}

connectMongoDB();

const widgetsSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    soldout: String,
    qty: String,
    stores: Array,
});

const Widgets = mongoose.model('widgets', widgetsSchema);

export { Widgets };