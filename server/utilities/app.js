import express from 'express';
import bodyParser from 'body-parser';


// import routes

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res) => res.status(404).json({
  status: 404,
  error: 'Page Not Found',
}));


export default app;
