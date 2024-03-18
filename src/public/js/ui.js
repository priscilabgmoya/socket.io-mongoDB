import { saveNote } from "./socket.js";
const ulNotes = document.querySelector("#notes");
export const onHandleSumbit = (e)=>{
    debugger
    e.preventDefault(); 
    console.log("submit");
    saveNote(noteForm["titleNote"].value, noteForm["descriptionNote"].value)
    console.log(
        noteForm["titleNote"].value,
        noteForm["descriptionNote"].value
    );
}
const noteUI = note => {
    const div = document.createElement("div"); 
    div.innerHTML = `
    <div> 
   <h1> ${note.title} </h1>
   <div> 
   <button> Delete </button>
   <button> Update </button>
   </div>
   <p> ${note.description} </p>
    </div>`; 
    return div; 
}
export const renderNotes = (notes) => {
    notes.forEach(note => {
        ulNotes.appendChild(noteUI(note));  
});
}