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

export{
    allNote
}