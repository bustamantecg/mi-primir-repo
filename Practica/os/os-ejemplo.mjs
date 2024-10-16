import os from 'os'

// obtener la arquitectura del sistema
console.log('Arquitectura: ', os.arch());

//obtener el tipo de sistema operativo
console.log('Tipo de sistema Operativo (Plataforma): ', os.platform());


//obtener la cantidad total de Memoria
console.log('total de Memoria: ', os.totalmem());


//obtener total de Memoria Libre
console.log('total de Memoria Libre: ', os.freemem());


//obtener informacion del CPU
console.log('informacion del CPU: ', os.cpus());

