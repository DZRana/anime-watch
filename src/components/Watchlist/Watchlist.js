import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import initialData from "./initial-data";

class Watchlist extends Component {
  constructor() {
    super();
    this.state = {
      initialData
    };
  }
  render() {
    const { initialData } = this.state;
    return (
      <DragDropContext>
        {initialData.columnOrder.map(columnId => {
          const column = initialData.columns[columnId];
          const tasks = column.taskIds.map(taskId => initialData.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    );
  }
}

export default Watchlist;
