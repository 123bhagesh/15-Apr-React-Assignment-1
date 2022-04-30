let searchImages = async(value)=>{

    try{
        let res = await fetch(`https://www.omdbapi.com/?s=${value}&apikey=650c441`)
    

        let data = await res.json()

    
        return data;
    }
    catch(error){
        console.log("error:",error)
    }  
};

let append = (data,container)=>{

    data.forEach(({  Poster,Title,Year }) =>{

        let div=document.createElement("div")

        // let img=document.createElement("img")
        // img.src=small

        // let p = document.createElement("p")
        // p.innerText=alt_description

        var poster =document.createElement("img")
        poster.src=Poster

        var title=document.createElement("p")
        title.innerText="Movie Name:"+" "+Title

        var p3=document.createElement("p")
        p3.innerText="Year:"+" "+Year;

        // var p4=document.createElement("p")
        // p4.innerText="Imdb Rating:"+" "+elem.imdbID;

        

        div.append( poster,title,p3)

        // div.append(img,p)
        container.append(div)
    })
}




export {searchImages,append};