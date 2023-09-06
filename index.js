const sgMail = require('@sendgrid/mail')
const key = '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'
sgMail.setApiKey(key);


document.getElementById('subscription').onclick = () => {

    const receiptEmail = document.getElementById('newsletter1').value
    const msg = {
        to: receiptEmail, // Change to your recipient
        from: 'support@jjlaw.info', // Change to your verified sender
        subject: 'Thank you for subscribing!', // Change to your subject
        text: 'Thank you for subscribing!', // Change to your message
        html: '<strong>Thank you for subscribing!  Please keep an eye out for our regular news letter!</strong>',
    }
    sgMail.send(msg)
        .then(() => {
            console.log('Email sent')
            document.getElementById('newsletter1').value = ''
            document.getElementById('confirm').style.display = 'block'
        })
        .catch((error) => {
            console.error(error)
        })
}

