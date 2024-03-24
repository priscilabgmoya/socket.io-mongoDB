import { loadNote, onNewNote } from './socket.js';
import { appendNote, onHandleSumbit, renderNotes } from './ui.js';
loadNote(renderNotes); 


onNewNote(appendNote); 
const noteForm = document.querySelector("#noteForm");  

noteForm.addEventListener("submit", onHandleSumbit)