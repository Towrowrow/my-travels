import React from "react";
import Travel from "./Travel";
// src/Quotes.js
const travels = [
  {
    destination:"Zanarkand",
    country :"FF",
    photo:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/final-fantasy-x/0/05/FFX.PS3_HD.1.jpg?width=640",
    distance:"Far Far away"
  },
  {
    destination:"Terra",
    country :"NoWhere",
    photo:"http://www.ffwa.eu/ff6/images/wob_thumb.jpg",
    distance:"not a number my boda"
  },
  {
    destination:"Midgard",
    country :"NoWhere",
    photo:"https://gematsu.com/wp-content/uploads/2015/03/FF7-Sequel-Rodensoft-Story.jpg",
    distance:"not a number my boda"
  },
  {
    destination:"Terra Hunting",
    country :"NoWhere",
    photo:"https://vignette.wikia.nocookie.net/finalfantasy/images/f/f6/FestivaloftheHunt.png/revision/latest?cb=20100216233346",
    distance:"not a number my boda"
  },
  {
    destination:"Balamb",
    country :"NoWhere",
    photo:"http://aws-cf.ados.fr/prod/photos/5/0/9/5281509/937251/img-93725190d.jpg?v=6",
    distance:"not a number my boda"
  },
];

const Travels = () => (
  <div>
   { travels.map(travel => (<Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance} />))}
     </div>
);

export default Travels;


