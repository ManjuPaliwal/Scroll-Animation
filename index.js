const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll',chechBox)
function chechBox(){
    const windowHeigth = window.innerHeight/5*3;
    // console.log(window.innerHeight);
    // console.log(windowHeigth);
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top
        // console.log(boxTop);
        if(boxTop < windowHeigth){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show')
        }
    })
}
