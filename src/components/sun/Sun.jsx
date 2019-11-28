import React from 'react'
import { connect } from 'react-redux'
import classes from './sun.module.css'
import Specification from '../../components/UI/planetsSpecificate/Specification'
import SpecificationLtr from '../../components/UI/planetsSpecificate/SpecificationLtr'
import Backdrop from '../../components/UI/backdrop/Backdrop'
import * as uiActionCreators from '../../storeConfigure/actionCreators/uiActionCreators'
import BottomMenu from '../../components/UI/menu/bottomMenu/BottomMenu'
import Humanwithtelexcope from '../UI/humanwithtelexcope/Humanwithtelexcope'
import PlanetCounter from '../UI/planetCounter/PlanetCounter'
import Carousel from '../UI/carousel/Carousel'
import Footer from '../UI/footer/Footer'

import telescopeIcon from '../../assets/images/icons/telescope-icon.png'
import SpecificationsIcon from '../../assets/images/icons/Specifications-icon.png'
import specificIcon from '../../assets/images/icons/specific-icon.png'
import sunCircleImage from '../../assets/images/sun/sunCircle.jpg'
import menuIcon from '../../assets/images/icons/menu.png'

import sunSlide1 from '../../assets/images/sun/sun-slide1.png'
import sunSlide2 from '../../assets/images/sun/sun-slide2.png'
import sunSlide3 from '../../assets/images/sun/sun-slide3.png'
import sunSlide4 from '../../assets/images/sun/sun-slide4.png'
import sunSlide5 from '../../assets/images/sun/sun-slide5.png'
import sunSlide6 from '../../assets/images/sun/sun-slide6.png'
import sunSlide7 from '../../assets/images/sun/sun-slide7.png'



const Sun = (props) => {

    return (
        <div className={classes.sunMain}>

            {props.showMenu ? <Backdrop clicked={props.onHideMenu} /> : null}

            <BottomMenu />

            <div className={classes.sunHeadingBox}>
                    <img src={sunCircleImage} alt="sun" className={classes.sunCircleImage} />
                <div className={classes.sunHeaderDiv}>
                    <h1 className={classes.sunHeader}>خورشید</h1>
                </div>
            </div>

            <div className={classes.containerBack}>
                <img src={menuIcon} alt="menu" className={classes.menuIcon}
                    onClick={props.onShowMenu} />
                <div className={['container', classes.container].join(' ')}>

                    <Humanwithtelexcope />

                    <Specification title='مشخصات ظاهری'
                        icon={telescopeIcon}
                        afterColor='red'>
                            خورشید تنها ستارهٔ سامانهٔ خورشیدی است که در مرکز آن جای دارد. خورشید یک کُرهٔ کامل است که از پلاسمای داغ ساخته شده‌است و در میانهٔ آن میدان مغناطیسی برقرار است.این ستاره که قطری نزدیک به ۱٬۳۹۲٬۰۰۰ کیلومتر دارد سرچشمهٔ اصلی نور، انرژی، گرما و زندگی بر روی زمین است.
<br />
                             خورشید نخستین جسم در سامانهٔ خورشیدی بر پایهٔ جرم و حجم می‌باشد. قطر خورشید نزدیک به ۱۰۹ برابر قطر زمین و جرم آن ۳۳۰ هزار برابر جرم زمین برابر با ۲‎×۱۰۳۰ کیلوگرم است. این مقدار ۹۹٫۸۶٪ کل جرم سامانهٔ خورشیدی است.
                        </Specification>

                    <SpecificationLtr title='نام و ریشه'
                        icon={SpecificationsIcon}>
                            خورشید در فارسی درگذشته با نام‌های دیگری چون خور، هور، مهر، روز خوانده می‌شد. خورشید در فارسی نوین از xvar-xšed از فارسی میانه که ایزدی است که در یشت ششم اوستا در مورد او نوشته آمده وی ایزدی است که جهان را از آلودگی دور می‌دارد. در اوستا hvarr-, xvan ,ta hvarә-xšaē آمده‌است. واژه خورشید درارای دو جزء است جزء نخست xvar-, hvar که با سنسکریت svar «خورشید» سنجنده می‌شود. جزء دوم برگرفته از اوستایی xšaita- «درخشان» است که در نام جمشید (پادشاه دوران طلایی در اسطوره‌های ایرانی و نیز نخستین شاه در برخی روایت‌ها) آمده و برگرفته از صورت اوستایی yama-xšaita به معنی «جم درخشان» است.
                        </SpecificationLtr>

                    <Specification title='ویژگی ها'
                        icon={specificIcon}
                        afterColor='blue'>
                            خورشید ستاره‌ای از گونهٔ کوتولهٔ زرد است که ۹۹٫۸۶٪ از مجموع جرم سامانهٔ خورشیدی را از آن خود کرده‌است. هندسهٔ خورشید به یک کرهٔ کامل بسیار نزدیک است. پَخی بسیار کوچکی برابر با ۹×۱۰-۶ در هندسهٔ آن وجود دارد در نتیجه میان قطر خورشید در دو سوی قطب‌ها نسبت به قطر آن در مدار استوایی ۱۰ کیلومتر اختلاف وجود دارد.
<br />                            
                            از آنجایی که خورشید جامد نیست و از پلاسما ساخته شده‌است، در مدار استوایی نسبت به دو قطب، تُندتر می‌گردد. این رفتار که گردش اختلافی نام دارد، به دلیل وجود پدیدهٔ همرفت در خورشید و جابجایی ماده در اثر اختلاف دما است. آنچنان که از قطب شمال دائرةالبروج دیده می‌شود، این جرم به بخشی از جرم خورشید تکانهٔ زاویه‌ای پادساعت‌گرد می‌دهد در نتیجه در سراسر خورشید یک سرعت زاویه را توزیع می‌کن
<br />                            
                            دورهٔ این گردش واقعی نزدیک به ۲۵٫۶ روز در مدار استوایی و ۳۳٫۵ روز در دو قطب است.
                        </Specification>
                </div>
            </div>

            <PlanetCounter
                distanceCounterValue='25000'
                gravityCounterValue='274'
                tempratureCounterValue='5505'
                movementCounterValue='251' />


            <Carousel
                gallery={[
                    sunSlide1,
                    sunSlide2,
                    sunSlide3,
                    sunSlide4,
                    sunSlide5,
                    sunSlide6,
                    sunSlide7
                ]} />


            <Footer />
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

export default connect(mapState, mapDispatch)(Sun);