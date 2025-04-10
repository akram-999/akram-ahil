import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      tls: {
        // Do not fail on invalid certificates
        rejectUnauthorized: false
      }
    });

    const htmlTemplate = `
    <!DOCTYPE html>
    <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css">
        <style>
            * {
                box-sizing: border-box;
                border-radius: 10px;
            }
            body {
                margin: 0;
                padding: 0;
            }
            /* Rest of your CSS styles */
        </style>
    </head>
    <body class="body" style="margin: 0; background-color: #ffffff; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
            <tbody>
                <tr>
                    <td>
                        <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff4e8;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px; margin: 0 auto;" width="680">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <div class="spacer_block block-1 mobile_hide" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                                                    </td>
                                                    <td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <div class="spacer_block block-1" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
                                                        <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                                                    <div class="alignment" align="center" style="line-height:10px">
                                                                        <div style="max-width: 147px;"><img src="https://1a1d8b230f.imgdist.com/pub/bfra/wg5b4okt/1fl/zyd/wti/animal-anthropomorphized-bird-1320792.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="147" alt="logo" title="logo"></div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff4e8;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px; margin: 0 auto;" width="680">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                                                        <table class="paragraph_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div style="color:#34495e;font-family:Verdana, Geneva, sans-serif;font-size:46px;line-height:150%;text-align:center;mso-line-height-alt:69px;">
                                                                        <p style="margin: 0; word-break: break-word;"><strong><span style="word-break: break-word;">New Contact Form Message</span></strong></p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px; margin: 0 auto;" width="680">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <div class="spacer_block block-1" style="height:45px;line-height:45px;font-size:1px;">&#8202;</div>
                                                        <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;">
                                                                    <div style="color:#34495e;font-family:Verdana, Geneva, sans-serif;font-size:24px;line-height:200%;text-align:center;mso-line-height-alt:48px;">
                                                                        <p style="margin: 0; word-break: break-word;"><strong><span style="word-break: break-word;">Email From: ${name}</span></strong></p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" style="padding-bottom:10px;padding-left:35px;padding-right:10px;">
                                                                    <div style="color:#555555;font-family:Verdana, Geneva, sans-serif;font-size:14px;line-height:200%;text-align:center;mso-line-height-alt:28px;">
                                                                        <p style="margin: 0;">Email: ${email}</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #faf0f0;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px; margin: 0 auto;" width="680">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <div class="spacer_block block-1" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
                                                        <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;">
                                                                    <div style="color:#34495e;font-family:Verdana, Geneva, sans-serif;font-size:24px;line-height:150%;text-align:left;mso-line-height-alt:36px;">
                                                                        <p style="margin: 0; word-break: break-word;"><strong><span style="word-break: break-word;">"<br>${message}<br><p style="text-align: left;">„</p></span></strong></p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
    </html>
    `;

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Message from ${name}`,
      html: htmlTemplate,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 