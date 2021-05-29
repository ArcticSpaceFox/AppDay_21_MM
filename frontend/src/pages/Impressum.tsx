import { useState } from "react";
import {Howl} from "howler";

import Banana from "./Banana.png";
import spin from '../assets/spin.mp3';

function Impressum() {
  const [counter, setCounter] = useState(0);
  let sound = new Howl({
    src: [spin],
    html5: true,
    format: ['mp3'],
    volume: 0.6
  })
  
  const handleClick = () => {
    if (counter == 1) {
      sound.load()
    }
    setCounter(counter+1);
    console.log("Do not push me")
    if (counter==4) {
      console.log("Playing baby....")
      sound.play()
    }
  }
  return (
    <div className="max-w-5xl mx-auto">
      <p className="text-indigo-600 uppercase text-2xl tracking-wide">
        Impressum
      </p>
      <p className="text-xl font-semibold  mt-4">Anbieter:</p>
      <div className="text-gray-500 ">
        <p>Studi-Boerse Org</p>
        <p>Albert Einstein Straße 5</p>
        <p>18059 Rostock</p>
        <p>Germany</p>
      </div>
      <p className="text-xl font-semibold mt-4">Kontakt:</p>
      <div className="text-gray-500">
        <p>Telefon: 089/1234567-8</p>
        <p>Email: mail@studi-boerse.org</p>
        <p>website: https://studi-boerse.org</p>
      </div>
      <p className="mt-6">
        Developed by <span className="font-bold">MarkupMonkeys</span>{" "}
        <img
          src={Banana}
          alt="This is a banana"
          className={
            counter >= 5 ? "animate-spin h-4 w-4 inline" : "h-4 w-4 inline"
          }
          onClick={handleClick}
        />
      </p>
    </div>
  );
}

export default Impressum;
