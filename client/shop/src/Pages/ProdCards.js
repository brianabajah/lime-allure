import React from 'react';

import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Info  from '../resources/Info.json';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
      },
    contn: {
    textAlign: "center",
    },
    card: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        // maxWidth:"300",        
        color: theme.palette.text.secondary,
      },
}));

export default function ProdCards() {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} lg={12} align="center">
              {/* <Paper className={classes.banner}>Banner</Paper> */}
            </Grid>

            {Info.data.map((d)=>{
                return (
                        // <Grid item xs={12} sm={12} md={6} lg={6}>
                        // <Paper className={classes.card}>Product Card</Paper>
                        // </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4} align="center">
                        <Card className={classes.root}>
                        <CardActionArea className={classes.card}>
                          <CardMedia
                            component="img"
                            alt={d.title}
                            height="140"
                            image="https://drive.google.com/file/d/19BanxHLsxUI8MlPX9mg2sJo1c58DvAIP/view?usp=sharing"
                            title={d.title}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {d.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              {d.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            Share
                          </Button>
                          <Button size="small" color="primary">
                            Learn More
                          </Button>
                        </CardActions>
                      </Card>
                      </Grid>
                    );
                })
            }
        </>
    )
}
