import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./Watchlist.scss";
import Column from "./Column/Column";

const Watchlist = ({ onDragEnd, watchlistData }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="mt-5 row">
        {watchlistData.columnOrder.map(columnId => {
          const column = watchlistData.columns[columnId];
          if (columnId !== "c3") {
            const animes = column.animeIds.map(
              animeId => watchlistData.animes[animeId]
            );
            return <Column key={column.id} column={column} animes={animes} />;
          }
        })}
      </div>
      <div className="row">
        <Column key={"c3"} column={watchlistData.columns["c3"]} />
      </div>
    </DragDropContext>
  );
};

export default Watchlist;
