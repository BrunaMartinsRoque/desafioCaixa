function caixaEletronico(saque){

    var saque = parseFloat(saque);
    var cedulas100 = 0;
    var cedulas50 = 0;
    var cedulas20 = 0;
    var cedulas10 = 0;
    var cedulas5 = 0;

    
        if(saque != 0 && saque % 5 == 0) {

            console.log("O valor escolhido foi de R$: " + saque);
            
            while (saque >= 100) {
                cedulas100++;
                saque -= 100;
            }
            while (saque >= 50) {
                cedulas50++;
                saque -= 50;
            }
            
            while (saque >= 20) {
                cedulas20++;
                saque -= 20;
            }
            
            while (saque >= 10) {
                cedulas10++;
                saque -= 10;
            }
            
            while (saque >= 5) {
                cedulas5++;
                saque -= 5;
            }
                
            
            console.log(" A quantidade de notas 100 é: " + cedulas100);
            console.log(" A quantidade de notas 50 é: "  + cedulas50);
            console.log(" A quantidade de notas 20 é: "  + cedulas20);
            console.log(" A quantidade de notas 10 é: "  + cedulas10);
            console.log(" A quantidade de notas 5 é: "   + cedulas5);  

    }else{
        console.log("O valor escolhido não está disponível, pois o caixa só pode receber múltiplos de R$5. Por favor, tente novamente.");
    };

};  


caixaEletronico(200);


module.exports = caixaEletronico;



