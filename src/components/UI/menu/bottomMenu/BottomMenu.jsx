import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as uiActionCreators from '../../../../storeConfigure/actionCreators/uiActionCreators'
import * as authActionCreator from '../../../../storeConfigure/actionCreators/authActionCreator'
import classes from './bottomMenu.module.css'

import sunLogo from '../../../../assets/images/planetLogo/sunLogo.png'
import mercuryLogo from '../../../../assets/images/planetLogo/mercuryLogo.png'
import venusLogo from '../../../../assets/images/planetLogo/venusLogo.png'
import earthLogo from '../../../../assets/images/planetLogo/earthLogo.png'
import marsLogo from '../../../../assets/images/planetLogo/marsLogo.png'
import jupiterLogo from '../../../../assets/images/planetLogo/jupiterLogo.png'
import saturnLogo from '../../../../assets/images/planetLogo/saturnLogo.png'
import uranusLogo from '../../../../assets/images/planetLogo/uranusLogo.png'
import neptuneLogo from '../../../../assets/images/planetLogo/NeptuneLogo.png'
import solarLogo from '../../../../assets/images/planetLogo/solar-system.png'
import closeIcon from '../../../../assets/images/icons/icon-close.png'
import menuHeaderImage from '../../../../assets/images/backgrounds/liner-solar-blue-height.jpg'


const BottomMenu = (props) => {
    return (
        <div className={props.showMenu ? classes.menuCollapse : classes.menu}>

            <div className={classes.menuHeader}>
                <img src={closeIcon} alt="close" className={classes.menuClose}
                    onClick={props.onHideMenu} />
                <img src={menuHeaderImage} alt="menuHeaderImage"
                    className={classes.menuHeaderImage} />
                <div className={classes.menuProducBox}>
                    <Link to="/products" className={classes.menuProductLink}
                    onClick={props.onHideMenu}>
                        محصولات
                    </Link>
                </div>
            </div>

            <div className={classes.menuItems}>

                <div className={classes.menuSunLogoBox}>
                    <img src={sunLogo} alt="sunLogo" className={classes.menuSunLogo} />
                    <Link to="/sun" className={classes.menuSunLink} 
                    onClick={props.onHideMenu}>خورشید</Link>
                </div>

                <div className={classes.menuMercuryLogoBox}>
                    <img src={mercuryLogo} alt="MercuryLogo"
                        className={classes.menuMercuryLogo} />
                    <Link to="/mercury" className={classes.menuMercuryLink}
                    onClick={props.onHideMenu}>عطارد</Link>
                </div>

                <div className={classes.menuVenusLogoBox}>
                    <img src={venusLogo} alt="VenusLogo"
                        className={classes.menuVenusLogo} />
                    <Link to="/venus" className={classes.menuVenusLink}
                    onClick={props.onHideMenu}>زهره</Link>
                </div>

                <div className={classes.menuEarthLogoBox}>
                    <img src={earthLogo} alt="EarthLogo"
                        className={classes.menuEarthLogo} />
                    <Link to="/earth" className={classes.menuEarthLink}
                    onClick={props.onHideMenu}>زمین</Link>
                </div>

                <div className={classes.menuMarsLogoBox}>
                    <img src={marsLogo} alt="MarsLogo"
                        className={classes.menuMarsLogo} />
                    <Link to="/mars" className={classes.menuMarsLink}
                    onClick={props.onHideMenu}>مریخ</Link>
                </div>

                <div className={classes.menuJupiterLogoBox}>
                    <img src={jupiterLogo} alt="JupiterLogo"
                        className={classes.menuJupiterLogo} />
                    <Link to="/jupiter" className={classes.menuJupiterLink}
                    onClick={props.onHideMenu}>مشتری</Link>
                </div>

                <div className={classes.menuSaturnLogoBox}>
                    <img src={saturnLogo} alt="SaturnLogo"
                        className={classes.menuSaturnLogo} />
                    <Link to="/saturn" className={classes.menuSaturnLink}
                    onClick={props.onHideMenu}>زحل</Link>
                </div>

                <div className={classes.menuUranusLogoBox}>
                    <img src={uranusLogo} alt="UranusLogo"
                        className={classes.menuUranusLogo} />
                    <Link to="/uranus" className={classes.menuUranusLink}
                    onClick={props.onHideMenu}>اورانوس</Link>
                </div>

                <div className={classes.menuNeptuneLogoBox}>
                    <img src={neptuneLogo} alt="NeptuneLogo"
                        className={classes.menuNeptuneLogo} />
                    <Link to="/neptune" className={classes.menuNeptuneLink}
                    onClick={props.onHideMenu}>نپتون</Link>
                </div>

            </div>
            <div className={classes.menuFooter}>
            <img src={closeIcon} alt="close" className={classes.menuCloseInFooter}
                    onClick={props.onHideMenu} />
                <Link to="/" exact='true' className={classes.menuHomePageLink}
                onClick={props.onHideMenu}>
                    صفحه اصلی
                </Link>
                <Link to="/products" className={classes.menuProductLinkInFooter}
                    onClick={props.onHideMenu}>
                        محصولات
                    </Link>
                <svg className={classes.menuVector}>
                    <polygon style={{ fill: '#002147' }} points="0 0 30 300 300 300 300 0" />
                </svg>
                <img src={solarLogo} alt="solar-system" className={classes.solarLogo} />
                <div className={classes.loginRegisterBox}>

                {props.token ?

                    <button type="button" className={classes.menuLogOutButton}
                    onClick={props.onLoggedOut}>خروج</button> :

                    <Link to="/Login" className={classes.menuLoginLink}
                        onClick={props.onHideMenu}>
                            ورود
                    </Link>

                }

                {/* <Link to="/Login" className={classes.menuLoginLink}
                onClick={props.onHideMenu}>
                    ورود
                </Link> */}
                </div>
            </div>
        </div>
    )
}

const mapState = state => {
    return {
        showMenu: state.uiReducer.showMenu,
        token: state.authReducer.token !== null
    }
}

const mapDispatch = dispatch => {
    return {
        onShowMenu: () => dispatch(uiActionCreators.showMenu()),
        onHideMenu: () => dispatch(uiActionCreators.hideMenu()),
        onLoggedOut: () => dispatch(authActionCreator.loggedOut())
    }
}

export default connect(mapState, mapDispatch)(BottomMenu);