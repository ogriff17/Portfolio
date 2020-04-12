$(document).ready(function(){
    $('.submit').click(function(event){
        event.preventDefault();
        console.log("Hello there!");
    
        var name = $('.name').val();
        var email = $('.email').val();
        var message = $('.message').val();
        var statusElm = $('.status');
        statusElm.empty();
       
        console.log(email.length);
        console.log(message.length);
        console.log("message=" + message + " end ");

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
         statusElm.append('<div>This email is working</div>')

        } else { 
           statusElm.append('<div>Email trouble</div>')
         }
         if (message.length > 2) {
             statusElm.append('<div> Message is valid</div>')
         } else {
            statusElm.append('<div> Message is not valid</div>') 
         }

         if (name.length > 20 || name.length < 10) {
            statusElm.append('<div>Name is invalid</div>')
         } 
    })

});