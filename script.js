window.onload =()=>{



const header = document.querySelector(".header") ;
const mobile_btn = document.querySelector(".mobile-btn") ;

const myfun =()=>{
    header.classList.toggle("active");
}

mobile_btn.addEventListener("click" , ()=>myfun()) ;


}