import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./Watchlist.scss";
import Column from "./Column/Column";

const Watchlist = ({ onDragEnd, watchlistData }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="row">
        {watchlistData.columnOrder.map(columnId => {
          const column = watchlistData.columns[columnId];
          const animes = column.animeIds.map(
            animeId => watchlistData.animes[animeId]
          );

          return <Column key={column.id} column={column} animes={animes} />;
        })}
      </div>
    </DragDropContext>
  );
};

export default Watchlist;
