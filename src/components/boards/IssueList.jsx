import React from 'react';
import useStyles from '../../hooks/useStyles';
import {Button, IconButton} from "@material-ui/core"
import {MoreHorizOutlined} from '@material-ui/icons'
export default function IssueList({title,provided,children,...rest}) {
  const classes = useStyles();
  return (
    <div
      ref={provided.innerRef}
      className={classes.boardColumn}
    >
      <div className={classes.columnTitle}>
        <Button >{title}</Button>
        <IconButton><MoreHorizOutlined fontSize='small'/></IconButton>
      </div>
      {children}
      {provided.placeholder}
    </div>
  );
}
