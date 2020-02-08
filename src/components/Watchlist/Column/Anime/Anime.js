import React from "react";
import "./Anime.scss";
import { Draggable } from "react-beautiful-dnd";

const Anime = ({ anime, index, column }) => {
  return (
    <Draggable draggableId={anime.id} index={index}>
      {(provided, snapshot) => (
        <div
          className="anime"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={{
            backgroundColor:
              snapshot.isDragging && column.id === "c1"
                ? "lightgreen"
                : "transparent" && snapshot.isDragging && column.id === "c2"
                ? "gold"
                : "transparent",
            ...provided.draggableProps.style
          }}
        >
          {anime.content}
        </div>
      )}
    </Draggable>
  );
};

export default Anime;
