'use strict'

// File system
const fs = require ('fs')

const archivos = fs.readdirSync('./fs')
console.log(archivos);