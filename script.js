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
        text=document.getElementById("screen").value
        text=text.replace("²","**2")
        result=eval(text)
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



        // text=document.getElementById("screen").value
        // var expression=text.toString()
        // function parseExpression(expression) {
            // Regular expression to match the square root symbol and the number
            // const regex = new RegExp("√" + "(\\d+)", "g");
            
            // Replace the square root symbol and the number with Math.sqrt
        //     const parsedExpression = expression.replace(regex, (_, number) => `Math.sqrt(${number})`);
        //     return parsedExpression;
        //   }
        //   const parsedExpression = parseExpression(expression);
        //   const result = eval(parsedExpression);
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
    document.getElementById("screen").value+="²"
    flag=3
}


function sq_root(){
    text=document.getElementById("screen").value
    if(text==0){
        document.getElementById("screen").value="√";
    }
    else{
        document.getElementById("screen").value+="√";
    }
    flag=4
}
