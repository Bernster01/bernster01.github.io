function alert_close(){
    const alert = document.getElementById('alert-container');
    alert.style.opacity = 0;
    //Set a flag in localStorage to indicate that the alert has been closed and a it should expire after 24 hours
    localStorage.setItem('alertClosed', 'true');
    localStorage.setItem('alertClosedTime', Date.now());
    setTimeout(()=>{
        alert.style.display = 'none';
    }, 500);
}
function showAlert() {
    //Check if the alert has been closed in the last 24 hours
    if (localStorage.getItem('alertClosed') === 'true' && Date.now() - localStorage.getItem('alertClosedTime') < 86400000) {
        return;
    }
    localStorage.setItem('alertClosed', 'false');
    document.getElementById('alert-container').style.display = 'flex';
}
window.onload = function(){
    showAlert();
}