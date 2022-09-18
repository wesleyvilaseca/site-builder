import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import uiRoute from "./ui/ui.route";
import pageRoute from "./page/page.route";

const app = express();
app.use(express.json());
app.use(cors());

//setup template engine
app.use("/resources", express.static(path.join(__dirname, "public")));
app.use("views", express.static(path.join(__dirname, "views")));
app.set("view engine", 'hbs');

//mongo db settings
const uri = "mongodb+srv://dbPageBuilder:4321$%23%40%21rewq@cluster0.kjsnrco.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, {
    // useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    err => {
        if (err) throw err;

        console.log('connected to mongodb');
    })

app.use("/", uiRoute);
app.use("/pages", pageRoute);

const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})