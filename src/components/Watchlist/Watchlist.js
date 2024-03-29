import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column/Column";
import { useSelector } from "react-redux";

const Watchlist = ({ onDragEnd }) => {
  const user = useSelector((state) => state.user);
  const { watchlistData } = user;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-2 text-lg md:text-2xl text-white font-bold mt-4">
        {watchlistData.columnOrder.map((columnId) => {
          const column = watchlistData.columns[columnId];
          if (columnId !== "c3") {
            const animes = column.animeIds.map(
              (animeId) => watchlistData.animes[animeId]
            );
            return <Column key={column.id} column={column} animes={animes} />;
          }
        })}
      </div>
      <div className="text-lg md:text-2xl text-white font-bold">
        <Column key={"c3"} column={watchlistData.columns["c3"]} />
      </div>
    </DragDropContext>
  );
};

export default Watchlist;
