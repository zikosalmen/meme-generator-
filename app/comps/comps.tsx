"use client"
import { images } from "./theme";
import React, { createContext, useState, useEffect } from "react";
type props = {
  children: React.ReactNode;
};

type FavorisContextType = {
  fav: number[];
  setFav: React.Dispatch<React.SetStateAction<number[]>>;
};

export const FavContext = createContext<FavorisContextType | undefined>(undefined)


export const FavorisProvider = ({ children }: props) => {
  const [fav, setFav] = useState([0]);

  useEffect(() => {
    const saved = localStorage.getItem("fav");
    if (saved) {
      setFav(JSON.parse(saved));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(fav));
  }, [fav]);

  return (
    <FavContext.Provider value={{ fav, setFav }}>
      {children}   
    </FavContext.Provider>
  );
};




export const imgs = createContext(images);



export const ImgsProvider = ({ children }: props) => {
  return (
    <imgs.Provider value={images}>
      {children}
    </imgs.Provider>
  );
};
