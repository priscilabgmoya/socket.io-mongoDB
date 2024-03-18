import { loadNote } from './socket.js';
import { onHandleSumbit, renderNotes } from './ui.js';
loadNote(renderNotes); 



const noteForm = document.querySelector("#noteForm");  

noteForm.addEventListener("submit", onHandleSumbit)