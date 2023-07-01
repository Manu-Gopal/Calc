let flag=0
let result
let text=0
let txt=0
let sqr=0

function clicks(val){
    if(flag==1 || flag==2){
        flag=0
        document.getElementById("screen").value=""
    }
    document.getElementById("screen").value+=val
}

function click_op(op){
    if(flag==1){
        flag=0
        document.getElementById("screen").value=""
        document.getElementById("screen").value=result
        document.getElementById("screen").value+=op
    }
    else if(flag==2){
        flag=0
        document.getElementById("screen").value="0"
        document.getElementById("screen").value+=op
    }
    else{
        document.getElementById("screen").value+=op
    }
}

function clrscr(){
    document.getElementById("screen").value="0"
    flag=2
}

function eqclick(){
    if(flag==3){
        result=sqr*sqr
    }
    else if(flag==4){
        var squareRootValue=document.getElementById("screen").value
        var number = parseFloat(squareRootValue.replace("√", ""));
        if(number>=0){
            result=Math.sqrt(number)
        }
        else{
            result="Error"
        }
        
    }
    else{
        text=document.getElementById("screen").value
        result=eval(text)
    }
    document.getElementById("screen").value=result
    flag=1
}

function answer(){
    if(flag==2 || flag==1){
        flag=0
        document.getElementById("screen").value=""
        document.getElementById("screen").value=result
    }
    else{
        flag=0
        document.getElementById("screen").value+=result
    }
}

function sq(){
    sqr=document.getElementById("screen").value
    document.getElementById("screen").value+="²"
    flag=3
}

// const sqrtButton = document.getElementById('sqrt');
// sqrtButton.addEventListener('click', sq_root);

function sq_root(){
    document.getElementById("screen").value="√";
    flag=4
    // text=document.getElementById("screen").value
    // var text_float = parseFloat(text.value)
    // result=Math.sqrt(text)
    // document.getElementById("screen").value=result
}
