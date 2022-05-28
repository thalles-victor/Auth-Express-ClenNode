import nodemailer from "nodemailer";

export class Email {
  async sendEmail(email: string, name: string) {
    console.log(process.env.EMAIL, process.env.PASSWORD)

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      },
    })

    // throw new Error(
    //   `Cuidado para não enviar emails para desconhecidos,
    //   se for testar coloque seu email no to. Exp:
    //     to: process.env.EMAIL,
    //   E apague esse throw new Error.
    // `);
    const info = await transport.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Seu cadastro na nossa plataforma",
      text: `
        Ola ${name}, acaboamos de receber o seu cadastro no nosso site
      `,
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Demystifying Email Design</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body>
        <center>
          <h1
            style="
              font-weight: normal;
              font-family: Arial, Helvetica, sans-serif;
            "
          >Obrigado por ter se cadastrado na nossa plataforma</h1>
          <button style="
            background-color: transparent;
            border: 2px solid #4745F7;
            border-radius: 10px;
            padding: 5px;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 2em;
            "
            onmouseover="this.style.cursor='pointer'"
          > Confirmar email
          </button>
        </center>
      <body>
      </html>
      `
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
}