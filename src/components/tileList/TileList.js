import React from "react";
import { Tile } from "../tile/Tile";

//Contacts is an array of objects
export const TileList = ({tiles}) => {
  return (
    <div>
      {//Iteratively render Tile components, using each object in the array to pass the name and description props to each rendered Tile component
       tiles.map((tile, index) => {
        const {name, ...rest} = tile;
        return (<Tile name={name} description={rest} key={index} />);
      })}
    </div>
  );
};
