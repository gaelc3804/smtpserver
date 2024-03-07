import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({ port: 25, tls: { rejectUnauthorized: false }, ignoreTLS: true });

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <teste12@forneriahotellery.com.br>', // sender address
    to: "gaelc3804@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Ola, seja bem vindo</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);

