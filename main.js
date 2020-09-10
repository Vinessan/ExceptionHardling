//EFETUANDO SOMA
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
var calculo1;
function soma(somar) {
    try {
        calculo1 = (1+2+3+4+5+6+7+8+9+10)
        console.log("Soma:" + calculo1);
        if (typeof (calculo1) != 'number'){
            alert("Erro!")
        }
    } catch(e) {
        console.log("Erro Encontrado!");
    } 
}

soma()


//VERIFICA LETRA!
//var num = [1, "A", 3, 4, 5, 6, 7, 8, 9, 10]; 
//var calculo1;
//function soma(somar) {
//   try {
//        calculo1 = (1+"A"+3+4+5+6+7+8+9+10)
//        console.log("Soma:" + calculo1);
//        if (typeof (calculo1) != 'number'){
//            alert("Erro!")
//        }
//    } catch(e) {
//        console.log("Erro Encontrado!");
//    } 
//}
//
//soma()