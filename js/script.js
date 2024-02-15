const myHeading =document.querySelector("h1");
myHeading.textContent = "Hello world!";
const img1URL ="img/me.jpg"
const img2URL ="img/me2.jpg"

//let myVariable = "Erdan";
//let hisAge = 18
//alert(myVariable);
//alert("his age is" +hisAge);
let myFirstArray = [15 , 'Nour', true , false , 12.5]
function sayHello(){
    alert("we all know that I'm the best ");
    console.log("It is console.log")
}

const imgElement = document.querySelector("img");

myHeading.addEventListener('click',sayHello)

function changePhoto(event){
    let current =imgElement.getAttribute("src");
    if(current ==img1URL){
        imgElement.setAttribute("src",img2URL)
    }
    else{
        imgElement.setAttribute("src",img1URL)
    }
}

imgElement.onclick = changePhoto