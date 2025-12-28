let string="";
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=="AC"){
            string="";
            document.querySelector('input').value=string;

        }
        else if(e.target.innerHTML=="back"){
            string=string.slice(0,-1);
            document.querySelector('input').value=string;
        }

        
        
        else{
            if(e.target.innerHTML=="%"){
                e.target.innerHTML="*0.01";
            }
          
            console.log(e.target)
            if(e.target.innerHTML=='x'){
                e.target.innerHTML="*";
            }
            string=string + e.target.innerHTML;
            if(e.target.innerHTML=="*"){
                e.target.innerHTML="x";
            }
            if(e.target.innerHTML=="*0.01"){
                e.target.innerHTML="%";
            }
            document.querySelector('input').value=string;
    }
})

})