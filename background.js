//This script runs 24/7 IN THE BACKGROUND - Should be used for alarms and notifications

var notificationSettings  = {
	type: "basic",
	title: "SuomiCraftPEVote - Reminder", 
	message: "Hey, you haven't voted for the server today. Please click here to support the server", 
	iconUrl: "images/scpe_32.png"
};

document.addEventListener('DOMContentLoaded', function() {
	var d = new Date();
	//var dateIndicator = document.getElementById('dateIndicator');
	//dateIndicator.innerHTML = d;
	//alert("Current date is:", d);
	notification();
	
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		var url = tabs[0].url; //let   //I hate this terrible coding language, i wish i could just use C#
		//what is a "Let"
		if (url){
			alert("Lol");
		}
	});
});

function notification(Date d){
	chrome.notifications.create(notificationSettings);
}

