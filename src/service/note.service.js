import Note from "../models/Note.model.js";


const allNote = async () =>{
    debugger
    try {
        const response = await Note.find(); 
        return {data : response}; 
    } catch (error) {
        console.log(error);
        return {error: error};
    }
}
const postNote = async(note) =>{
    debugger
    try {
        const response = new Note(note);
       const notes =  await response.save(); 
            if(!notes){
                const errors ={
                    msg: "Fallos al agregar la nota", 
                    status: 500
                }
                return {error: errors};
            }
            return {data: notes}
    } catch (error) {
        console.log(error);
        return {error: error};
    }
}

export{
    allNote,postNote
}