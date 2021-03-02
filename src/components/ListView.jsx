import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({        
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 800,
      marginBottom: '2rem'
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    }    
  }));
  
const ListView = (props) => {
    const classes = useStyles();
    return (
        <div>
            { props.data.map((product) => (                
                <Paper key={product.id} className={classes.paper}>
                    <Grid container spacing={2}>                        
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt={product.category} src={product.image} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        <Link href="">{product.title}</Link>
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {product.description}
                                    </Typography>
                                </Grid> 
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">${product.price}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>             
                </Paper>
            ))}
        </div>
    );
};

export default ListView;
