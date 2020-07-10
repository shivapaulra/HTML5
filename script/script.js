
function init(){
	var n1= document.createElement("span");
	n1.id="name1";
	n1.innerHTML = 'Player Name';
	document.getElementById('div_outer').appendChild(n1);
	
	var a1= document.createElement("span");
	a1.id="age1";
	a1.innerHTML = 'Player Age';
	document.getElementById('div_outer').appendChild(a1)	
	
	var text1= document.createElement("input");
	text1.id="text_box1";
	text1.type = 'text';
	text1.value = '';
	document.getElementById('div_outer').appendChild(text1);
	
	var text2= document.createElement("input");
	text2.id="text_box2";
	text2.type = 'text';
	text2.value = '';
	document.getElementById('div_outer').appendChild(text2);
	
	var start_button= document.createElement("input");
	start_button.id="start_button";
	start_button.type = 'submit';
	document.getElementById('div_outer').appendChild(start_button);
	
	start_button.addEventListener("click",function(){
		var name= document.getElementById('text_box1').value;
		var age= document.getElementById('text_box2').value;
		
		var name1=name.length;
		console.log(name1,age);
		if(name1 > 10){
			alert("Name is Not Lesthan 10 Character");
		}
		if(name1 <= 1){
			alert("Name is Not Define");
		}
		
		if(isNaN(age)){
			alert("The Age Not a Number : " +age);
		}
		if(100 > age && age < 18){
			alert("You Not Allow to play game");
		}
		document.getElementById('div_outer').display="none";
		
		start_button.display="none";
		 text1.display="none";
		 text2.display="none";
		/* n1.display="none";
		 n2.display="none";*/
	},false);
	
	function check_mark(count){
		if(count < 3){
				alert("Poor");
			}
		if(count ==3){
				alert("Good");
		}
		if(count == 4){
				alert("Very Good");
		}
		if(count == 5){
				alert("Excellent");
		}
	}
	
	
}

window.onload=init;
