const mongoose = require("mongoose");
const chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from: "Rahul",
        to: "priya",
        message: "Send me your mark sheets",
        created_at: new Date()
    },
    {
        from: "Suman",
        to: "Ram",
        message: "Send me",
        created_at: new Date()
    },
    {
        from: "Rakhi",
        to: "priya",
        message: "Do you have Math Book",
        created_at: new Date()
    },
    {
        from: "Rahul",
        to: "Neha",
        message: "Send me your mark sheets",
        created_at: new Date()
    }
];

chat.insertMany(allChats);
