function alert_close(){
    const alert = document.getElementById('alert-container');
    alert.style.opacity = 0;
    setTimeout(()=>{
        alert.style.display = 'none';
    }, 500);
}