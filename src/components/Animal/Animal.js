import React from 'react';
import './Animal.css';


export default function Animal(props) {
  let audio = new Audio();
  const start = () => {
    console.log(props.type);
    audio = new Audio(`${process.env.PUBLIC_URL}/animalSounds/${props.type}.mp3`);
    console.log(audio);
    audio.play();
  };


  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <button onClick={start}>
        <img className="img" alt={props.name} src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
        <span className="name">{props.name}</span>
        <span>{props.says}</span>
      </button>
    </div>
  );
}
