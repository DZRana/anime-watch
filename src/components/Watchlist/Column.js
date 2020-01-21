import React from "react";
import "./Column.scss";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Column = ({ column, tasks }) => {
  return (
    <div className="colTest">
      <h3 className="titleTest">{column.title}</h3>
      <Droppable droppableId={column.id}>
        {provided => (
          <div
            className="taskListTest"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
