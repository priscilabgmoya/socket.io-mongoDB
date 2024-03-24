import { deleteNote, getNoteById, saveNote } from "./socket.js";
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
    console.log(note);
    const div = document.createElement("div"); 
    div.innerHTML = `
    <div> 
   <h1> ${note.title} </h1>
   <div> 
   <button class="btnDelete" data-id="${note._id}"> Delete </button>
   <button class="btnUpdate" data-id="${note._id}"> Update </button>
   </div>
   <p> ${note.description} </p>
    </div>`; 

    const btnsDelete = div.querySelector(".btnDelete");
    const btnsUpdate = div.querySelector(".btnUpdate");
    btnsDelete.addEventListener("click", (e)=>{  deleteNote(btnsDelete.dataset.id);}); 
    btnsUpdate.addEventListener("click", (e)=>{getNoteById(btnsUpdate.dataset.id);})

    return div; 
}
export const renderNotes = (notes) => {
    console.log(notes);
    ulNotes.innerHTML = "";
    notes.forEach(note => {
        ulNotes.appendChild(noteUI(note));  
});
}

export const appendNote = (note) => {
    ulNotes.appendChild(noteUI(note)); 
}