import React, { useState } from "react";
import { ReactComponent as GridIcon} from './icon-grid.svg';
import { ReactComponent as ListIcon} from './icon-list.svg';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import useProducts from '../../helpers/ProductHook.jsx';
import Header from '../Header';
import ListView from '../ListView';
import GridView from '../GridView';
import CircularProgress from '@material-ui/core/CircularProgress';
import "./ProductsPage.css";

const StyledConatiner = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: center;
    margin: 20px 10px;
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0;
`;

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
}));

export const ProductsPage = (props) => {  
  const [listView, setListView] = useState(true);
  const [gridView, setGridView] = useState();
  
  const handleList = () => {
    setListView(true);
    setGridView(false);
  }
  const handleGrid = () => {
    setGridView(true);
    setListView(false);
  }

  const products = useProducts();
  const classes = useStyles();  

  return (
    <StyledConatiner className="container">
        <div className="product-page">
            <Header />
            <StyledRow className="row">
                <div className="col l12 pull-right">
                    <div className="btn-group icons">
                        <span onClick={handleList} id="list">
                            <ListIcon className="icon" title="list" />
                        </span>
                        <span onClick={handleGrid} id="grid">
                            <GridIcon className="icon" title="grid" />
                        </span>
                    </div>
                </div>
            </StyledRow>
            <div>
                {products.length > 0 
                    ?
                    <div className="row">                    
                    {listView 
                        ? 
                        <ListView data={products} view={listView} /> 
                        : 
                        <GridView data={products} view={gridView} />
                    }
                    </div>
                    :
                    <div className={classes.root}><CircularProgress /></div>            
                }
            </div>
        </div>
    </StyledConatiner>
  );
};
