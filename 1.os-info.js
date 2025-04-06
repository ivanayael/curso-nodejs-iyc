const os = require('node:os')

console.log('Nombre del sistema operativo', os.platform()) // darwin
console.log('Versión del sistema operativo', os.release()) // 20.6.0
console.log('Tipo de sistema operativo', os.type()) // Darwin
console.log('Dias que lleva el ordenador encendido', os.uptime()) // 2521
console.log('Informacion del usuario', os.userInfo()) // { uid: 501, gid: 20, username: 'jose', homedir: '/Users/jose', shell: '/bin/zsh' }
console.log('Total de memoria', os.totalmem()) // 17179869184
console.log('Total de memoria disponible', os.freemem()) // 1478947840
console.log('Home dir', os.homedir()) // /Users/jose
console.log('HostName', os.hostname()) // MacBook-Pro-de-Jose.local
console.log('Modelo de CPU', os.cpus()) // { model: 'Intel(R) Core(TM) i5-1038NG7 CPU @ 2.00GHz',
console.log('Arquitectura de CPU', os.arch()) // x64
console.log('Directorio temporal', os.tmpdir()) // /var/folders/7_/z5z1zv7d7zq1 
console.log('Directorio de usuario', os.homedir()) // /Users/jose   
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() / 60 / 60)
console.log('CPU General Info', os.cpus())
console.log('CPU', os.cpus().length)
console.log('CPU', os.cpus()[0].model)  // Intel(R) Core(TM) i5-1038NG7 CPU @ 2.00GHz
console.log('CPU Velocidad', os.cpus()[0].speed)  // 2000 
console.log('CPU tiempos: general', os.cpus()[0].times)  // { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
console.log('CPU User', os.cpus()[0].times.user) // 0
console.log('CPU Nice mode time', os.cpus()[0].times.nice) // 0
console.log('CPU Sys mode time', os.cpus()[0].times.sys) // 0
console.log('CPU idle mode time', os.cpus()[0].times.idle) // 0
console.log('CPU irq mode time', os.cpus()[0].times.irq) // 0

