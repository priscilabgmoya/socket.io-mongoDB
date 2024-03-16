import { allNote } from "./service/note.service.js";

export default (serverSocket) => {
    //Escuchamos el evento de connection
    serverSocket.on("connection" , async ()=>{
        debugger
        console.log("New User Connection");
        const {data,error} = await allNote(); 
        if(error){
            serverSocket.emit("error", error); 
        }
        serverSocket.emit("allNotes" , data); 
    })
}
