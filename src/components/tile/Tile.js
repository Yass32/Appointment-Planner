import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title ">{name}</p>
      {//Object.values() to generate an array of the object’s values and then use map() to iterate over the array
      Object.values(description).map((desc, index) => 
        <p className="tile" key={index}>{desc}</p>
      )}
    </div>
  );
};
