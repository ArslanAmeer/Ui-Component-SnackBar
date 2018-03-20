"use strict";


var btn = document.querySelector(".btn");

var bar = document.querySelector(".snackbar-wrapper");

btn.addEventListener("click", () => {

    btn.disabled = true;

    showPromise().then(setTimeout(() => {

        hidePromise().then(() => {

            btn.disabled = false;

        });;

    }, 3000));

});

var showPromise = () => {
    return new Promise((resolve, reject) => {

        bar.style.display = "inline-block";

        setTimeout(() => {
            bar.style.opacity = 1;
            bar.style.top = "90vh";
            resolve();
        }, 10);
    });
}

var hidePromise = () => {
    return new Promise((resolve, reject) => {

        bar.style.opacity = 0;
        bar.style.top = "110vh";

        setTimeout(() => {
            bar.style.display = "none";
            resolve();
        }, 500);
    });
}
