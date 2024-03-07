// const SMTPServer = require("").SMTPServer;
import {SMTPServer} from 'smtp-server'
import {simpleParser} from 'mailparser'

const server = new SMTPServer({
  onData(stream, session, callback) {
    simpleParser(stream, {}, (err, parsed) => {
      if (err)
        console.log("Error:" , err)
      
      console.log(parsed)
      stream.on("end", callback)
    })
    
  },
  disabledCommands: ['AUTH']
});

server.listen(25, "64.227.100.36")