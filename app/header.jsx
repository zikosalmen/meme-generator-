import Link from "next/link";
import "./styles.css"


function Header(){
    const title="meme generator"
    const slog="Memes Made Easy"
    return(
        <>
        <header id="Header">
            <div>
                <Link href="/" >
                <img src="/logo.png" alt="image non dispo" id="logo" />
            </Link></div>

            <div id="div_head">
            <Link href="/" className="link_home" >
             <h2 id="title-head" className="multi-color-title">
                    {title.split("").map((char, index) => (
                    <span key={index} style={{ "--i": index }}>
                    {char}
                    </span>
                    ))}
                </h2></Link>
                <h5 id="slogan" className="multi-color-title">
                    {slog.split("").map((char, index) => (
                    <span key={index} style={{ "--i": index }}>
                    {char}
                    </span>
                    ))}
                </h5>
                </div >
                <div id="div_menu">
                 <Link href="/favoirs"  className="menu" >
                    <h3 >favoirs</h3>
                </Link>
                      
                <Link href="/contactus"  className="menu" >
                    <h3 >Contactez-nous</h3>
                </Link></div>
                
               


        </header>
        </>
    )
}
export default Header;