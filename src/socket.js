import { deleteNotes, getAllNotes, getNoteById, saveNotes } from "./controller/socket.controller.js";

export default (serverSocket) => {
    //Escuchamos el evento de connection
    serverSocket.on("connection" , async (socket)=>{
        console.log("New User Connection");
        await getAllNotes(socket); 
        socket.on("client:saveNotes", async (data)=> {
            await saveNotes(serverSocket, data); 
        })
        socket.on("client:deleteNote", async (id)=> {
            console.log(id);
            await deleteNotes(socket,id);
            await getAllNotes(socket); 
        })
        socket.on("client:getNoteById", async (id)=>{
            console.log(id);
            await getNoteById(id)
        }) 
    })
}
