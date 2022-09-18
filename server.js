import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import uiRoute from './ui/ui.route';
import pageRoute from './page/page.route';
import assetRoute from './assets/assets.route';
import projectRoute from './project/project.route';
import renderHtml from './render/render.controller';
//Initialize App
const app = express();
app.use(express.json());
const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
};

corsOptions.credentials = true;
app.use(cors(corsOptions));

//HTML and Static file
app.use('/resources', express.static(path.join(__dirname, 'public')));
app.set('views', `views`);
app.set('view engine', 'hbs');

const mongoUri = 'mongodb+srv://dbPageBuilder:4321$%23%40%21rewq@cluster0.kjsnrco.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(
  mongoUri,
  {
    // useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log('Connected to MongoDB');
  },
);
app.use('/projects', projectRoute);
app.use('/pages', pageRoute);
app.use('/assets', assetRoute);
app.use('/', uiRoute);
app.get('/:pageId?', renderHtml);

const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
