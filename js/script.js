
const subIdioma = document.querySelectorAll(".subidioma");
for (let i=0; i<subIdioma.length; i++){
    subIdioma[i].addEventListener("click", function(){

        if(window.innerWidth){
            const submenu = this.nextElementSibling;
            const height = submenu.scrollHeight;

            if (submenu.classList.contains("desplegar")){
                submenu.classList.remove("desplegar");
                submenu.removeAttribute("style");
            }else{
                submenu.classList.add("desplegar");
                submenu.style.height = height + "px";
            }
        }
    });
}