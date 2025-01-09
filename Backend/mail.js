const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user: "adityasuryawanshi5451@gmail.com",
    pass: "xruv mokt eepo plsl",
  },
});

async function main() {
    
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: "adityavanshi5451@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);

  }
  
  main().catch(console.error);