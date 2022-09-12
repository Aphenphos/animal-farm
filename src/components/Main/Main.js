import React from 'react';
import Animal from '../Animal/Animal.js';
import { animals } from '../../data.js';
import backgroundImg from '../../background.png';
import './Main.css';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {animals.map((item) => (
        <Animal key={item.name} {...item} />
      ))}
    </main>
  );
}