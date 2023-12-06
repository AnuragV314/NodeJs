let nodemailer = require('nodemailer')

// console.log(nodemailer);

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'vermagup01@gmail.com',
        pass:'kbdjfbxvc'
    }
})

let mailOption = {
    from:'vermagup01@gmail.com',
    to:"vermagup01@gmail.com,vermagup01@gmail.com,vermagup01@gmail.com",
    subject: 'Registration Success',
    text: 'Consgratulation , Successfully Registered with Nodejs, All the Best.'
    // or 
    // html 
}

transporter.sendMail(mailOption, (err, info)=>{
    if(err){
        console.log(err)
        console.log('Sorry Email Cannot be sent');
    }
    else{
        console.log('Email sent Successfully!');
    }
})





