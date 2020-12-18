const summary = document.querySelector("#summary");




const people = [
    {name: "Ramlal", street: "Street 1", city: "Banglore", state: "Karnataka", country: "India", telephone: "85462145", birthday: "08/08/2000"},
    {name: "Gomuk", street: "...", city: "...", state: "...", country: "...", telephone: "...", birthday: "..."},
    {name: "Noni", street: "...", city: "...", state: "...", country: "...", telephone: "...", birthday: "..."},
]
// function makeLink(container,textnode){
//     a=document.createElement('a');
//     link = document.createTexNode(textnode);
//     a.appendChild(link);
//     a.href="https://www.geekfrogeeks.com";
//     container.appendChild(a);

// }
function makeList(){
     listContainer = document.createElement("ul");
   
    summary.appendChild(listContainer);
   
    people.map(function (item){
        
            aLink = document.createElement('a');
            listElement = document.createElement("li");
            
            aLink.appendChild(document.createTextNode(item.name));
            aLink.href="hello.com";
            listElement.appendChild(aLink);
            listContainer.appendChild(listElement);
       
    })

    // for(var i=0;i<people.length;i++){
    //      listElement = document.createElement("li");
    //      listElement.innerHTML = people[i].name;
    //      listContainer.appendChild(listElement);
    // }
}
makeList();