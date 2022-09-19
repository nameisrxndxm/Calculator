// ce set all to 0
// c set lower display to 0



//query selector for display and set top and botoom
//initialized variable for top display
//set top display to equal b variable

const topDisplay = document.querySelector('#top-display')
let b ="0";
topDisplay.textContent = (b);


//initialized variable for bottom display
//set bottom display to equal a variable

const bottomDisplay = document.querySelector('#bottom-display')
let a ='';
bottomDisplay.textContent = (a);

let mathState ="";

function checkState (x){
    if (x == "subtraction"){
        tempA = parseFloat(a)
        tempB = parseFloat(b)
        tempResult = tempB-tempA
        b = tempResult;
        console.log(b, typeof(b))
        topDisplay.textContent = (b);
        a = "";
        bottomDisplay.textContent = (a);
    } else if (x=="addition"){
        tempA = parseFloat(a)
        tempB = parseFloat(b)
        tempResult = tempB+tempA
        b = tempResult;
        topDisplay.textContent = (b);
        a = "";
        bottomDisplay.textContent = (a);
    } else if (x=="division"){
        tempA = parseFloat(a)
        tempB = parseFloat(b)
        tempResult = tempB/tempA
        b = tempResult;
        topDisplay.textContent = (b);
        a = "";
        bottomDisplay.textContent = (a);
    } else if (x=="multiplication")
        {tempA = parseFloat(a)
        tempB = parseFloat(b)
        tempResult = tempB*tempA
        b = tempResult;
        topDisplay.textContent = (b);
        a = "";
        bottomDisplay.textContent = (a);
    } 

}



//query selectors for numbers

document.querySelector('#one').addEventListener('click',function(){
    let temp;
    temp = a+"1";
    a=temp;
    bottomDisplay.textContent = (a);
});



document.querySelector('#two').addEventListener('click',function(){
    temp = a+"2";
    a=temp;
    bottomDisplay.textContent = (a);
});
document.querySelector('#three').addEventListener('click',function(){
    temp = a+"3";
    a=temp;
    bottomDisplay.textContent = (a);
});
document.querySelector('#four').addEventListener('click',function(){
    temp = a+"4";
    a=temp;
    bottomDisplay.textContent = (a);
});
document.querySelector('#five').addEventListener('click',function(){
    temp = a+"5";
    a=temp;
    bottomDisplay.textContent = (a);
});
document.querySelector('#six').addEventListener('click',function(){
    temp = a+"6";
    a=temp;
    bottomDisplay.textContent = (a);
});
document.querySelector('#seven').addEventListener('click',function(){
    temp = a+"7";
    a=temp;
    bottomDisplay.textContent = (a);
});
document.querySelector('#eight').addEventListener('click',function(){
    temp = a+"8";
    a=temp;
    bottomDisplay.textContent = (a);
});
document.querySelector('#nine').addEventListener('click',function(){
    temp = a+"9";
    a=temp;
    bottomDisplay.textContent = (a);
});
document.querySelector('#zero').addEventListener('click',function(){
    temp = a+"0";
    a=temp;
    bottomDisplay.textContent = (a);
});

document.querySelector('#dot').addEventListener('click',function(){
    if(a.includes('.')){
        alert("WTF ARE YOU DOING?????")
    }
    else {
        temp = a+".";

        a=temp;
        bottomDisplay.textContent = a;
    }
   
});

//math functions

document.querySelector('#subtraction').addEventListener('click',function(){

    

 if (b == "0"){
    console.log(mathState)
    b=a;
    a="";
    topDisplay.textContent = (b);
    bottomDisplay.textContent = (a);
    mathState ="subtraction";
    console.log(mathState)
 } else {
    console.log(mathState)
    checkState(mathState);
    mathState ="subtraction";
    console.log(mathState)
     
}


    console.log(mathState);
});

document.querySelector('#addition').addEventListener('click',function(){

     if (b == "0"){
        b=a;
        a="";
        topDisplay.textContent = (b);
        bottomDisplay.textContent = (a);
        mathState ="addition";
     } else {
        console.log(mathState)
        checkState(mathState);
        mathState ="addition";
        console.log(mathState)
        
    }
    
    console.log(mathState);

});

document.querySelector('#division').addEventListener('click',function(){
    


    if (b == "0"){
        console.log(mathState)
        b=a;
        a="";
        topDisplay.textContent = (b);
        bottomDisplay.textContent = (a);
        mathState ="division";
        console.log(mathState)
     } else {
        console.log(mathState)
        checkState(mathState);
        mathState ="division";
        console.log(mathState)
         
    }


});


document.querySelector('#multiplication').addEventListener('click',function(){
    


    if (b == "0"){
        b=a;
        a="";
        topDisplay.textContent = (b);
        bottomDisplay.textContent = (a);
        mathState ="multiplication";
        console.log(mathState)
     } else {
        console.log(mathState)
        checkState(mathState);
        mathState ="multiplication";
        console.log(mathState)
         
    }


});

document.querySelector('#equals').addEventListener('click',function(){
    
    if (a == ""){
        return
     } else {
        console.log(mathState)
        checkState(mathState);
        mathState="";
        console.log(mathState)
         
    }

});

//query for controls

document.querySelector('#clear-entirely').addEventListener('click', function(){
    topDisplay.textContent = "0";
    a="";
    bottomDisplay.textContent = "";
    b="0";
}
);

document.querySelector('#clear').addEventListener('click',function(){
    bottomDisplay.textContent = "";
    a="";
}
);

document.querySelector('#undo').addEventListener('click',function(){
    
    console.log((a.pop()), "AAAAAAA")
    bottomDisplay.textContent = (a);

});





