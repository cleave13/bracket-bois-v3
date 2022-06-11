import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function CourseTile(props) {
  const course = props.course;
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={course.imagePath}
        alt={course.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {course.courseName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.description}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CourseTile;