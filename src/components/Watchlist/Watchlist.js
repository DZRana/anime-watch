import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./Watchlist.scss";
import Column from "./Column";
import initialData from "./initial-data";

class Watchlist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(props) {
    this.setState(this.props.watchlistData);
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppablId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];
    if (start === finish) {
      const newAnimeIds = Array.from(start.animeIds);
      newAnimeIds.splice(source.index, 1);
      newAnimeIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        animeIds: newAnimeIds
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      };

      this.setState(newState);
      return;
    }

    // Moving from one list to another
    const startAnimeIds = Array.from(start.animeIds);
    startAnimeIds.splice(source.index, 1);
    const newStart = {
      ...start,
      animeIds: startAnimeIds
    };

    const finishAnimeIds = Array.from(finish.animeIds);
    finishAnimeIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      animeIds: finishAnimeIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="row">
          {Object.keys(this.state).length > 0 &&
            this.state.columnOrder.map(columnId => {
              const column = this.state.columns[columnId];
              const animes = column.animeIds.map(
                animeId => this.state.animes[animeId]
              );
              console.log(animes);
              return <Column key={column.id} column={column} animes={animes} />;
            })}
        </div>
      </DragDropContext>
    );
  }
}

export default Watchlist;
