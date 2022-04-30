

import {navbar} from "../components/navbar.js"

let n= document.getElementById("navbar");
n.innerHTML=navbar()

import {searchImages,append} from "./fetchdata.js"

let search =(e)=>{
    if(e.key==="Enter"){
        let value =document.getElementById("query").value;
        searchImages(value).then((data) =>{
            console.log(data)

            let container = document.getElementById("container")
           container.innerHTML=null
            append(data.Search, container)
        })
    }
}

document.getElementById("query").addEventListener("keydown",search)


//By categries search

let categ = document.getElementById("categories").children;

console.log(categ)
function catSearch(){
    console.log(this.id)
    searchImages(this.id).then((data) =>{
        console.log(data)

        let container = document.getElementById("container")
       container.innerHTML=null
        append(data.Search, container)
    })

}

for(let el of categ){

    el.addEventListener("click", catSearch)
}




