/**
 * Sets up listeners for native events using Phonegap
 *
 * @author Dogu AS
 * @copyright Dogu AS
 */

$(function () {
    document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
    document.addEventListener("backbutton", onBackKeyDown, false);
    document.addEventListener("online", onOnline, false);
    document.addEventListener("offline", onOffline, false);
}

function onPause() {
    // Handle the pause event
}

function onResume() {
    // Handle the resume event
}

function onBackKeyDown() {
    // Handle the back button
}

function onOnline() {
    //Post any outstanding statistics
    storage.postUserStatisticsToServer();
    storage.removeAllUserStatistics();
}

function onOffline() {
    // Handle the offline event
}