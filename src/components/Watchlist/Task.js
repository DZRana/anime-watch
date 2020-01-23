import React from "react";
import "./Task.scss";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ anime, index }) => {
  return (
    <Draggable draggableId={anime.id} index={index}>
      {(provided, snapshot) => (
        <div
          className="taskTest"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={{
            backgroundColor: snapshot.isDragging ? "lightgreen" : "transparent",
            ...provided.draggableProps.style
          }}
        >
          {anime.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
