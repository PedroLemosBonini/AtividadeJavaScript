

module.exports = class controllerNumbers{

    static async checkPar(req,res){
        const { number } = req.body;
        if(isNaN(number)){
            res.status(400).json({message: 'Dados Inválidos'})
        }
        else if(number % 2 == 0){
            res.status(200).json({message: 'O número é PAR'})
        }
        else{
            res.status(200).json({message: 'O número é ÍMPAR'})
        }
    }

    

    static async checkPrimo(req,res){
        const { number } = req.body;
        function primos(num){
        
            for(let i = 2; i<= Math.sqrt(num); i++){
                if(num % i === 0){
                    /* Se um número(num) é divisível por qualquer número(i) entre 2 e a raíz dele(num), 
                    ele não é primo*/
                    return false;
                }
            }
            return true;
        }

        if(isNaN(number) || typeof number === "string"){
            res.status(400).json({message: 'Dados Inválidos'})
        }
        else if(primos(number)){
            res.status(200).json({message: 'É Primo'})
        }
        else{
            res.status(200).json({message: 'Não é Primo'})
        }
    }
}