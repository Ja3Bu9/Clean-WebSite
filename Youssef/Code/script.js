let toggle = false;
function showMenu(){
    let menuIcon = document.getElementById("menu-icon");
    let menu = document.querySelector(".nav-menu .nav-links ul");
    if (toggle){
        menuIcon.innerHTML = '<i class="fa fa-bars" ></i>'
        menu.style.right = "-94%";
        toggle = !toggle;
 
    } else {
        menuIcon.innerHTML = '<i class="fa fa-times" ></i>'
        menu.style.right = "0";
        toggle = !toggle;
    }     
}

function checkInput(type){
    let input = document.getElementById(type);
    if(type === 'name'){
        // check for a valid full name contain at lease 3 characters
        markError(/^([A-Za-z]{3,})+([\s[A-Za-z]?]?)+$/.test(input.value), input, type);
    }else if(type === 'email'){
        // check for a valid email
        markError(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value), input,type);
    }else if( type === 'subject'){
        // subject must be 5 or more characters
        markError(input.value.length >= 5, input, type);
    }else if(type === 'message'){
        // message must be 10 or more characters
        markError(input.value.length >= 10, input, type);
    }
}

function markError(state,input, type){
        if(!state){
            input.style.borderBottomColor = "Tomato";
            document.getElementById("warning-"+type).style.display = "block";
        }else{
            input.style.borderBottomColor = "MediumSeaGreen";
            document.getElementById("warning-"+type).style.display = "none";
        }
}