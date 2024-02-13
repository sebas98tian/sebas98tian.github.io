let crear=document.getElementById("crea");
let db_notes=document.querySelector(".db-notes");
let delet=document.getElementById("delete");
delet.addEventListener("click",()=>{
    delet.parentNode.style.display="none"
})
crear.addEventListener("click",()=>{
    let note=document.getElementById("note");
    if(note.value==""){
        alert("no puedes crear una nota sin contenido");
    }else{
        db_notes.innerHTML+=
        `<div class="notes-item">
            <p>${note.value}</p>
            <div class="space"></div>
            <input type="button" value="Borrar" class="borrar" id="borrar"><br>
        </div>`
        let borrar=document.querySelectorAll(".borrar");
        for(let i=0; i<borrar.length;i++){
            borrar[i].addEventListener("click",()=>{
                borrar[i].parentNode.style.display="none";
                borrar.splice(i,1);
            })
        }
        note.value="";
    }
})

