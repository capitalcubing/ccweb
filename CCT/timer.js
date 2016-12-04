    var CentiSeconds = 0;
    var timeVar;
   function setTimer(){
   	  CentiSeconds  = 0;
      timerVar = setInterval(countTimer, 10);//calls countTimer every 10 milli seconds 
   }
   
   function back_to_base(){
    	 
     document.body.onkeyup = function(e){
    if(e.keyCode == 32){

    document.getElementById("cseconds").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00:";
    document.getElementById("seconds").innerHTML = "00:";
     document.body.onkeyup = function(w){
    if(w.keyCode == 32){  
     setTimer();
     }
 }
}
     }

   }


   function countTimer() {
	   CentiSeconds++;
	   document.body.onkeyup = function(e){
    		if(e.keyCode == 32){
    		 window.clearInterval(timerVar); 
    		 back_to_base();
    		}
		}
	   var minute = Math.floor(CentiSeconds/6000);
	   var second = Math.floor((CentiSeconds - minute*6000)/100);
	   var centi_second = CentiSeconds - (minute*6000 + second*100);
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
	   if(centi_second<=9){
	    centi_string = "0" + String(centi_second);
	   }
	   else{
	   	centi_string = String(centi_second);
	   }

	   document.getElementById("cseconds").innerHTML = centi_string;

	   if(centi_second==0){
	   document.getElementById("seconds").innerHTML = second_string + ":";	
	   }

	   if(second==0){
	   document.getElementById("minutes").innerHTML = minute_string + ":";	
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
