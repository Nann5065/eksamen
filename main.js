window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises!");
    //registrer kllik på menu-knap


    document.querySelector("#menuknap").addEventListener("click", togglemenu);

}

function togglemenu() {
    console.log("Toggle menu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult =

        document.querySelector("#menu").classList.contains("hidden");


    if (erSkjult == true) {

        document.querySelector("#menuknap").textContent = "☰";
    } else {

        document.querySelector("#menuknap").textContent = "X";

    }

}
