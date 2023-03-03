let boton=document.getElementById("btn");
    boton.addEventListener("click", (e)=>{
        console.log("click hecho");

    });
    let saludar=document.getElementById("hello");
        saludar.addEventListener("click",()=>{
            this.classList.toggle("box");
        });
        let boton2=document.getElementById("boton");
            boton2.addEventListener("click", (e)=>{
                alert("ha sido enviado");
            });