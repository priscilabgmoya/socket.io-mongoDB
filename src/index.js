import { Server as webSocketServer } from "socket.io";
import { newServerApp } from "./models/Server.model.js";
import socket from './socket.js'; 

newServerApp.listen(); 
const serverSocket  = new webSocketServer(newServerApp.getServer()); 
socket(serverSocket); 