export default (serverSocket) => {
    //Escuchamos el evento de connection
    serverSocket.on("connection" , ()=>{
        console.log("New User Connection");
    })
}
