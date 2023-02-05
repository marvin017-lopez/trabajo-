let ubicacionprincipal = window.pageYOffset; //0

AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoAltual= window.pageYOffset; //180
    if(ubicacionprincipal >= desplazamientoAltual){// 200 > 180
        document.getElementsByTagName("nav")[0].style.top =  "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top =  "100px"
    }
    ubicacionprincipal=desplazamientoAltual; //200
})

//menu
