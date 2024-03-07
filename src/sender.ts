import SMTPConnection from "nodemailer/lib/smtp-connection"

let connection = new SMTPConnection({ port: 3456, host: '127.0.0.1' })

// connection.send({ from: '' }, "Test-02", () => {})
