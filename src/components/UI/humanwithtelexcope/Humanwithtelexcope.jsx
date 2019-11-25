import React from 'react'
import classes from './humanWithTelescope.module.css'
import humanwithtelexcopeIcon from '../../../assets/images/icons/humanwithtelexcope-icon2.png'


const Humanwithtelexcope = () => {
    return (
        <div className={classes.humanwithtelexcopeBox}>
        <img src={humanwithtelexcopeIcon} alt="humanwithtelexcopeIcon" 
        className={classes.humanwithtelexcopeIcon} />
    </div>
    );
}

export default Humanwithtelexcope;