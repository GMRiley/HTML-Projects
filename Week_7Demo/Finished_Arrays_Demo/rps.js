
// Array that will store the images used

var pics=new Array();

pics[0]="images/rock.jpg";
pics[1]="images/paper.jpg";
pics[2]="images/scissors.jpg";

// Array that stores the highlighted images

var pics2=new Array();

pics2[0]="images/rock2.jpg";
pics2[1]="images/paper2.jpg";
pics2[2]="images/scissors2.jpg";


// Array that stores the play and computer ID's

var pId=new Array("rock_p","paper_p","scissors_p");

var cId=new Array();

cId[0]="rock_c";
cId[1]="paper_c";
cId[2]="scissors_c";


// function that will swap the regular images to highlighted ones

function swap(id,image) {
	
	document.getElementById(id).src=image;
	
}

//Play function -------------------------------------------------

function play(id) {
	
	swap(pId[0],pics[0]);
	swap(pId[1],pics[1]);
	swap(pId[2],pics[2]);
	
	swap(cId[0],pics[0]);
	swap(cId[1],pics[1]);
	swap(cId[2],pics[2]);
	
	var p_choice=id;
	
	var c_choice=id;
	
	var c_choice=Math.floor(Math.random()*2.9);
	
	swap(pId[p_choice],pics2[p_choice]);
	
	swap(cId[c_choice],pics2[c_choice]);
	
	
	//switch
	
	switch(p_choice) {
		
		case 0:
		if(c_choice==0) {
			
			alert("Bloody Hell it's a Draw!");
		} else if(c_choice==1) {
			
			alert("You stupid bastard!");
		} else {
			
			alert("Led Zeppelin");
		}
		
		
		
	} // end switch
	
	
} // end play function








