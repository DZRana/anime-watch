import React from "react";
import "./Column.scss";
import Anime from "../Anime/Anime";
import { Droppable } from "react-beautiful-dnd";

const Column = ({ column, animes }) => {
  return (
    <div className="colTest col d-flex flex-column ">
      <h3 className="titleTest">{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            className="taskListTest flex-grow-1"
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              backgroundColor:
                snapshot.isDraggingOver && column.id === "c1"
                  ? "teal"
                  : "transparent" &&
                    snapshot.isDraggingOver &&
                    column.id === "c2"
                  ? "#990000"
                  : "transparent",
              ...provided.droppableProps.style
            }}
          >
            {animes.map((anime, index) => (
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
