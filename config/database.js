import mysql from 'mysql2';

const options = {
  user     : 'bahloulmoufidi',
  password : '9e7f9df42be396eb6acf6b07c7888915',
  host     : 'db.3wa.io',
  database : 'bahloulmoufidi_entertainment-web-app'
};

export function createClassicConnexion() {
    return mysql.createConnection(options).promise();
}

let pool = null;

export function createPoolConnexion() {
    if (pool) {
        return pool;
    }
    pool = mysql.createPool(options).promise();
    return pool;
}