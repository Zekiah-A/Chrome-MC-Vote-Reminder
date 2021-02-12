//This script runs 24/7 IN THE BACKGROUND - Should be used for alarms and notifications

chrome.alarms.onAlarm.addListener(function(alarm) {
	console.log("Notification Alarm fired", alarm)
	notification = webkitNotifications.createNotification(
		'images/drugdealertux', alarm.name, JSON.stringify());
	notification.show();
});
