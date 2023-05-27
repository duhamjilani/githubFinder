let firstSearchButton=document.getElementById("btn1")
let firstSearch=document.getElementById("search1");
let secondSearchButton=document.getElementById("btn2")
let secondSearch=document.getElementById("search2");
let userName1=document.getElementById("user1")
let userName2=document.getElementById("user2")
let repo1=document.getElementById("repo1")
let repo2=document.getElementById("repo2")
let followers1=document.getElementById("followers1")
let followers2=document.getElementById("followers2")
let result=document.getElementById("result")
let userPic1=document.getElementById("pic1");
let compare=document.getElementById("compare")


firstSearchButton.addEventListener("click",()=>{
fetch(`https://api.github.com/users/${firstSearch.value}`)
   .then((response)=> response.json())
   .then((data)=>{
   
    repo1.textContent=data.public_repos;
    userName1.textContent=data.name;
    document.getElementById("pic1").src =`${data.avatar_url}`;
   
   
    followers1.textContent=data.followers
   })
})



secondSearchButton.addEventListener("click",()=>{
    fetch(`https://api.github.com/users/${secondSearch.value}`)
       .then((response)=> response.json())
       .then((data)=>{
       
        repo2.textContent=data.public_repos;
        userName2.textContent=data.name;
        document.getElementById("pic2").src =`${data.avatar_url}`;
       
       
        followers2.textContent=data.followers
       })
    })




    compare.addEventListener("click",()=>{
        repo1=parseInt (repo1.textContent);
        repo2=parseInt (repo2.textContent);
        followers1=parseInt (followers1.textContent);
         followers2 =parseInt (followers2.textContent);
        if (repo1>repo2) {

result.textContent=userName1.textContent
console.log(userName1);
        userName1.style.color="green";
        userName2.style.color="red";
         }else if (repo1<repo2) {
            result.textContent=userName2.textContent
            userName1.style.color="red";
            userName2.style.color="green";
         }else if (repo1==repo2) {
         
             if (followers1>followers2) {
                result.textContent=userName1.textContent
                userName1.style.color="green";
                userName2.style.color="red";
             }else if (followers1<followers2) {
                userName1.style.color="red";
                userName2.style.color="green";
                result.textContent=userName2.textContent
             }else{
                result.textContent="tie"
                userName1.style.color="pink";
                userName2.style.color="pink";
             }
         
         }
    })
   