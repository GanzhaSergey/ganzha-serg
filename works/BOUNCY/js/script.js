let btn = document.querySelector('#slider');
let nav = document.querySelector('.navigation');

btn.onclick = function() {
    if (btn.classList.contains('topslider')) {
        nav.style.backgroundImage = "url('Layer2.png')";
        btn.innerHTML = '<i class="fas fa-angle-up"></i>'; 
        btn.classList.remove('topslider');
        btn.classList.add('downslider');
}
    else {
        document.querySelector('.navigation').style.backgroundImage = "url('Layer1.png')";
          btn.innerHTML = '<i class="fas fa-angle-down"></i>'; 
    btn.classList.remove('downslider');
    btn.classList.add('topslider');
}
} 