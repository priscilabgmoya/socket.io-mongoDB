import { getAllNotes, saveNotes } from "../controller/socket.controller.js";

export default (serverSocket) => {
    //Escuchamos el evento de connection
    serverSocket.on("connection" , async (socket)=>{
        console.log("New User Connection");
        await getAllNotes(socket); 
        socket.on("saveNotes", async (data)=> {
            console.log(data);
            await saveNotes(socket, data); 
        })

    })
}
