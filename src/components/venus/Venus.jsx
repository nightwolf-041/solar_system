import React from 'react'
import { connect } from 'react-redux'
import classes from './venus.module.css'
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

import venusCircleImage from '../../assets/images/venus/venus-circle.png'
import telescopeIcon from '../../assets/images/icons/telescope-icon.png'
import SpecificationsIcon from '../../assets/images/icons/Specifications-icon.png'
import specificIcon from '../../assets/images/icons/specific-icon.png'
import menuIcon from '../../assets/images/icons/menu.png'

import venusSlide1 from '../../assets/images/venus/venus-slide1.png'
import venusSlide2 from '../../assets/images/venus/venus-slide2.png'
import venusSlide3 from '../../assets/images/venus/venus-slide3.png'
import venusSlide4 from '../../assets/images/venus/venus-slide4.png'
import venusSlide5 from '../../assets/images/venus/venus-slide5.png'
import venusSlide6 from '../../assets/images/venus/venus-slide6.png'
import venusSlide7 from '../../assets/images/venus/venus-slide7.png'


const Venus = (props) => {

    return (
        <div className={classes.venusMain}>

            {props.showMenu ? <Backdrop clicked={props.onHideMenu} /> : null}

            <BottomMenu />

            <div className={classes.venusHeadingBox}>
                <LazyLoad>
                    <img src={venusCircleImage} alt="venus" className={classes.venusCircle} />
                </LazyLoad>
                <div className={classes.venusHeaderDiv}>
                    <h1 className={classes.venusHeader}>زهره</h1>
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
                            دومین سیاره زمین‌سان منظومهٔ شمسی است که مدار آن در میان مدارهای زمین و عطارد قرار گرفته‌است. سیارهٔ زهره از نظر مداری، نزدیک‌ترین فاصله به زمین را دارد.زهره بعد از ماه، درخشان‌ترین جرم آسمانی طبیعی است که به هنگام شب در آسمان زمین دیده می‌شود و قدر ظاهری آن به ۴٫۶- می‌رسد.
<br />
                            سیارهٔ زهره، بدون ماه است و در مدار تقریباً دایره‌واری به‌دور خورشید می‌گردد. این سیاره از بسیاری دیدگاه‌ها ازجمله اندازه، جرم، گرانش و ترکیبات ساختاری به زمین همانندی دارد و به خاطر همین نزدیکی‌ها آن را سیاره «خواهر زمین» نیز خوانده‌اند. زهره از نظر جرم و حجم، هفتمین جسم بزرگ و پرجرم در منظومهٔ شمسی است.
                            <br />
                            زهره گرم‌ترین سیاره در منظومهٔ شمسی است. این سیاره دارای هواکره است. هواکره ضخیم و غلیظ آن موجب می‌شود که دیدن سطح آن با چشم غیرمسلح، دشوار باشد.
                    </Specification>

                    <SpecificationLtr title='نام و ریشه'
                        icon={SpecificationsIcon}>
                            زهره [یا ناهید] در ادبیات (فارسی) اشاره به سیاره زهره نماد معشوق و عشق بازی یا رامشگری و خنیاگری است. گاه نیز زهره در کاربرد طالع بینی آن بمعنی سعد اصغر است.
                            <br />
                            زهره، رامشگر آسمانهاست، زهره و مریخ در عربی معادل ناهید و بهرام در فارسی و ونوس و آدونیس یونانی، بر اساس متون افسانه نام دو عاشق و معشوقی زمینی است که به آسمان رفته‌اند.
                            <br />
                            زهره سیاره‌ای خوش‌یمن و خوش‌نما بوده و «فرهنگ نظام» آن را این‌گونه معرفی نموده است: «... زهره نام ستارهٔ سوم از سیاره‌ای است که نام فارسی‌اش ناهید است. چون این ستاره در علم نجوم مربی مطربان است بازیچهٔ شاعران فارسی شده است»
                    </SpecificationLtr>

                    <Specification title='ویژگی ها'
                        icon={specificIcon}
                        afterColor='blue'>
                            با در دست نبودن داده‌های لرزش‌سنجی، گشتاور لختی و جزئیات زمین‌شیمی از ساختار درونی سیاره ناهید، آگاهی کمی از ساختار داخلی و ژئوشیمی این سیاره در دست است.دو دیدگاه دربارهٔ ساختار درونی سیارهٔ زهره وجود دارد. به نظر می‌رسد به خاطر نزدیکی اندازه، جرم، چگالی زهره و زمین، لایه‌های درونی زهره مانند زمین، از پوسته، گوشتهٔ احتمالاً جامد و هستهٔ مذاب تشکیل شده باشدو هستهٔ این سیاره نیز مانند زمین ترکیبی از آهن و نیکل باشد.
                            <br />
                            بر پایه یافته‌های ونرا-۴ در ۱۹۶۷ (میلادی) سیاره زهره دارای میدان مغناطیسی بسیار ضعیفی است.به نظر می‌رسد به دلیل چرخش بسیار کند زهره، هسته مذاب آن (خاستگاه پیدایش میدان مغناطیسی) حرکت زیادی نداشته و میدان مغناطیسی آن ضعیف باشد. اما گرمایی که در میلیون‌ها سال در درون سیاره حبس شده، به شکل ناگهانی و مانند فعالیت‌های آتشفشانی بسیار بزرگ آزاد شده و شکل سطحی سیاره را دگرگون می‌کند.
                    </Specification>

                </div>
            </div>

            <PlanetCounter
                distanceType='فاصله از خورشید'
                distanceUnit='km'
                distanceCounterValue='108,200000'
                gravityCounterValue='8/87'
                tempratureCounterValue='470'
                movementCounterValue='35' />


                <Carousel 
                gallery = {[
                    venusSlide1,
                    venusSlide2,
                    venusSlide3,
                    venusSlide4,
                    venusSlide5,
                    venusSlide6,
                    venusSlide7
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

export default connect(mapState, mapDispatch)(Venus);