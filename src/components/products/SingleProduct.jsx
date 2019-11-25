import React from 'react';
import classes from './products.module.css'

const SingleProduct = (props) => {
    return (
        <div className={classes.productCart}>

            <div className={classes.productCartHeader}>
                <img src={props.cartImage} alt="" className={classes.cartHeaderImage} />
            </div>

            <div className={classes.productCartBody}>
                <h5 className={classes.cartBodyTitle}>
                    {props.cartTitle}
                </h5>
                <p className={classes.cartBodyDesc}>
                    {props.cartDesc}
                </p>
                <span className={classes.cartBodyPrice}>
                    {props.cartPrice + ' تومان'}
                </span>
            </div>

            <div className={classes.productCartFooter}>
                <div className={classes.productCartBtnskeeper}>
                    
                    <button className={classes.cartFooterIncBtn}
                    onClick={props.incClicked}>+</button>

                    <button className={classes.cartFooterDecBtn}
                    onClick={props.decClicked}>-</button>
                </div>
              
            </div>

        </div>
    );
}

export default SingleProduct;