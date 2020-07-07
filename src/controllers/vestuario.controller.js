const mySqlConnection = require('../../DataBase')
const controller = {}
//obtener los datos
controller.get = (req, res) => {
    mySqlConnection.query('SELECT*FROM productos WHERE categoria="vestuario"', (err, rows) => {
        if (!err) {
            res.json(rows)
        }
        else {
            print("Elementos no encontrados")
            console.log(err)
        }
    });
}

module.exports = controller;