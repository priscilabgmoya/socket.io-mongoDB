import { connection } from '../db/connection.js';
import express from 'express'; 
import { config } from 'dotenv';
import http from 'http'; 
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

 class ServerApp {
    constructor(){
        this.app = express(); 
        this. __dirname = path.resolve();
        this.server = http.createServer(this.app); 
        this.middlewares(); 
        this.server.PORT = process.env.PORT;
        this.DBconnection(); 
        this.router(); 
    }
    middlewares(){
        config(); 
        this.app.use(express.static(path.join(this.__dirname, "src/public")));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true})); 
        this.app.use(morgan('dev'));
    }
    async DBconnection(){
        await connection(); 
    }
    router() {
        /*
        this.app.get('/',  (req, res)  => {
            console.log(this.__dirname);
            //res.sendFile(path.join(this.__dirname, "src/public","index.html")); 
           // res.send("hola desde el backend!"); 
        }); 
        */
        this.app.get('/segundo-mensaje', function (req, res) {
            res.send("Segundo Mensaje: hola desde el backend!"); 
        }); 
    }
    
    listen(){
        this.server.listen(this.server.PORT, ()=> {
            console.log("hello word");
            console.log(`listening in the port ${this.server.PORT}`);
            console.log(`http://localhost:${this.server.PORT}/`);
        })
    }
    getServer(){
        return this.server; 
    }
}

export  const newServerApp = new ServerApp(); 