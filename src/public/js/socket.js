const socket = io()

export const loadNote = (callback) =>{
    socket.on("allNotes",callback); 
}
export const saveNote = (title, description) => {
    socket.emit("saveNotes", {
        title,
        description
    })
}