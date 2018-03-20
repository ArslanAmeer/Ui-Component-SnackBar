"use strict";


var btn = document.querySelector(".btn");

btn.addEventListener("click", () => {

    var bar = document.querySelector(".snackbar-wrapper");
    
    bar.style.display = "inline-block";

    setTimeout(() => {
        bar.style.opacity = 1;
        bar.style.top = "90vh";
    
        setTimeout(() => {
            bar.style.opacity = 0;
            bar.style.top = "110vh";

            setTimeout(() => {
                bar.style.display = "none";
            },1000)
            
        },2000);

    },10);

    
    
});
