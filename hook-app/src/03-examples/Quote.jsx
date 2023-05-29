import React, { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({origin, species, status, image, name}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})
  
  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect() 
    setBoxSize( {height, width} )
  }, [name])

  return (
    <>
      <blockquote className="blockquote text-center">
        <p className="mb-1">Origin: {origin.name}</p>
        <p className="mb-1">Species: {species}</p>
        <p className="mb-1">Status: {status}</p>
        <img className="mb-5" src={image} alt="image" />
        <footer ref={pRef} className="blockquote-footer">{name}</footer>
      </blockquote>

      <code className="text-center">{ JSON.stringify(boxSize) }</code>
    </>
  );
};
