import { allNote, deleteNote, getOneNote, postNote } from "../service/note.service.js";

export const getAllNotes = async (serverSocket) =>{
    const {data,error} = await allNote(); 
    if(error){
        serverSocket.emit("server:error", error); 
    }
    serverSocket.emit("server:allNotes" , data); 
}

export const saveNotes = async (serverSocket, note) => {
    const {data,error} = await postNote(note); 
    if(error){
    serverSocket.emit("server:error", error); 
    }
    console.log(data);
    serverSocket.emit("server:saveNotes" , data); 
}

export const deleteNotes = async(serverSocket, id) =>{
    const {data,error} = await deleteNote(id); 
    if(error){
        serverSocket.emit("server:error", error); 
     }
     console.log(data);
}

export const getNoteById = async(serverSocket, id) =>{
    const {data,error} = await getOneNote(id); 
    if(error){
        serverSocket.emit("server:error", error); 
     }
     console.log(data);
}