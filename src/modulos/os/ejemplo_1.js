const os = new require ("os")

// console.log(os);
let libre = os.freemem()
console.log(libre);

let completa = os.totalmem()
console.log(completa);

// Puedes acceder a información de hardware con el modulo os (Operative System)