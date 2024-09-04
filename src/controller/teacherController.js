module.exports = class teacherController{

    // Cadastro de Professor
    static async postTeacher(req,res){
        const { nome, cargaHoraria } = req.body;
        if(!nome || !cargaHoraria){
            res.status(400).json({message: 'Dados inválidos'})
        }
        else{
            res.status(200).json({message: 'Informação recebida: Docente cadastrado',nome,cargaHoraria})
        }
    }

    // Listar Professor
    static async getTeacher(req,res){
        res.status(200).json({nome: "Pedro"})
    }
}