"use client";
import { useParams } from "next/navigation";
import "../../styles.css";
import Header from "../../header.jsx";
import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import Footer from "../../footer.jsx";
import html2canvas from "html2canvas";
import Image from 'next/image';
function Edit() {

  const divRef = useRef(null);

  const handleDownload = async () => {
    if (divRef.current) {
      const canvas = await html2canvas(divRef.current);
      const dataUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "screenshot.png";
      link.click();
    }
  };

  const nodeRef = useRef(null);
  const [val, setval] = useState();
  const params = useParams();
  const id = params.id;
  console.log(id);

  const [color, setcolor] = useState("#000dc7ff");
  const [taille, settaille] = useState(20);

  const [divs, setDivs] = useState([]);

  const addDiv = () => {
    const newId = Date.now(); 
    setDivs([...divs, { id: newId }]);}
  const elDiv = () => {
    setDivs((prevDivs) => prevDivs.slice(0, -1));
  };
  return (
    <>
      <Header />
      <div id="gird_edit" >
        <div ref={divRef}>
          <Image src={`../../../${id}`} alt="erreur" className="edit_photo" />

           {divs.map((d) => (
          <Draggable 
          key={d.id}
              nodeRef={nodeRef}
              axis="both"
              handle=".handle"
              defaultPosition={{ x: 200, y: -500}}
              grid={[1, 1]}
              scale={1}
            >
              <div ref={nodeRef}>
                <br />
                <br />
                <div className="handle" style={{ cursor: "move" }}>
                  <input
                    type="text"
                    min={0}
                    max={100}
                    step={1}
                    style={{ color: color, fontSize: `${taille}px` }}
                    id="inp_drag"
                    placeholder="example"
                  ></input>
                </div>
              </div>
            </Draggable>))}
        
        </div>
        <div className="edit_text">
          <center>
            <div id="gird_edit"><h4>couleur :</h4>
              <center>
                <input
                  type="color"
                  className="color_taille"
                  name=""
                  id=""
                  value={color}
                  onChange={(e) => {
                    setcolor(e.target.value);
                  }}
                />
              </center><h4>taille :</h4>
              <center>
                <input
                  type="number"
                  className="color_taille"
                  name=""
                  id=""
                  value={taille}
                  onChange={(e) => {
                    settaille(Number(e.target.value));
                  }}
                />
              </center>
            </div>

           

            <button
        onClick={handleDownload}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        Télécharger meme
      </button>
      <button onClick={addDiv} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Ajouter un texte
      </button>
      <button onClick={elDiv} style={{ marginTop: "20px", padding: "10px 20px" }}>
        eleminer un texte
      </button>
          </center>
        </div>
      </div>
      


      <Footer />
    </>
  );
}
export default Edit;
