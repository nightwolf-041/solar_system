import React from 'react';
import {Link} from 'react-router-dom'
import classes from './notFound.module.css'

const NotFound = () => {
    return (
        
	<div className={classes.notFoundMain}>
        <div className={classes.notFoundBox}>
            <div className={classes.notFoundTitle}>
                <h1>Oops!</h1>
            </div>
            <h2>صفحه ی مورد نظر یافت نشد</h2>
            <p>بنظر می رسد وارد مسیر نادرستی شده و یا آدرس اشتباهی را وارد کرده اید</p>

            <Link to="/" className={classes.notFounLink}>بازگشت به صفحه اصلی</Link>
        </div>
    </div>
    );
}

export default NotFound;