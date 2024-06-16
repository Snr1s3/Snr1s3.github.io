document.getElementById('menuButton').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuButtonImage = document.getElementById('menuButtonImage');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        menuButtonImage.src = 'img/circle-xmark.svg';
    } else {
        menu.style.display = 'none';
        menuButtonImage.src = 'img/circle-play.svg';
    }
});