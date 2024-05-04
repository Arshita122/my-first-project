var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');9

var user = {message:"",counter:0};



function getDate(){

    var date = new Date();
    var day = date.getDay(); 
    var month = date.getMonth(); 
    var dayOfMonth = date.getDate(); 

    var dayArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday'];
    var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return dayArray[day] + " , " + monthArray[month] + " " + dayOfMonth;






}



var arrayOfpossibleMessages = [
    {"message":"hi","response":"hello"},
    {"message":"hello","response":"hey"},
    {"message":"hey","response":"hii"},
    {"message":"hii","response":"hello"},
    {"message":"how r u?","response":"great"},
    {"message":"how are you?","response":"great"},
    {"message":"how are u?","response":"great"},
    {"message":"how you doing?","response":"great"},
    {"message":"how are you today?","response":"great"},
    {"message":"how,s it going?","response":"great"},
    {"message":"how's everything?","response":"great"},
    {"message":"how have you been?","response":"great"},
    {"message":"how do you do?","response":"great"},
    {"message":"what is your name?","response":"assistant"},
    {"message":"what's your name?","response":"assistant"},
    {"message":"your name?","response":"assistant"},
    {"message":"name?","response":"assistant"},
    {"message":"may i know your name?","response":"assistant"},
    {"message":"can you tell me your name","response":"assistant"},
    {"message":"who are you?","response":"assistant"},
    {"message":"what do i call you?","response":"assistant"},
    {"message":"what should i call you?","response":"assistant"},
    {"message":"what are you called?","response":"assistant"},


    {"message":"can you help me?","response":"ya sure"},
    {"message":"ok","response":"what kind of help you need?"},
    {"message":"i want to search a top college","response":"ok"},
    {"message":"find me a bca college","response":"<a href='https://collegedunia.com/bca-colleges' target='_blank'>Click here</a>"},



    {"message":"today's date","response": getDate()},



];


setTimeout(function(){


    chatbotSendMessage("hello!");


},1000);



function chatbotSendMessage(messageText){

    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin="10px";
    messageElement.style.padding="5px";
    messageElement.innerHTML ="<span>Chatbot:</span>"+
    "<span style="+"margin-top:10px; padding:10px"+">"+messageText +"</span>";
    chatContainer.appendChild(messageElement);




}


function SendMessage(messageText){

    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-right');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin="10px";
    messageElement.style.padding="5px";
    messageElement.innerHTML ="<span>you:</span>"+
    "<span style="+"margin-top:10px; padding:10px"+">"+messageText +"</span>";
    chatContainer.appendChild(messageElement);


}
sendBtn.addEventListener('click', function(e){
    if(textbox.value==""){
        alert('please type in a message');



    }else{

    let messageText = textbox.value.trim();
    user.message = messageText;
    SendMessage(messageText);
    textbox.value = "";
    processMessage();


    
    }
});


function processMessage() {
    if (user.message.length > 2 || user.message.includes('hi')) {
        // Filter array of possible messages
        var result = arrayOfpossibleMessages.filter(val => val.message.includes(user.message.toLowerCase()));
        if (result.length > 0) {
            var response = result[0].response;
            setTimeout(function() {
                chatbotSendMessage(response);
            }, 1000);
        } else {
            setTimeout(function() {
                chatbotSendMessage("Sorry! I don't understand you.");
            }, 1000);
        }
    } else if (user.message === "how" || user.message === "who") {
        setTimeout(function() {
            chatbotSendMessage("?");
        }, 1000);
    } else {
        setTimeout(function() {
            chatbotSendMessage("Please send me complete information.");
        }, 1000);


    }
}


textbox.addEventListener('keypress',function(e){

    //if user hit the enter button on keyboard(13)
    if(e.which == 13){
        

        if(textbox.value==""){
            alert('please type in a message');
    
    
    
        }else{
    
        let messageText = textbox.value.trim();
        user.message = messageText;
        SendMessage(messageText);
        textbox.value = "";
        processMessage();
        }        


    }



});




