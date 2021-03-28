//function tick(){}

document.addEventListener('DOMContentLoaded', function() {
	//VOTE BUTTON PRESS EVENT
	var voteButton = document.getElementById('checkPage');
	voteButton.addEventListener('click', function() {
		alert("Thanks for voting! You're amazing! \n \n -zekiahepic, petterim1 and the rest of the SCPE team!");
		var voteURL = "https://minecraftpocket-servers.com/server/62318/";
		chrome.tabs.create({ url: voteURL });
	});
});
