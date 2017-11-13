


var arraay = []; 

document.getElementById("calculate").addEventListener("click", function(e) {
    e.preventDefault();
    var num1= parseInt( document.getElementById("num1").value);
    var num2= parseInt( document.getElementById("num2").value);
    
    
   
        
    var oprator = document.querySelector("input[name='op']:checked").value;
    
    sum_the_num( num1 , num2 ,oprator);
    
       
           });


function sum_the_num(num1, num2, oprator){
    var resolte ;
    
    if( arraay.length >10){
        arraay.shift();        
        }
    
    if(oprator == "plos"){
        resolte=num1+num2;
        arraay.push (num1+ "+" +num2+"="+resolte);
    }
    else if(oprator == "minos"){ 
        resolte=num1-num2;
        arraay.push (num1+"-"+num2+"="+resolte);
    }
    else if(oprator == "molti"){ 
        resolte=num1*num2;
        arraay.push (num1+"*"+num2+"="+resolte);
    }
    else if(oprator == "division"){ 
        resolte=num1/num2;
        arraay.push (num1+"/"+num2+"="+resolte);
    }
    else { document.getElementById("result").innerHTML= "not good"; }
    
    document.getElementById("result").innerHTML= resolte;
    
    
    document.getElementById('contain').innerHTML = '';
    var new_div = document.createElement("div");
    document.getElementById('contain').appendChild(new_div);
    
   
 
    var ul = document.createElement("ul");
    new_div.appendChild(ul);
    
  
    for ( let i = 0 ; i<arraay.length ; i++){
        
        var li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML= arraay[i];
        console.log(arraay);
        
        
    }
    
    
    
}