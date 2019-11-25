import React from 'react';
import classes from './modalBackdrop.module.css'

const ModalBackdrop = (props) => {
    return (
        <div className={classes.modalBackdrop} onClick={props.clicked}>
        </div>
    );
}

export default ModalBackdrop;