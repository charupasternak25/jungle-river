import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTitleBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",                
    },     
    img: {
        width: 200,
        height: 200,  
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },    
    gridList: {
        maxWidth: 800,        
      }
  }));
  
const GridView = (props) => {   
    const classes = useStyles();
    return (            
        <div className={classes.root}>
            <GridList spacing={20} cellHeight={300} className={classes.gridList} cols={3}>
                {props.data.map((product) => (
                    <GridListTile key={product.id} cols={product.cols || 1}>
                        <img className={classes.img} src={product.image} alt={product.description} />
                        <GridListTitleBar
                            title={product.title}
                            subtitle={<span>${product.price}</span>}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>       
    );
};

export default GridView;
