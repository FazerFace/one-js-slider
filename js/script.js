let btn_prev = document.querySelector('.hd_slider .hd_button .prev')
let btn_next = document.querySelector('.hd_slider .hd_button .next')

let slider = document.querySelectorAll('.hd_slider .hd_photo')
let i = 0;

btn_next.onclick = function(){
    slider[i].style.display = 'none';
    if(i >= 1){
        i--;
    }
    slider[i].style.display = 'block';
}

btn_prev.onclick = function(){
    slider[i].style.display = 'none';
    if(i <= 1){
        i++;
    }
    slider[i].style.display = 'block';
}

// TEST

