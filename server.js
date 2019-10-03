import http from "http";
import app from './server/utilities/app';

const server = http.createServer(app);

const port = process.env.Port || 1000;

app.listen(port,()=>{
    console.log(`You are Running on Port ${port}`);
    
});

