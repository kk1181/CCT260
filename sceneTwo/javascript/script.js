
window.onload = function() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none'; 
    });
};


function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal.style.display === 'flex') {
        modal.style.display = 'none'; 
    } else {
        modal.style.display = 'flex'; 
    }
}

function changeScene() {
    window.location.href = "../sceneThree-intro/index.html"; 
}
