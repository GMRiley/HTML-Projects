//switch statement JS


function duh() {
	
	var day;
	
	switch(new Date().getDay()) {
		
		case 0:
		day="Sunday";
		break;
		
		case 1:
		day="Monday";
		break;
		
		case 2:
		day="Tuesday";
		break;
		
		case 3:
		day="Wednesday";
		break;
		
		case 4:
		day="Thursday";
		break;
		
		case 5:
		day="Friday";
		break;
		
		case 6:
		day="Saturday";
		break;
		
		
} // end of switch

document.getElementById("dayo").innerHTML="Today is"+day;
	
	
} // end duh function



var drinks=new Array();

drinks[0]="Beer";
drinks[1]="Coffee";
drinks[2]="Tea";

alert(drinks[1]);




