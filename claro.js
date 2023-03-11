 function persona(nombre,apellido) {
    return nombre+apellido;   
}
    console.log(persona("andres"," bustos"));
    function numeros(a,b) {
        return a+b;   
    }  console.log(numeros(3,4));
    //funcion sincronica//
    function movistar(c,d){
        return c+d;
    } function personal(c,d,colback) {
        console.log(colback(c,d))    
    } console.log("ejecutar antes");
      personal(1,2,movistar);
      console.log("ejecutar despues");
    //funcion colback//
    function auto(ford,chevrolet,colback){
        console.log(colback(ford,chevrolet));
    }   console.log("que se ejecute antes");
    auto(58,64,(ford,chevrolet)=>ford+chevrolet);
        console.log("que se ejecute despues");
    //funcion flecha//
    function moto(honda,yamaha,colback) { 
        setTimeout(function(){
            console.log(colback(honda,yamaha));
        },3000)  
    }       console.log("antes de ejecutar");
    moto(50,40,(honda,yamaha)=>honda+yamaha);
            console.log("despues de ejecutar");  
    //funcion asincronica//
    let equipoDeFutbol=[];
    function equipoGrande() {
        setTimeout(function(){
            equipoDeFutbol.push("riber");
            setTimeout(function(){
                equipoDeFutbol.push("bostas")
                setTimeout(function(){
                    equipoDeFutbol.push("racing");
                    console.log(equipoDeFutbol.toString())
                },1500);
            },1000);
          
        },2000);
        
    }
    equipoGrande();