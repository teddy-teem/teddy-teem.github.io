
    var bgImage = document.getElementById("bg-image");
    bgImage.style.listStyle = "none";
    bgImage.style.opacity = ".4"
    bgImage.style.position = "relative"



    for(var i=1; i<=50; i++){
        var li = document.createElement('li');
        var img = document.createElement('img')
        var imgName = "pic"+i+".png";
        img.src = "./floatingImages/"+imgName;
        img.alt = "Picture"
        var hw = parseInt(Math.random() * 50) + 50;
        hw > 100 ? hw=100:hw;
        img.height = hw;
        img.width = hw;

        li.id = "pic"+i;
        li.appendChild(img);
        bgImage.appendChild(li);
        
    }

    
    var textArray = ["Web Developer","Android Developer","Competitive Programmer","Passionate  Worker", " Research Enthusiast"];
    var index = 0;
    setInterval(function(){        
        $("#disignation").animate({
             opacity:0
        },function()
        {
            if(textArray.length > index) {
                 $(this).text(textArray[index]).animate({opacity:1})
                index++; 
              }
             else
             index = 0;
        });
    },2000);

    var emailSendBtn = document.getElementById('sendMail');
     
    emailSendBtn.addEventListener("click", ()=>{
        // console.log(getVal());
        var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");
        var subjectInput = document.getElementById("subject");
        var messageInput = document.getElementById("message");
        
        var Body=`Name: ${nameInput.value} \nEmail: ${emailInput.value}\nSubject: ${subjectInput.value}\nMessage: ${messageInput.value}`;
        //console.log(name, phone, email, message);
         window.open(`mailto:jahidrsn@gmail.com?subject=${subjectInput.value}&body=${Body}`);
    });
    var floatingMessageBtn = document.getElementById("skip");
    var floatingMessageArea = document.getElementById("floatingMessage");
    floatingMessageBtn.addEventListener("click", ()=>{
        floatingMessageArea.style.visibility="hidden";
    })












