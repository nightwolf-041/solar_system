import React from 'react';
import {connect} from 'react-redux'
import * as uiActionCreators from '../../storeConfigure/actionCreators/uiActionCreators'
import classes from './aboutUs.module.css'
import Backdrop from '../../components/UI/backdrop/Backdrop'
import BottomMenu from '../../components/UI/menu/bottomMenu/BottomMenu'
import menuIcon from '../../assets/images/icons/menu.png'
import spaceRLogo from '../../assets/images/icons/spaceR-logo3.png'
import aboutUsDescLogo from '../../assets/images/icons/aboutUs-space-logo4.png'
import aboutUsNasaLogo from '../../assets/images/icons/aboutUs-bottom-logoes-nasa.png'
import aboutUsIsaLogo from '../../assets/images/icons/aboutUs-bottom-logoes-ir.png'
import aboutUsApscoLogo from '../../assets/images/icons/aboutUs-bottom-logoes-apsco.png'


const AboutUs = (props) => {

    return (
        <div className={classes.aboutUsMain}>
            {props.showMenu ? <Backdrop clicked={props.onHideMenu} /> : null}

            <BottomMenu />

            <img src={menuIcon} alt="menu" className={classes.menuIcon}
                    onClick={props.onShowMenu} />

            <div className={classes.aboutUsTop}>
                <div className={classes.aboutTopKeeper}>

                    <div className={classes.aboutUsDescs}>
                        <img src={spaceRLogo} alt="spaceRLogo" className={classes.spaceRLogo} />
                        <h1 className={classes.aboutUsTitle}>
                            شرکت تحقیقاتی فضایی اسپیس آر
                            <br />
                            بزرگترین موسسه تحقیقاتی-فضایی ایران
                            <br />
                              برای اولین بار در سابقه 8 ساله ی خود مفتخر است بصورت آنلاین نتایج مشاهدات بصری مربوط به منظومه شمسی را در اختیار شما دوست داران نجوم قرار دهد
                        </h1>
                        
                        <h4 className={classes.aboutUsAnimatedPara}>
                            با ما در فضا زندگی کنید
                        </h4>
                        <img src={aboutUsDescLogo} alt="aboutUsDescLogo"
                            className={classes.aboutUsDescLogo} />
                    </div>

                    <div className={classes.rocket}>
                        <div className={classes.rocketBody}>
                        <div className={classes.body}></div>
                        <div className={[classes.fin, classes.finLeft].join(' ')}></div>
                        <div className={[classes.fin, classes.finRight].join(' ')}></div>
                        <div className={classes.window}></div>
                        </div>

                        <div className={classes.exhaustFlame}></div>

                        <ul className={classes.exhaustFumes}>
                            <li className={[classes.exhaustFumesItem1, classes.items].join(' ')}></li>
                            <li className={[classes.exhaustFumesItem2, classes.items].join(' ')}></li>
                            <li className={[classes.exhaustFumesItem3, classes.items].join(' ')}></li>
                            <li className={[classes.exhaustFumesItem4, classes.items].join(' ')}></li>
                            <li className={[classes.exhaustFumesItem5, classes.items].join(' ')}></li>
                            <li className={[classes.exhaustFumesItem6, classes.items].join(' ')}></li>
                            <li className={[classes.exhaustFumesItem7, classes.items].join(' ')}></li>
                            <li className={[classes.exhaustFumesItem8, classes.items].join(' ')}></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={classes.aboutUsBottom}>
                <svg className={classes.aboutSvg}>
                <path style={{fill:'#0D47A1'}} d="M 0 0 C 0 0, 0 0, 0 0 Q 150 150, 250 50 Q 350 200, 400 50 C 500 150, 500 50, 550 50 Q 600 100, 700 50 Q 700 50, 700 50 Q 750 150, 800 30 Q 850 150, 1000 30  Q 1050 150, 1100 50 C 1200 150, 1300 60, 1300 0 C 1350 90, 1450 60, 1500 10 C 1500 150, 1600 150, 1900 50 C 1800 50, 1950 150, 2000 50 C 2000 70, 2100 210, 2100 30 C 2200 140, 2300 100, 2400 70
                C 2450 160, 2600 150, 2700 0 Z" />
            </svg>

            <h2 className={classes.aboutUsBottomTitle}>
                دارای گواهینامه از سازمان NASA ، APSCO و سازمان فضای ایران
            </h2>
            <div className={classes.aboutUsLogoesBox}>
                <img src={aboutUsNasaLogo} alt="aboutUsNasaLogo"
                className={classes.aboutUsNasaLogo} />
                <img src={aboutUsApscoLogo} alt="aboutUsApscoLogo"
                className={classes.aboutUsApscoLogo} />
                <img src={aboutUsIsaLogo} alt="aboutUsIsaLogo"
                className={classes.aboutUsIsaLogo} />
                
            </div>
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

export default connect(mapState, mapDispatch)(AboutUs);