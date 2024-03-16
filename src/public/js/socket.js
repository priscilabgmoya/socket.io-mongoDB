const socket = io()

const loadNote = () =>{
    socket.on("allNotes", (data)=>{
        console.log(data);
    })
}