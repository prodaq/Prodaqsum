function ipsuMe(){
	if(typeof(phrases) == "undefined") return; //dont have the phrases bail out
	$("#result").empty();
	var ipsum = [];
	var paramnum = $("#paranum");
	var paragraphs = (isNaN(parseInt(paramnum.val()))) ? 5 : parseInt(paramnum.val());
	paramnum.val(paragraphs);
	for(i=0; i < paragraphs; i++){
		paragraph = "";
		for(j=0; j < getRandom(5, 20); j++){ //how many senetences are in this paragraph
			sentence = "";
			previousWord = -1; //reset this
			for(k=0; k < getRandom(6, 20); k++){ //how many phrases are in this sentence
				if (sentence != "") sentence += " "; //add a space before next word if it isnt the first word in the sentence

				var randomWord = getRandom(0, phrases.length-1);
				while(randomWord == previousWord){ //picked the same word twice, try again
					randomWord = getRandom(0, phrases.length-1);
				}
				sentence += phrases[randomWord];//pick a word
				previousWord = randomWord;
			}
			sentence += "."
			sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1); //capitalize first letter
			if (paragraph != "") paragraph += " "; //add a space before next sentence if it isnt the first sentence in the sentence
			paragraph += sentence;
		}
		ipsum[ipsum.length] = paragraph;
	}
	var resultDiv = $("#result");
	for(p in ipsum){
		resultDiv.append("<p>" + ipsum[p] + "</p>");
	}
	resultDiv.css('display', 'block');
}

function getRandom(min, max){ //betwee 1 and max
	return Math.floor((Math.random()*max)+min);
}