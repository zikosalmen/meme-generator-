"use client";
import Header from "../header.jsx";
import Footer from "../footer.jsx";
import { imgs} from "../comps/comps";
import {FavContext} from "../comps/comps";
import { useContext } from "react"
import Link from "next/link";


function Fav(){
const { fav, setFav } = useContext(FavContext)!;
const images= useContext(imgs);
const app=images.filter(p=>fav.includes(p.id))

 function jaime(id:number){
 
    if (fav.includes(id)) {
      setFav(fav.filter(f => f !== id)); 
    } else {
      setFav([...fav, id]); 
    }
  }
const verif=images.filter(p=>fav.includes(p.id))
    return(
        <>
        <Header/>



{verif.length === 0 ? (
  <center><h2>Vous n avez aucun favoris</h2></center>
) : (
  <div id="grid">
    {verif.map((image) => (
      <div key={image.id}>
        <Link href={`/edit/${image.img}`}>
          <img src={image.img} alt="erreur" className="main_imgs" />
        </Link>
        <button onClick={() => jaime(image.id)}>
          {fav.includes(image.id) ? "❤️ Retirer" : "🤍 Ajouter"}
        </button>
      </div>
    ))}
  </div>
)}





            <Footer/>
        </>
    )
}
export default Fav