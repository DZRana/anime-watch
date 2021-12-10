import React from "react";
import "./Column.css";
import Anime from "./Anime/Anime";
import { Droppable } from "react-beautiful-dnd";

const Column = ({ column, animes }) => {
  return (
    <div className="colContainer col d-flex flex-column ">
      <h3 className="colTitle">{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            className="animeList flex-grow-1"
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              backgroundColor:
                snapshot.isDraggingOver && column.id === "c1"
                  ? "teal"
                  : "transparent" &&
                    snapshot.isDraggingOver &&
                    column.id === "c2"
                  ? "orange"
                  : "transparent" &&
                    snapshot.isDraggingOver &&
                    column.id === "c3"
                  ? "#990000"
                  : "transparent",
              ...provided.droppableProps.style,
            }}
          >
            {(column.id === "c1" || column.id === "c2") &&
              animes.map((anime, index) => (
                <Anime
                  key={anime.id}
                  anime={anime}
                  index={index}
                  column={column}
                />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
