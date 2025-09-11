import "./styles.css";
import Link from "next/link";
import "./styles.css"


import { useContext, useEffect, useState } from "react"
import { imgs} from "./comps/comps.tsx"
import {FavContext} from "./comps/comps.tsx"

function Main() {

  const images=useContext(imgs)
  const {fav,setFav} = useContext(FavContext);
  
 function jaime(id){
 
    if (fav.includes(id)) {
      setFav(fav.filter(f => f !== id)); 
    } else {
      setFav([...fav, id]); 
    }
  }
 
  console.log(fav);

  
  return (
    <>
    

      <div id="grid">
        {images.map((image) => (
          <div key={image.id} >
          <Link  href={`/edit/${image.img}`}>
            <img src={image.img} alt="erreur" className="main_imgs" />
          </Link>
         <button onClick={() => jaime(image.id)}>
            {fav.includes(image.id) ? "❤️ Retirer" : "🤍 Ajouter"}
          </button>
          
        
              
        </div>))}
      </div>


    </>
  );
}
export default Main;
