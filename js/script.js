let circle = document.getElementById('circle');
document.addEventListener('mousemove', function(n){
    let x = n.clientX;
    let y = n.clientY;
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
});