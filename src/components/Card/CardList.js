import React from "react";
import { projects } from "../../data";
import Card from "./Card";

const CardList = () => {
  return (
    <div>
      {projects.map((projects) => {
        return (
          <Card
            key={projects.id}
            id={projects.id}
            name={projects.name}
            url={projects.url}
            rating={projects.rating}
          />
        );
      })}
    </div>
  );
};

export default CardList;
