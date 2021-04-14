import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import IssueCard from './IssueCard'
import IssueList from './IssueList'
import useStyles from "../../hooks/useStyles";
import {lists} from './fakeData'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result.source = sourceClone;
  result.destination = destClone;

  return result;
};

const Dnd = ()=> {
  let classes = useStyles()
  let [columns,setColumns] = useState(lists)

  let getList = id => columns.find(column=>column._id===id).items;

  let onDragEnd = result => {
    const { source, destination } = result;
    // // dropped outside the list
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );
      setColumns(prevColumns=>prevColumns.map(column=>column._id===source.droppableId?({
        ...column,items
      }):column))
    } 
    else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );
      setColumns(prevColumns=>prevColumns.map(column=>
        column._id===source.droppableId ? ({
          ...column,items:result.source
        }): column._id===destination.droppableId ? ({
          ...column,items:result.destination
        }):column)
      )
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.boardColumnsContainer}>
        {
          columns.map((column)=>(
            <Droppable key={column._id} droppableId={column._id}>
              {(provided, snapshot) => (
                <IssueList provided={provided} snapshot={snapshot} title={column.title}>
                  {column.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <IssueCard 
                          provided={provided}
                          snapshot={snapshot}
                          title={item.content}
                      />
                      )}
                    </Draggable>
                  ))}
                </IssueList>
              )}
            </Droppable>
          ))
        }
      </div>
    </DragDropContext>
  );
}

export default Dnd;
