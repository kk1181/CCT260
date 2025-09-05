function openModal(){
	const modal = document.getElementById('modal');
	 if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
 }   

 function changeScene() {
    window.location.href = "../sceneFour/index.html";
}