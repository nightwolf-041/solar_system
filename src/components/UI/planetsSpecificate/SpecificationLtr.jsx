import React from 'react'
import classes from './specificationLtr.module.css'

const SpecificationLtr = (props) => {

    return (
        <div className={classes.planetSpecificationLtrMainBox}>

        <div className={classes.planetSpecificateLtrBox}>
        <img src={props.icon} alt=""
                className={classes.planetSpecificateLtrImage} />

            <div className={classes.planetSpecificateLtrDescs}>
                <h4 className={classes.planetSpecificateLtrTitle}>{props.title}</h4>
                <p className={classes.planetSpecificateLtrPara}>
                    {props.children}
                </p>
            </div>
        </div>
        </div>
    );
}

export default SpecificationLtr;