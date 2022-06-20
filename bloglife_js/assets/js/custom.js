const replies1 = document.querySelector("#replies1");
const replies2 = document.querySelector("#replies2");
const replies3 = document.querySelector("#replies3");

const count1 = document.querySelector("#count1");
const count2 = document.querySelector("#count2");
const count3 = document.querySelector("#count3");

/* Replies butonuna tıklandığında sadece block işlemi yapar tekrardan gizleme işlemi gerçekleştirmez
replies1.addEventListener("click",openLike);
function openLike(){
    count1.style.display="block";
}*/

//Replies butonuna tıklandığında classList.toggle() ile tıklandığında gizli ise gösterir, gösteriliyor ise gizleme işlemini yapar

replies1.addEventListener("click", () => {
    count1.classList.toggle("count-1");
});
replies2.addEventListener("click", () => {
    count2.classList.toggle("count-2");
});
replies3.addEventListener("click", () => {
    count3.classList.toggle("count-3");
});

//like butonuna tıklandıkça replices değerini arttırma işlemi                    
const like1 = document.querySelector("#like1");
let spanBtn = document.querySelector("#span-btn");
const likeCount = document.querySelector("#like-count");

like1.addEventListener("click", () => {
   spanBtn.textContent++;
});

//2.için
const like2 = document.querySelector("#like2");
let spanBtn2 = document.querySelector("#span-btn2");

like2.addEventListener("click", () => {
   spanBtn2.textContent++;
});

//3.için
const like3 = document.querySelector("#like3");
let spanBtn3 = document.querySelector("#span-btn3");

like3.addEventListener("click", () => {
   spanBtn3.textContent++;
});

//yan menü
var menuBtn = document.querySelector("#menu-btn");
var sidebarArea = document.querySelector("#sidebar-area");

menuBtn.addEventListener("click", () => {
    sidebarArea.classList.toggle("active");
    menuBtn.classList.toggle("active");
})