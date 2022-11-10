import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { Link } from "react-router-dom";
import { BorderAll } from '@mui/icons-material';

export default function PokemonCard({ name, image, types , id}) {

    const qTypes = () => {
        if (types[1])  {
            return types[0].type.name + " | " + types[1].type.name 
        } 

        return types[0].type.name
    }

  return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt={name}
        image= {image}
        />
      <CardContent>
        <Box display="flex"  flexWrap="wrap" flexDirection="column" alignItems="center" >
            <Typography gutterBottom variant="h5" component="div" textAlign={'center'} textTransform="uppercase">
            {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div" textAlign={'center'}>
                {qTypes()}
            </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button>
          <Link to={`/${id}`}>
            Detalhes
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}