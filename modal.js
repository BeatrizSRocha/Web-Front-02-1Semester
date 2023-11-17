const button = document.querySelector("button");
const poupup = document.querySelector(".poupup-wrapper");

const clickOpen=function(){
    poupup.classList.add("d-block");
}
button.addEventListener("click",function(){
    poupup.classList.add("d-block");
});

poupup.addEventListener("click",function(event){
    const clickOfElement=event.target.classList[0];
    const classNameArray=["poupup-cloase","pouup-link","pouup-wrap"]
    const isClassList=classNameArray.includes(clickOfElement);
    if (isClassList){
        poupup.classList.remove("d-block");
    }
});