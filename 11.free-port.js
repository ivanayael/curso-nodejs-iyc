

function findavailablePort(desireport) {
    return new Promise((resolve, reject) => {
      const server = http.createServer()
  
  
      server.listen(desireport, () => {
          const { port } = server.address()
          console.log(`Server listening on port ${port}`)
          server.close(() => {
              resolve(part)
          })
      })
      server.on('listening', () => {
          server.close(() => {
              resolve(desireport)
          })
      })
      server.on('close', () => {
          resolve(desireport)
      })
      server.on('error', (err) => {
          if (err.code === 'EADDRINUSE') {
              findavailablePort(desireport + 1).then(port => resolve(port))   
          } else {
              reject(err)
          }
      })
    })   
  }