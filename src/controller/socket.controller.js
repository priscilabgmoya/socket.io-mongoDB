import { allNote, postNote } from "../service/note.service.js";

export const getAllNotes = async (serverSocket) =>{
    const {data,error} = await allNote(); 
    if(error){
        serverSocket.emit("error", error); 
    }
    serverSocket.emit("allNotes" , data); 
}

export const saveNotes = async (serverSocket, note) => {
    const {data,error} = await postNote(note); 
    if(error){
        /*serverSocket.emit("error", error); */
    }
    console.log(data);
    /*serverSocket.emit("allNotes" , data); */
}