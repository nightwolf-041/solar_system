import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Typed from 'react-typed';
import * as uiActionCreators from '../../storeConfigure/actionCreators/uiActionCreators'
import Backdrop from '../../components/UI/backdrop/Backdrop'
import Menu from '../../components//UI/menu/Menu'
import classes from './homePage.module.css';

import sun from '../../assets/images/homePage/sun-circle2.png'
import mercury from '../../assets/images/homePage/mercury-circle.png'
import venus from '../../assets/images/homePage/venus-circle.png'
import earth from '../../assets/images/homePage/earth-circle.png'
import mars from '../../assets/images/homePage/mars-circle.png'
import jupiter from '../../assets/images/homePage/jupiter-circle.png'
import saturn from '../../assets/images/homePage/saturn-circle.png'
import uranus from '../../assets/images/homePage/uranus-circle.png'
import neptune from '../../assets/images/homePage/neptune-circle.png'
import menuIcon from '../../assets/images/icons/menu.png'



const HomePage = (props) => {


    return (
        <div className={classes.solarContainer}>

            {props.showMenu ? <Backdrop clicked={props.onHideMenu} /> : null}

            {props.showMenu ? null :
                <Typed className={["text-white", classes.typedPara].join(' ')}
                    strings={['جهت ادامه روی یکی از سیارات کلیک کنید', 'جهت ادامه منوی سمت راست را باز کنید']}
                    typeSpeed={70}
                    backSpeed={10}
                    loop
                />}

            <img src={menuIcon} alt="menu" className={classes.menuIcon}
                onClick={props.onShowMenu} />

            <Menu />

            <div className={classes.planets}>
                <Link to="/sun" ><img src={sun} alt="sun" className={classes.sun} /></Link>
                <Link to="/mercury" ><img src={mercury} alt="mercury" className={classes.mercury} /></Link>
                <Link to="/venus" ><img src={venus} alt="venus" className={classes.venus} /></Link>
                <Link to="/earth" ><img src={earth} alt="earth" className={classes.earth} /></Link>
                <Link to="/mars" ><img src={mars} alt="mars" className={classes.mars} /></Link>
                <Link to="/jupiter" ><img src={jupiter} alt="jupiter" className={classes.jupiter} /></Link>
                <Link to="/saturn" ><img src={saturn} alt="saturn" className={classes.saturn} /></Link>
                <Link to="/uranus" ><img src={uranus} alt="uranus" className={classes.uranus} /></Link>
                <Link to="/neptune" ><img src={neptune} alt="neptune"
                    className={classes.neptune} /></Link>
            </div>

        </div>              
    );
}


const mapState = state => {
    return {
        showMenu: state.uiReducer.showMenu
    }
}

const mapDispatch = dispatch => {
    return {
        onShowMenu: () => dispatch(uiActionCreators.showMenu()),
        onHideMenu: () => dispatch(uiActionCreators.hideMenu())
    }
}

export default connect(mapState, mapDispatch)(HomePage);