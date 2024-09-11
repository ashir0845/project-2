// // 
// // async function greet(){
// //     return "hello";
// // }

// // greet()
// // .then((result)=>{
// //     console.log("promise was resolved");
// // })
// // .catch((err)=>{
// //     console.log("promise was rejected with : ")
// // });

// function getNum(){
//     console.log(5);
// }
// async function demo(){
//     getNum();
// }
url=" http://universities.hipolabs.com/search?name=India";
let btn=document.querySelector("button");

btn.addEventListener("click",async() =>{
    let country=document.querySelector("input").value;
    let ColArr= await getColleges(country);
    Show(ColArr);
});

function Show(ColArr){
    let list=document.querySelector("#list");
    list.innerText="";
    for(col of ColArr){
       let li=document.createElement("Li");
       li.innerText=col.name;
       list.appendChild(li);
    }
}

async function getColleges(country) {
    try{
        let res=await axios.get(url+country);
         return res.data;
      }
      catch(e){
        console.log("error-",e);
      }
  }





// btn=document.querySelector("button");
// let url2="https://dog.ceo/api/breeds/image/random";


// btn.addEventListener("click",async ()=>{
//      let link=await getImage();
//      let img=document.querySelector("#result");
//      img.src=link;
// });

//   async function getImage() {
//     try{
//         let res=await axios.get(url2);
//          return res.data.message;
//       }
//       catch(e){
//         console.log("error-",e);

//       }
//   }





// btn.addEventListener("click",async ()=>{
//     let fact=await getFacts();
//     // console.log(fact);
//     let p=document.querySelector("#facts");
//     p.innerText=fact;
// });
// let url="https://catfact.ninja/fact";
//   async function getFacts() {
//     try{
//         let res=await axios.get(url);
//         return res.data.fact;
//       }
//       catch(e){
//         console.log("error-",e);

//       }
//   }
  
  

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log(err);
// });

// async function getFacts(){
//     try{
//         let res=await fetch(url);
//         let data=await res.json();
//         console.log(data.fact);
//     }
//     catch(err){
//         console.log(er); 
//     }
 
// }

