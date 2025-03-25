import { platform, release, type, uptime, userInfo, totalmem, freemem, homedir, hostname, cpus, arch, tmpdir } from 'node:os';

console.log('Nombre del sistema operativo', platform()) // darwin
console.log('Versión del sistema operativo', release()) // 20.6.0
console.log('Tipo de sistema operativo', type()) // Darwin
console.log('Dias que lleva el ordenador encendido', uptime()) // 2521
console.log('Informacion del usuario', userInfo()) // { uid: 501, gid: 20, username: 'jose', homedir: '/Users/jose', shell: '/bin/zsh' }
console.log('Total de memoria', totalmem()) // 17179869184
console.log('Total de memoria disponible', freemem()) // 1478947840
console.log('Home dir', homedir()) // /Users/jose
console.log('HostName', hostname()) // MacBook-Pro-de-Jose.local
console.log('Modelo de CPU', cpus()) // { model: 'Intel(R) Core(TM) i5-1038NG7 CPU @ 2.00GHz',
console.log('Arquitectura de CPU', arch()) // x64
console.log('Directorio temporal', tmpdir()) // /var/folders/7_/z5z1zv7d7zq1 
console.log('Directorio de usuario', homedir()) // /Users/jose   
