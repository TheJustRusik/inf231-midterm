
const imgBox = document.getElementById("img_box");
const images = imgBox.getElementsByTagName("img");
let currentIndex = 0;

currentIndex = (currentIndex + 1) % images.length;
changeImage();

async function start(){
    setInterval(async function() {
        currentIndex = (currentIndex + 1) % images.length;
        changeImage();
    }, 3000);
}
function changeImage() {
    for (let i = 0; i < images.length; i++) {
    if (i === currentIndex) {
        images[i].style.display = "block";
    } else {
        images[i].style.display = "none";
    }
    }
}


const reg_btn = document.getElementById("register")

const first_name = document.getElementById("name")
const second_name = document.getElementById("surname")
const telephon_num = document.getElementById("tel")
const mail = document.getElementById("mail")
const pass = document.getElementById("pass")

const n_e = document.getElementById("n_e")
const s_e = document.getElementById("s_e")
const t_e = document.getElementById("t_e")
const m_e = document.getElementById("m_e")
const p_e = document.getElementById("p_e")

reg_btn.addEventListener("click", function() {
    let errs = 0

    if (first_name.value.length < 2){
        n_e.innerText = "Name must be at least 2 characters long"
        errs++
    }
    else{
        n_e.innerText = ""
    }

    if (second_name.value.length < 2){
        s_e.innerText = "Surname must be at least 2 characters long"
        errs++
    }else{
        s_e.innerText = ""
    }

    if (telephon_num.value.length < 10){
        t_e.innerText = "Incorrect telephone number!"
        errs++
    }else{
        t_e.innerText = ""
    }

    if (! mail.value.includes('@') ){
        m_e.innerText = "Incorrect Email!"
        errs++
    }else{
        m_e.innerText = ""
    }

    if (pass.value.length < 8){
        p_e.innerText = "Password is to short!"
        errs++
    }else{
        p_e.innerText = ""
    }

    if (errs == 0){
        alert("Successful registration!")
    }
})
start()
