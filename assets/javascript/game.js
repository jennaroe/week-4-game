
	$( document ).ready(function() {
		var wins = 0;
		var losses = 0;
		var score = 0;
		var counter;	
		var rand = randomNumber(19,121);
		var crystal = randomNumber(1,12);


	function randomNumber(min, max) {
		return Math.round(Math.random()* (max-min) + min);
	}
	
	$("#random").append(rand);

	$('#button1').val(randomNumber(1,12));

	$('#button2').val(randomNumber(1,12));

	$('#button3').val(randomNumber(1,12));

	$('#button4').val(randomNumber(1,12));

	

	var updateScore = function(){
		$('score').empty();
		$('score').append(score=0);
		
		$('#wins').empty();
		$('#wins').append(wins);
		$('#losses').empty();
		$('#losses').append(losses);
	};

	var refresh = function(){

		$('#random').empty();

		$('#random').html('Match Value: ')

		rand = randomNumber(19,121);

		$('#random').append(rand);
		
		$('#button1').val(randomNumber(1,12));

		$('#button2').val(randomNumber(1,12));

		$('#button3').val(randomNumber(1,12));

		$('#button4').val(randomNumber(1,12));
		
	};

		var score = 0;
		$('button').click(function(){
		 	score = Number(score) + Number($(this).val());
		 	$('#score').html("Crystal Value:      " +score);

	 	if (rand == score) {
           wins = wins + 1;
           $('#win').text(wins);
           alert("You Win!!! Play Again?");
           updateScore();
           refresh();
            
         }    
        else if (rand < score) {
            losses = losses + 1;
            $('#lose').text(losses);
            alert("YOU LOSE!!! Play Again?");
            updateScore();
            refresh();
            
         }     
	 });

});



  	
	
