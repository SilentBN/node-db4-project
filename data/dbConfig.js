// data/dbConfig.js
const knex = require("knex");
const knexConfig = require("../knexfile.js");

// Use the development configuration from knexfile.js
module.exports = knex(knexConfig.development);
