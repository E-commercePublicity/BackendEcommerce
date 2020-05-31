const mySqlConnection = require('../../DataBase')
const controller = {}
//obtener los datos
controller.get = (req, res) => {
    mySqlConnection.query('SELECT*FROM productos WHERE categoria="tecnologia"', (err, rows) => {
        if (!err) {
            res.json(rows)
        }
        else {
            console.log(err)
        }
    });
}

module.exports = controller;