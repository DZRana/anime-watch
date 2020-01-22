import React from "react";
import "./Task.scss";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
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
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
