//also load scramble in stage1
function stage1()
{   
    document.getElementById("cseconds").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00:";
    document.getElementById("seconds").innerHTML = "00:";
    document.body.onkeydown = function(e)
    {	
    	console.log("scramble\n");
    	if(e.keyCode == 32) //press space to trigger stage 2
    	{	
    		stage2();
    		console.log("am here\n");
        }
    }
}    


function stage2()
{
    document.getElementById("cseconds").innerHTML = "";
    document.getElementById("minutes").innerHTML = "";
    document.getElementById("seconds").innerHTML = "15";
    document.body.onkeyup = function(e)
    {
    	if(e.keyCode == 32) //press space to trigger stage 2
    	{	
    		var elapsedTime, second=0;
    		startTime = Date.now();

    		var interval = setInterval(function() 
    		{	
    			document.body.onkeyup = function(e)
    			{
    				if(e.keyCode == 32) //press space to trigger stage 2
    				{	
    					window.clearInterval(interval);
    					stage3();
        			}
    			}

    			elapsedTime = Math.floor((Date.now() - startTime)/10);
    			second = Math.floor((elapsedTime)/100);
			    var second_string = "";
			    
			    if (15-second<=9){
			   	second_string = "0" + String(15-second);
			    }
			    else{
			    second_string = String(15-second);
			    }
			    document.getElementById("seconds").innerHTML = second_string;

		    }, 10);
        }
    }

    return;
}



function stage3()
{	
    document.getElementById("cseconds").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00:";
    document.getElementById("seconds").innerHTML = "00:";

	var elapsedTime, minute=0, second=0, centisecond=0;
    startTime = Date.now();

    var interval = setInterval(function() 
    {	

    	document.body.onkeyup = function(e)
    	{
    		if(e.keyCode == 32) //press space to trigger stage 2
    		{	
    			window.clearInterval(interval);
    			return;
        	}
    	}

    	elapsedTime = Math.floor((Date.now() - startTime)/10);
    	minute = Math.floor(elapsedTime/6000);
    	second = Math.floor((elapsedTime - minute*6000)/100);
    	centisecond = elapsedTime - (minute*6000 + second*100);
    	var minute_string = "";
	    var second_string = "";
	    var centi_string = "";
	    if(minute<=9){
	   	minute_string = "0" + String(minute);
	    }
	    else{
	   	minute_string = String(minute);
	    }
	    if (second<=9){
	   	second_string = "0" + String(second);
	    }
	    else{
	    second_string = String(second);
	    }
	    if(centisecond<=9){
	    centi_string = "0" + String(centisecond);
	    }
	    else{
	   	centi_string = String(centisecond);
	    }

	    document.getElementById("cseconds").innerHTML = centi_string;

	    document.getElementById("seconds").innerHTML = second_string + ":";	

	    document.getElementById("minutes").innerHTML = minute_string + ":";	
	    

    }, 10);
}



function stage4()
{
	document.body.onkeydown = function(e)
    {
    	if(e.keyCode == 32) //press space to trigger stage 2
    	{	
    		//alert('hello');
    		stage1();
        }
    }	
}





   
/*
what we want now is to divide the thing into stages. 
stage 1: 00:00:00 
stage 2: this is triggered when we press space and 15 se 0 tak ka countdown starts. 
stage 3: this is triggered when we press space in stage 2. if we don't and we reach 15 -> dnf. 
stage 4: normal time goes up from 00:00:00 till we press space. 
stage 5: when we press space in stage 4. if we press space or maybe R (for reset) we go back to stage 1.
*/
