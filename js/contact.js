let asidewidth = $('.black').innerWidth() ;

$('.dash ').click(function () {
    
    if ($('.black').css('left')== "0px") {
        $(".white").animate({left : "0"},600)
        $('.black').animate( {left : -asidewidth} , 600  )
        $('.fa-align-justify').removeClass('fa-times')
        $("li , .mediaicons , .copy").fadeOut( 100);



    }else{
        $(".white").animate({left : "220px"},600)
        $('.black').animate( {left : 0} , 600 ,function () {
            $("li , .mediaicons , .copy").fadeIn( 400);

        })
        $('.fa-align-justify').addClass('fa-times')



    }
    
})

let userName = document.querySelector('#name')
let userEmail = document.querySelector('#email')
let userAge = document.querySelector('#age')
let userNumber = document.querySelector('#phone')
let userPassword = document.querySelector('#password')
let userRepassword = document.querySelector('#repassword')



function checkValidation() {
    if (namevalid() && emailvalid() && userNumbervalid() && userAgevalid() && passwvalid() && repasswvalid()) {
        $('.sbutton').css('cursor','pointer').css('opacity','1')
    
    }else{
        $('.sbutton').css('cursor','not-allowed').css('opacity','.1')
    
    
    }
}
checkValidation()



$(document).ready(function () {
    $(".loading").fadeOut(1000,function () {
        $(document.body).css('overflowY','visible')
    })
})

function namevalid(){
    let regex= /^[a-zA-Z]{3,12}$/
    return regex.test(userName.value) 
    
}

$(userName).keyup(function () {
    if (    namevalid()    ) {
        $(this).css("borderBottom",'1px solid green')
        $('.namemss').text('')

    }else{
        $(this).css("borderBottom",'1px solid red')
            $('.namemss').text('Special Characters and Numbers not allowed')


    }
    checkValidation()

})

function emailvalid(){
    let regex= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    return regex.test(userEmail.value)
}
$(userEmail).keyup(function () {
    if (    emailvalid()    ) {
        $(this).css("borderBottom",'1px solid green')
        $('.emailmss').text('')

    }else{
        $(this).css("borderBottom",'1px solid red')
        $('.emailmss').text('Enter valid email. *Ex: xxx@yyy.zzz ')


    }
    checkValidation()
})

function userNumbervalid(){
    let regex= /^01[0125][0-9]{8}/
    return regex.test(userNumber.value)
}
$(userNumber).keyup(function () {
    if (    userNumbervalid()   ) {
        $(this).css("borderBottom",'1px solid green')
        $('.numbermss').text(' ')

    }else{
        $(this).css("borderBottom",'1px solid red')
        $('.numbermss').text('Enter valid phone number ')


    }
    checkValidation()
})

function userAgevalid(){
    let regex= /[2-9][0-9]|15|16|17|18|19|100/
    return regex.test(userAge.value)
}
$(userAge).keyup(function () {
    if (    userAgevalid()    ) {
        $(this).css("borderBottom",'1px solid green')
        $('.agemss').text(' ')

    }else{
        $(this).css("borderBottom",'1px solid red')
        $('.agemss').text('Enter valid age ')


    }
    checkValidation()
})


function passwvalid(){
    let regex= /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,20}$/
    return regex.test(userPassword.value)
}
$(userPassword).keyup(function () {
    if (    passwvalid()    ) {
        $(this).css("borderBottom",'1px solid green')
        $('.passmss').text('')

    }else{
        $(this).css("borderBottom",'1px solid red')
        $('.passmss').text('Enter valid password *Minimum eight characters, at least one letter and one number:* ')


    }
    checkValidation()
})


function repasswvalid(){
    let regex= /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,20}$/
    return regex.test(userRepassword.value)
}
$(userRepassword).keyup(function () {
    if (   repasswvalid() &&  userPassword.value === userRepassword.value ) {
        $(this).css("borderBottom",'1px solid green')
        $('.passmss2').text('')

    }else{
        $(this).css("borderBottom",'1px solid red')
        $('.passmss2').text('Enter valid password *Minimum eight characters, at least one letter and one number:* ')


    }
    checkValidation()
})

