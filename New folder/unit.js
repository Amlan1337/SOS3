
   const convertor=()=>{
    var inval=document.querySelector("#in_val").value;

    var inunit=document.querySelector("#in_unit").value;
    var outunit=document.querySelector("#to").value;
    
    
        if(inunit=="kilo"){
        var basic=inval*1000;
         
    }
    else if(inunit=="basic"){
       var basic=inval;
    }
    
    
    else if(inunit=="milli"){
        var basic=inval*1000;
    }
    else if(inunit=="mega"){
        var basic=inval*1000000;
         
    
    }
    else if(inunit=="micro"){
        var basic=inval*0.000001;
       
    }
    else if(inunit=="nano"){
        var basic=inval*0.000000001;
         
    }
    else if(inunit=="picro"){
        var basic=inval*0.000000000001;
      
    
    }
    else if(inunit=="giga"){
        var basic=inval*1000000000;}
    
    else if(inunit=="centi"){
        var basic=inval*0.01;
      
    }
    else if(inunit=="deci"){
        var basic=inval*0.1;
        
    }
    else if(inunit=="tera"){
        var basic=inval*1000000000000;}
    if(outunit=="milli"){

     document.querySelector("#out_val").value=basic*1000;;
    }
    else if(outunit=="basic"){
        document.querySelector("#out_val").value=basic;
    
        
    }
    else if(outunit=="kilo"){
        var out=basic*0.001;
         
         document.querySelector("#out_val").value=out;
    }
    else if(outunit=="micro"){
         
        var out=basic*1000000;
         
         document.querySelector("#out_val").value=out;
    }
    else if(outunit=="mega"){
        var out=basic*0.000001;
        
         document.querySelector("#out_val").value=out;
    }
    else if(outunit=="giga"){
        var out=basic*0.000000001;
        
         document.querySelector("#out_val").value=out;
    }
    else if(outunit=="tera"){
         
        var out=basic*0.000000000001;
    
         document.querySelector("#out_val").value=out;
    }
    else if(outunit=="nano"){
        var out=basic*1000000000;
        
         document.querySelector("#out_val").value=out;
    }
    else if(outunit=="centi"){
        var out=basic*100;
         
         document.querySelector("#out_val").value=out;
    }
    else if(outunit=="deci"){
        var out=basic*10;
        
         document.querySelector("#out_val").value=out;}
    
    else if(outunit=="picro"){
        var out=basic*1000000000000;
        document.querySelector("#out_val").value=out;

    
        
    }
    document.querySelector("#refresh").value="Refresh";
    
    }
   