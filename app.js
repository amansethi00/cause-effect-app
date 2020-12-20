const summary = document.querySelector("#summary");




const people = [
    {name: "Ramlal", street: "Street 1", city: "Banglore", state: "Karnataka", country: "India", telephone: "85462145", birthday: "08/08/2000"},
    {name: "Gomuk", street: "...", city: "...", state: "...", country: "...", telephone: "...", birthday: "..."},
    {name: "Noni", street: "...", city: "...", state: "...", country: "...", telephone: "...", birthday: "..."},
];


const names = Array.from(document.querySelectorAll('.names'));
names.map((item,index)=>{
    item.innerHTML=people[index].name;
});
// console.log(people.map(item=>item.name.includes("Ramlal")))
// console.log(names[0].innerText);
// console.log(names.length);

    names.map((item,index)=>
        item.addEventListener("click",function(){
            var toDisplay =[
             people[index].name,
             people[index].street,
            people[index].city,
             people[index].state,
            people[index].telephone,
            ]
            // console.log(item.color);
            // item.id.style.color="blue";
            names.map(abc => {
                abc.style.color= "black";
            })
            names[index].style.color = "blue";
            
            para=document.querySelector('p');
            var s="";
            for(var i=0;i<toDisplay.length;i++){
                s+="  "+toDisplay[i];
            }
            para.innerText=s;
            
            summary.appendChild(para);
        })
    )







// function makeLink(container,textnode){
//     a=document.createElement('a');
//     link = document.createTexNode(textnode);
//     a.appendChild(link);
//     a.href="https://www.geekfrogeeks.com";
//     container.appendChild(a);

// }
// function makeList(){
//      listContainer = document.createElement("ul");
   
//     summary.appendChild(listContainer);
  
//     people.map(function (item,index){
        
//             aLink = document.createElement('a');
//             listElement = document.createElement("li");
            
//             aLink.appendChild(document.createTextNode(item.name));
//             aLink.title=index;
            
//             listElement.appendChild(aLink);
//             listContainer.appendChild(listElement);
       
//     })

    // for(var i=0;i<people.length;i++){
    //      listElement = document.createElement("li");
    //      listElement.innerHTML = people[i].name;
    //      listContainer.appendChild(listElement);
    // }
// }
// function clickHandler(){
//     // var tit = document.querySelector(aLink).title;
//     p=document.createElement("p");
//     var x = document.getElementsByTagName("A")[2].title;
//     console.log(x);
//     // document.querySelector('body').appendChild(p);
// }
// makeList();
//  aLink = document.querySelectorAll('a');
//  console.log(aLink);
//  aLink.map(function(item){
//     //  item.addEventListener("click",function(){
//     //      console.log(item.title);
//     //  })
//     console.log(item.index);
//  })
//  const choices = Array.from(document.querySelectorAll('li'));
//  choices.addEventListener("click",function(){
//     console.log("Hello");
//  })
// aLink.addEventListener("click",function (){
//      console.log(aLink.title);
        
// });
