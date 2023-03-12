// Requerimos path para poder enviar los archivos HTML
const path = require('path');
// Creamos el objeto literal con los métodos a exportar
const admController = {

     // Manejo del pedido get con ruta
    agregado: (req,res)=>{
         // comunicarse con el modelo, conseguir información
        res.render('adm/agregado');
    }
}

// Exportamos el objeto literal con los distintos métodos, que se usará en el enrutador por defecto
module.exports = admController;