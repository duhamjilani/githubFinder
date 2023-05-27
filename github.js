

let userPic=document.getElementById("pic1");
let userPic2=document.getElementById("pic2");
let userName=document.getElementById("userName");
let following=document.getElementById("following");
let followers=document.getElementById("followers");
let cards=document.getElementsByTagName("h5")
let language=document.getElementsByClassName("language")
let btn=document.getElementById("btn")
let searchButton=document.getElementById("search")
let circle=document.getElementsByClassName("circleColor")
searchButton.addEventListener("click",()=>{

   fetch(`https://api.github.com/users/${text.value}`)
   .then((response)=> response.json())
   .then((data)=>{
   
    userName.textContent=data.name;
    document.getElementById("pic2").src =`${data.avatar_url}`;
    document.getElementById("pic1").src =`${data.avatar_url}`;
    following.textContent=data.following
    followers.textContent=data.followers
  })

  fetch(`https://api.github.com/users/${text.value}/repos`)
  .then((response) => response.json())
  .then((data) => {
    div_id = document.getElementById("inside_cards")
    div_id.innerHTML=''
    for (let index = 0; index < 6; index++) {
        if(data[index]){
            div_id.innerHTML+=`<div class="card1" >
        <div class="firstCol">
          <h5>${data[index].name}</h5>
          <div class="type">
          <div class="circleColor" id="circle${index}"></div> <p class="language">${data[index].language}</p></div></div>
        <button>Public</button>
      </div>`
      if (data[index].language == "HTML") {
        document.getElementById(`circle${index}`).style.background = "red";
      }
      else if( data[index].language == "JavaScript") {
        document.getElementById(`circle${index}`).style.background = "yellow";
      }
      else if( data[index].language == "CSS") {
        document.getElementById(`circle${index}`).style.background = "#563d7c";
      }
        }
       
      }
    })
  })

  window.onload=()=>{

    fetch(`https://api.github.com/users/duhamjilani`)
    .then((response)=> response.json())
    .then((data)=>{
     let name=data.name;
     userName.textContent=data.name;
     document.getElementById("pic2").src =`${data.avatar_url}`;
     document.getElementById("pic1").src =`${data.avatar_url}`;
     following.textContent=data.following
     followers.textContent=data.followers
   })
 
   fetch(`https://api.github.com/users/duhamjilani/repos`)
   .then((response) => response.json())
   .then((data) => {
     div_id = document.getElementById("inside_cards")
     div_id.innerHTML=''
     for (let index = 0; index < 6; index++) {
         if(data[index]){
             div_id.innerHTML+=`<div class="card1" >
         <div class="firstCol">
           <h5>${data[index].name}</h5>
           <div class="type">
           <div class="circleColor" id="circle${index}"></div> <p class="language">${data[index].language}</p></div></div>
         <button>Public</button>
       </div>`
       if (data[index].language == "HTML") {
         document.getElementById(`circle${index}`).style.background = "red";
       }
       else if( data[index].language == "JavaScript") {
         document.getElementById(`circle${index}`).style.background = "yellow";
       }
       else if( data[index].language == "CSS") {
         document.getElementById(`circle${index}`).style.background = "#563d7c";
       }
         }
        
     }
     })
   }
   





   



    
    


  
    








