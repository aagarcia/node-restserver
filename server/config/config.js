/**
 * Puerto
 */
process.env.PORT = process.env.PORT || 3000;

/**
 * Entorno
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/**
 * Vencimiento del Token
 * 60 segundos
 * 60 minutos
 * 24 horas
 * 30 dias
 */

process.env.CADUCIDAD_TOKEN = '48h';

/**
 * SEED de autenticación
 */

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

/**
 * Base de datos
 */

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://127.0.0.1:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

/**
 * Google Client ID
 */

process.env.CLIENT_ID = process.env.CLIENT_ID || '967742681153-c1qv3it06tr99k3743p2bqaibju9of5s.apps.googleusercontent.com';