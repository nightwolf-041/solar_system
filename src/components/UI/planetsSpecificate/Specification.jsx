import React from 'react'
import classes from './specification.module.css'

const Specification = (props) => {

    return (
        <div className={classes.planetSpecificationMainBox}>

            <div className={classes.planetSpecificateBox}>
                <div className={props.afterColor === 'red' ? classes.planetSpecificateDescsRed : classes.planetSpecificateDescsBlue}>
                    <h4 className={props.afterColor === 'red' ? classes.planetSpecificateTitle :
                        classes.planetSpecificateTitleBlue}>{props.title}</h4>
                    <p className={classes.planetSpecificatePara}>
                        {props.children}
                    </p>
                </div>
                <img src={props.icon} alt=""
                    className={classes.planetSpecificateImage} />
            </div>
        </div>
    );
}

export default Specification;