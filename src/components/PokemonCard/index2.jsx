import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';

export default function PokemonCard2({ name, image, types, stats, forms}) {

    const qTypes = () => {
        if (types[1])  {
            return types[0].type.name + " e " + types[1].type.name
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
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography gutterBottom variant="h5" component="div" textAlign={'center'} textTransform="uppercase">
                {name}
                </Typography>
                <Typography gutterBottom variant="caption" component="div" textAlign={'center'} textTransform="uppercase">
                    {qTypes()}
                </Typography>
            </Box>
            <Typography gutterBottom variant="subtitle2" component="div" textTransform="uppercase">
                    HP: {stats[0].base_stat}<br/>
                    Ataque: {stats[1].base_stat}<br/>
                    Defesa: {stats[2].base_stat}<br/>
                    Ataque Especial: {stats[3].base_stat}<br/>
                    Defesa Especial: {stats[4].base_stat}<br/>
                    Velocidade: {stats[5].base_stat}<br/>
            </Typography>
      </CardContent>
    </Card>
  );
}