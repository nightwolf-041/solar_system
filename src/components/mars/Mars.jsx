import React from 'react'
import { connect } from 'react-redux'
import classes from './mars.module.css'
import LazyLoad from 'react-lazy-load';
import Specification from '../../components/UI/planetsSpecificate/Specification'
import SpecificationLtr from '../../components/UI/planetsSpecificate/SpecificationLtr'
import Backdrop from '../../components/UI/backdrop/Backdrop'
import * as uiActionCreators from '../../storeConfigure/actionCreators/uiActionCreators'
import BottomMenu from '../../components/UI/menu/bottomMenu/BottomMenu'
import Humanwithtelexcope from '../UI/humanwithtelexcope/Humanwithtelexcope'
import PlanetCounter from '../UI/planetCounter/PlanetCounter'
import Carousel from '../UI/carousel/Carousel'
import Footer from '../UI/footer/Footer'

import marsCircleImage from '../../assets/images/mars/mars-circle.png'
import telescopeIcon from '../../assets/images/icons/telescope-icon.png'
import SpecificationsIcon from '../../assets/images/icons/Specifications-icon.png'
import specificIcon from '../../assets/images/icons/specific-icon.png'
import menuIcon from '../../assets/images/icons/menu.png'

import marsSlide1 from '../../assets/images/mars/mars-slide1.png'
import marsSlide2 from '../../assets/images/mars/mars-slide2.png'
import marsSlide3 from '../../assets/images/mars/mars-slide3.png'
import marsSlide4 from '../../assets/images/mars/mars-slide4.png'
import marsSlide5 from '../../assets/images/mars/mars-slide5.png'
import marsSlide6 from '../../assets/images/mars/mars-slide6.png'
import marsSlide7 from '../../assets/images/mars/mars-slide7.png'


const Mars = (props) => {

    return (
        <div className={classes.marsMain}>

            {props.showMenu ? <Backdrop clicked={props.onHideMenu} /> : null}

            <BottomMenu />

            <div className={classes.marsHeadingBox}>
                <LazyLoad>
                    <img src={marsCircleImage} alt="mars" className={classes.marsCircle} />
                </LazyLoad>
                <div className={classes.marsHeaderDiv}>
                    <h1 className={classes.marsHeader}>مریخ</h1>
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
                            مِرّیخ یا بَهرام چهارمین سیاره در منظومه شمسی است که در مداری طولانی‌تر و با سرعتی کمتر از زمین به دور خورشید می‌چرخد. هر یک بار گردش این سیاره به دور خورشید معادل ۶۸۷ شبانه‌روز زمین به درازا می‌کشد و طول شب و روز نیز از کرهٔ زمین کمی طولانی‌تر است.
                            <br />
                            نوری که از خورشید به مریخ می‌رسد نصف نوری است که زمین دریافت می‌کند اما روز مریخی چهل دقیقه طولانی‌تر از روز زمینی است؛ بنابراین شرایط از نظر نور تقریباً مثل زمستان زمین است و به این خاطر امکان رشد گیاهان در شرایط گلخانه‌ای در مریخ وجود دارد. روزهای مریخ ۲۴ ساعت و ۳۷ دقیقه درازا دارند. از آن‌جا که محور سیارهٔ مریخ همانند زمین °۲۴ درجه کج است، در این سیاره نیز فصل‌های سال وجود دارند. اما هر سال مریخی کمابیش دو برابر سال زمینی یعنی ۶۷۸ روز به درازا می‌کشد.
                    </Specification>

                    <SpecificationLtr title='نام و ریشه'
                        icon={SpecificationsIcon}>
                            مریخ نام ستاره ٔ فلک پنجم از ستاره های خُنَّس و آن را بهرام نیز گویند، منحوس و دال بر جنگ و خصومت و خونریزی و ظلم است. کوکبی است از جمله ٔ سبعه ٔ سیاره و در آسمان پنجم می باشد. ستاره ای است از خنس ، گویند سبب تسمیه ٔ آن سرعت سیرش است و برخی گویند بسبب رنگ زرد و سرخ آن است که شبیه مرداسنج (مردار سنگ ) باشد.
                            <br />
                             چهارم کوکب سیار در عالم شمسی که بهرام نیز گویند و به اعتقاد بطلمیوس کوکب سیاری که درآسمان پنجم واقع شده است.
                    </SpecificationLtr>

                    <Specification title='ویزگی ها'
                        icon={specificIcon}
                        afterColor='blue'>
                            مریخ از زمین کم چگال‌تر است، به گونه‌ای که حجمی برابر ۱۵٪ و جرمی برابر ۱۱٪ زمین دارد. مساحت سطح آن تنها اندکی کم‌تر از مجموع سطوح خشکی‌های زمین است. مریخ در برابر عطارد بزرگتر و دارای جرم بیشتر و در نتیجه چگال‌تر است. همین زمینه سبب شده‌است نیروی گرانش بیشتری در سطح مریخ وجود داشته باشد. مریخ از نظر میزان حجم و جرم، هشتمین جسم در منظومۀ شمسی است.
<br />
                            مریخ از دید اندازه، جرم و گرانش سطح، حالتی میان زمین و ماه (ماه زمین) دارد؛ ماه قطری برابر یک دوم قطر مریخ دارد، در حالی که قطر زمین حدود دو برابر قطر مریخ است، زمین دارای جرمی در حدود ده برابر جرم مریخ است، در حالی که جرم ماه ده برابر کم‌تر از مریخ است. نمای سرخ-نارنجی رنگ مریخ در اثر وجود آهن (III) اکسید، که بیشتر به هماتیت یا زنگ آهن مشهور است، به وجود آمده‌است.
                    </Specification>

                </div>
            </div>

            <PlanetCounter
                distanceType='فاصله از خورشید'
                distanceUnit='km'
                distanceCounterValue='230,100000'
                gravityCounterValue='3٫711'
                tempratureCounterValue='-62'
                movementCounterValue='24٫77' />


                <Carousel 
                gallery = {[
                    marsSlide1,
                    marsSlide2,
                    marsSlide3,
                    marsSlide4,
                    marsSlide5,
                    marsSlide6,
                    marsSlide7
                ]}/>

            <Footer />
        </div >
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

export default connect(mapState, mapDispatch)(Mars);