var  button = document.querySelector("#overlay")
var newsletter = document.querySelector("#text")
const close = document.querySelector("#main")
const x = document.querySelector("span#x")
const inputMail = document.querySelector(".input")


button.addEventListener("click",() =>{

      newsletter.style.display = 'block';
      document.body.style.background = 'grey'
})
close.addEventListener("click",(event)=>{
      
      console.log(event.target.id)
      if(event.target.id === "main" || event.target.id === "x"){
            newsletter.style.display = "none";
            document.body.style.background = 'none'

      }

})    