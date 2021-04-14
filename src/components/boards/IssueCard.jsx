import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {CardActions, IconButton} from "@material-ui/core"
import Typography from '@material-ui/core/Typography';
import useStyles from '../../hooks/useStyles';
import {EditOutlined} from '@material-ui/icons'

export default function IssueCard({title,provided,...rest}) {
  const classes = useStyles();
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Card className={classes.cardRoot}>
        <CardContent>
          <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
            {title}
          </Typography>
        </CardContent>
        <CardActions><IconButton><EditOutlined fontSize='small' /></IconButton></CardActions>
      </Card>
    </div>
  );
}
