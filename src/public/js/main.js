




const noteForm = document.querySelector("#noteForm"); 

noteForm.addEventListener("submit", (e)=>{
    e.preventDefault(); 
    console.log("submit");
    console.log(
        noteForm["titleNote"].value,
        noteForm["descriptionNote"].value
    );
})