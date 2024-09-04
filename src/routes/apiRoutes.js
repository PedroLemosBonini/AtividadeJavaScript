// Importa o módulo Router do express
// Router será utilizado para definir rotas específicas da aplicação
const router = require('express').Router();

const controllerNumbers = require('../controller/controllerNumbers');
// Importa a controller onde contém a lógica relacionada a professores
const teacherController = require('../controller/teacherController')

// Rota POST para '/teacher'
router.post('/teacher',teacherController.postTeacher);
router.get('/teacher',teacherController.getTeacher);


router.post('/checkPar',controllerNumbers.checkPar);
router.post('/checkPrimo',controllerNumbers.checkPrimo);


module.exports = router