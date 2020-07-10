//Game 
var next_button;
var quesCnt = 0;
var rightCnt = 0;
var wrongCnt = 0;
function init(){
		//front_page();
		game_page();
		next_button = document.createElement('input');
		next_button.id='next_button_1';
		next_button.value='Next';
		next_button.type='submit';
		next_button.style.display = 'none';
		div_outer.appendChild(next_button);
		console.log(next_button);
		next_button.addEventListener("click", function(e){
			nextQuesCall();
		}, false);
}
var ansChk;
var grade=0;
var name='';
var count= 0;
var result= 0;
var select_color;
	//question And Answer in array
var arr = [];
	arr[arr.length] = ["1Where is TajMahal ?", "A) Tamil Nadu","B) Punjab","C) Kerala","D) Delhi","E) Goa","D) Delhi"];
	arr[arr.length] = ["2Who is Indian Cricketer ?","A) Bret Lee","B) Kumar Sankakara","C) Sachin","D) Warner","E) Hussy","C) Sachin"];
	arr[arr.length] = ["3Which Team won 2013 Cricket World Cup?","A) Pakistan","B) SriLanka","C) Australia","D) South Africa","E) India","E) India"];
	arr[arr.length] = ["4Who is the Actor of Verram  ?","A) Ajith","B) kamal","C) Vijay","D) Rajini","E) Vikram","A) Ajith"];
	arr[arr.length] = ["5What is the Capital of Tamil Nadu ?","A) Chennai","B) Covai","C) Madurai","D) Tirunelveli","E) Adayar","A) Chenai"];
	
/*var arr=[["Inside which HTML element do we put the JavaScript?","&lt;scripting&gt;","&lt;jq&gt;","&lt;script&gt;","&lt;js&gt;","&lt;javascript&gt;","&lt;script&gt"],
			["Where is the correct place to insert a JavaScript?","The &lt;body&gt; section","The &lt;title&gt; section","Both the &lt;head&gt; section and the &lt;body&gt; section are correct","The &lt;head&gt; section","Both the &lt;head&gt; section and the &lt;body&gt; section are correct"],
			["How do you create a function in JavaScript?",	"function myFunction{}","function myFunction{}","function=myFunction()","function:myFunction()","function myFunction()"]];*/
var aray=0;
var array_length=arr.length;
	
var optionSelected = true;
//starting page 
function front_page(){
	var name1 = document.createElement('span');
	name1.id='name_1';
	name1.innerHTML='Enter Name';
	var age1 = document.createElement('span');
	age1.id='age_1';
	age1.innerHTML='Enter Age';

	var name_textbox = document.createElement('input');
	name_textbox.id='name_textbox_1';
	name_textbox.value='';
	name_textbox.placeholder='Enter Your Age';
	var age_textbox = document.createElement('input');
	age_textbox.id='age_textbox_1';
	age_textbox.value='';
	age_textbox.placeholder='Enter Your Age';
	
	var start_button = document.createElement('input');
	start_button.id='start_button_1';
	start_button.value='Start';
	start_button.type='submit';
//create page 1to  get name and age
	div_out = document.getElementById('div_outer');
	div_out.appendChild(name1);
	div_out.appendChild(age1);
	div_out.appendChild(name_textbox);
	div_out.appendChild(age_textbox);
	div_out.appendChild(start_button);
	var start_button1 = document.getElementById('start_button_1');
	start_button1.addEventListener("click", function(e){
	//get name and age
	name = document.getElementById("name_textbox_1").value;
	var age = document.getElementById("age_textbox_1").value;
	//evaluation section for name and age
	var name_length = name.length;
			if(name_length > 10){
				alert("Enter Only 10 Characters");
		}
		if(name_length = 0){
			alert("Enter your Name");
		}
			
		if(isNaN(age)){
			alert("Enter your age Correctly");
		}
		if(age > 100){
			alert("You are not eligible to play this game");
		}
		if(age < 18){
			alert("You are not eligible to play this game");
		}
		if(age < 100 && age >17){
			//second page moving section to remove all elements in page 1
			div_out.removeChild(start_button_1);
			div_out.removeChild(name_1);
			div_out.removeChild(age_1);
			div_out.removeChild(name_textbox_1);
			div_out.removeChild(age_textbox_1);
		
			game_page();
		}
	},false);
}
var time;
//gmae process
var page2_question;
var page2_option1;
var page2_option2;
var page2_option3;
var page2_option4;
var page2_option5;
var answer_select=false;
function game_page(){
	var time1= document.createElement('span');
	time1.id='time_1';
	div_out = document.getElementById('div_outer');
	div_out.appendChild(time1);
	time= setInterval(timer,1000);
	
	page2_question = document.createElement('div');
	page2_question.id='question';
	page2_option1 = document.createElement('div');
	page2_option1.id='option1';
	page2_option1.className='check';
	page2_option2 = document.createElement('div');
	page2_option2.id='option2';
	page2_option2.className='check';
	page2_option3 = document.createElement('div');
	page2_option3.id='option3';
	page2_option3.className='check';
	page2_option4 = document.createElement('div');
	page2_option4.id='option4';
	page2_option4.className='check';
	page2_option5 = document.createElement('div');
	page2_option5.id='option5';
	page2_option5.className='check';
	
	div_out.appendChild(page2_question);
	div_out.appendChild(page2_option1);
	div_out.appendChild(page2_option2);
	div_out.appendChild(page2_option3);
	div_out.appendChild(page2_option4);
	div_out.appendChild(page2_option5);
	//random(arr);
	
	//display();
	nextQuesCall();
	var  check_answer= document.getElementsByClassName('check');			
	for(var i= 0; i<check_answer.length; i++) {
		check_answer[i].addEventListener("click", ansClick, false);
	}
}
function ansClick(e){
	optionSelected = true;
	var  check_answer= document.getElementsByClassName('check');
	for(var i= 0; i<check_answer.length; i++) {
		document.getElementById('option'+(i+1)).style.color="black";
	}
	select_color = e.target.id;
	ansChk=document.getElementById(select_color).innerHTML;

	document.getElementById(select_color).style.color="red";
	next_button.style.display = 'block';
}
function nextQuesCall(){
	if(quesCnt < 5){
		if(optionSelected){
			page2_question.innerHTML = arr[quesCnt][0];
			for(var i=0;i<array_length;i++){
				document.getElementById('option'+(i+1)).innerHTML = arr[quesCnt][i+1];
				document.getElementById('option'+(i+1)).style = 'black';
			}			
			optionSelected = false;
			quesCnt++;
		}else{
			alert('Please Select Options..!!!');
		}
	}else{
		for(var i=0;i<ansChkArr.length;i++){
			if(ansChkArr[i] == arr[i][arr.length-1]){
				rightCnt++;
			}else{
				wrongCnt++;
			}
		}
		console.log('rightCnt-->', rightCnt	, 'Wrong Cont-->', wrongCnt );
	}
}
var div_out;
//last div to show result
function showResult(){
	clearInterval(time);
	var upper_div = document.createElement('div');
	upper_div.id='div_upper';
	upper_div.innerHTML= name + 'Your Score is' + result + "/ 3 and Grade is : " + grade + 	'<br/> You Takes ' + count + 'sec'; 
	div_out = document.getElementById('div_outer');
	div_out.appendChild(upper_div);
	
	div_out.removeChild(question);
	div_out.removeChild(final_button_1);
	div_out.removeChild(option1);
	div_out.removeChild(option2);
	div_out.removeChild(option3);
	div_out.removeChild(option4);
	div_out.removeChild(option5);
	div_out.removeChild(time_1);
	count=1;
//play again button
	var play_againbutton = document.createElement('input');
	play_againbutton.id='play_again';
	play_againbutton.value='Play Again';
	play_againbutton.type='submit';
	upper_div.appendChild(play_againbutton);
	//play again option for reste the div content
	var playagain_button = document.getElementById('play_again');
	playagain_button.addEventListener("click", function(e){
		div_out.removeChild(div_upper);
	game_page();
	},false);
}
//random declaration 
function random(arr){
	var k=array_length;
	if(k==0)return false;
	while(--k){
		var random=Math.floor(Math.random() + (k+1));
		var temp1=arr[k];
		var temp2=arr[random];
		arr[random]=temp1;
		arr[k]=temp2;
	}
}
function display(){
	if(aray < array_length){
		page2_question.innerHTML= arr[aray][0];
		page2_option1.innerHTML= arr[aray][1];
		page2_option2.innerHTML= arr[aray][2];
		page2_option3.innerHTML= arr[aray][3];
		page2_option4.innerHTML= arr[aray][4];
		page2_option5.innerHTML= arr[aray][5];
	}
}
function timer(){
	var timecount=document.getElementById('time_1');
	timecount.innerHTML='Hi! '+ name + ',  Time : ' + count + 'sec';
	count++;
}
function select_option_handler(){
	if(answer_select){	
		if(aray < array_length){		
			next_button.addEventListener("click", function(e){
				if(optionSelected){
					optionSelected = false;
					aray++;
					var checking=document.getElementById(select_color);
					checking.style.color="black";
					var answer_count = checking.innerHTML;
					if(ansChk == arr[aray][6]){
							result++;
					}

					if(result <= 1){
						grade = 'poor';
					}
					if(result = 2){
						grade = 'good';
					}
					
					if(result = 3){
						grade = 'Excelent';
					}
					display();	
				}
				
			},false);
		}
		if(aray==array_length){
		//	div_outer.appendChild(next_button);
			var next_button11=document.getElementById('next_button_1')
			div_outer.removeChild(next_button11);
			var final_button = document.createElement('input');
			final_button.id='final_button_1';
			final_button.value='Finish';
			final_button.type='submit';
			div_outer.appendChild(final_button);
			aray=0;
			var finish_button1 = document.getElementById('final_button_1');
			finish_button1.addEventListener("click", function(e){
				showResult()
				
			},false);
		}
	}
	
}
window.onload=init;
