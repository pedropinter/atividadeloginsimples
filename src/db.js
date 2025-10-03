const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'escola'
});

db.connect((err) => {
    if (err) {
        console.error('Erro de Conexao:', err)
        return;
    }
    console.log('Conectado no MySQL');
});
module.exports = db;