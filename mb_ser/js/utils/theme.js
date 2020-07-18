let Dark = true;
let BatPath = "img/drk/";

function Toggle(){
    var sheets = document.styleSheets;
    Dark = !Dark;

    if (!Dark) {$('#TopBar').color="light"; BatPath="img/";}
    else { $('#TopBar').color="dark"; BatPath="img/drk/";}

    for (let i=0;i<sheets.length;i++){
        if (sheets[i].href && sheets[i].href.endsWith("main.css")){
            sheets[i].disabled=!Dark;
        }
    }
}