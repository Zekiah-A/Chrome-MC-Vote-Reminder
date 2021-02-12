//function tick(){}
document.addEventListener('DOMContentLoaded', function() {
	var d = new Date();
	var dateIndicator = document.getElementById('dateIndicator');
	dateIndicator.innerHTML = d
	//VOTE BUTTON PRESS EVENT
	var voteButton = document.getElementById('checkPage');
	voteButton.addEventListener('click', function() {
		alert("Thanks for voting! You're amazing! \n \n -zekiahepic, petterim1 and the rest of the SCPE team!");
		var voteURL = "https://minecraftpocket-servers.com/server/62318/";
		chrome.tabs.create({ url: voteURL });
		//OBVIOUSLY MOVE CODE UNDER, BUT FOR TESTING:
		chrome.notifications.create(
		  "name-for-notification",
		  {
			type: "basic",
			iconUrl: "image.jpeg",
			title: "This is a notification",
			message: "hello there!",
		  },
		  function () {}
		);
		//END OF POO POO CODE
	});
});



//What do if no vote ->alert why havent -> image ->vote now or else
//What to do if up to date -> funny dancing gif /DONE
//, next vote in []

//hahafunny.gif
// <img src="images/" width="100" height="100">
