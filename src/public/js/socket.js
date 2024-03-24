const socket = io()

export const loadNote = (callback) =>{
    socket.on("server:allNotes",callback); 
}
export const saveNote = (title, description) => {
    socket.emit("client:saveNotes", {
        title,
        description
    })
}

export const onNewNote = (callback) =>{
    socket.on("server:saveNotes", callback); 
}

export const deleteNote =(id) =>{
    socket.emit("client:deleteNote", id)
}

export const getNoteById = (id) => {
    socket.emit("client:getNoteById", id); 
}