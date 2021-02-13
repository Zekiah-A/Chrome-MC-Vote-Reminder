//This script runs 24/7 IN THE BACKGROUND - Should be used for alarms and notifications

var notificationSettings  = {
	type: "basic",
	title: "SuomiCraftPEVote - Reminder", 
	message: "Hey, you haven't voted for the server today. Please click here to support the server", 
	iconUrl: "images/scpe_32.png"
};

document.addEventListener('DOMContentLoaded', function() {
	notification(); //maybe time var
	//maybe in here??
	
	chrome.browserAction.onClicked.addListener(function(tab) { //make
		var d = new Date();
		var dateIndicator = document.getElementById('dateIndicator');
		dateIndicator.innerHTML = d;
		console.log("Current date is:", d);
		notification(); //<-- rm
	});
	//end of doubt
});

function notification(){
	chrome.notifications.create(notificationSettings)
}
