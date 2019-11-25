import React from 'react'
import { connect } from 'react-redux'
import classes from './uranus.module.css'
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

import uranusCircleImage from '../../assets/images/uranus/uranus-circle.png'
import telescopeIcon from '../../assets/images/icons/telescope-icon.png'
import SpecificationsIcon from '../../assets/images/icons/Specifications-icon.png'
import specificIcon from '../../assets/images/icons/specific-icon.png'
import menuIcon from '../../assets/images/icons/menu.png'

import uranusSlide1 from '../../assets/images/uranus/uranus-slide1.png'
import uranusSlide2 from '../../assets/images/uranus/uranus-slide2.png'
import uranusSlide3 from '../../assets/images/uranus/uranus-slide3.png'
import uranusSlide4 from '../../assets/images/uranus/uranus-slide4.png'
import uranusSlide5 from '../../assets/images/uranus/uranus-slide5.png'
import uranusSlide6 from '../../assets/images/uranus/uranus-slide6.png'
import uranusSlide7 from '../../assets/images/uranus/uranus-slide7.png'


const Uranus = (props) => {

    return (
        <div className={classes.uranusMain}>

            {props.showMenu ? <Backdrop clicked={props.onHideMenu} /> : null}

            <BottomMenu />

            <div className={classes.uranusHeadingBox}>
                <LazyLoad>
                    <img src={uranusCircleImage} alt="uranus" className={classes.uranusCircle} />
                </LazyLoad>
                <div className={classes.uranusHeaderDiv}>
                    <h1 className={classes.uranusHeader}>اورانوس</h1>
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
                             هفتمین سیاره از نظر نزدیکی به خورشید و سومین سیاره از نظر اندازه و پنجمین سیاره از نظر جرم در سامانهٔ خورشیدی است. اورانوس هر ۸۴ سال و ۷ روز یک بار به دور خورشید می‌گردد.
                             <br />
                             همچنین هر ۱۰ ساعت و ۴۸ دقیقه یک دور به دور خودش می‌چرخد. اورانوس دارای بیش از ۲۷ ماه است بزرگترین آنها به نام‌های میراندا، آریل، آمبریل، تیتانیا و ابرون است. این سیاره را ویلیام هرشل در سال ۱۷۸۱ میلادی کشف کرد.
<br />
                            اورانوس یکی از سیارات هشتگانه منظومه شمسی که از لحاظ بعد فاصله اش نسبت به خورشید در ردیف هفتم پس از زحل قرار گرفته‌است. فاصله متوسط این سیاره تا خورشید۲٬۸۶۹٬۶۰۰٬۰۰۰ کیلومتر و 4 بار از کره زمین بزرگ‌تر است. اورانوس ۲۷ ماه طبیعی دارد. این سیاره با چشم غیرمسلح دیده می‌شود. محور حرکت وضعی این سیاره کاملاً با مدار حرکت انتقالیش منطبق است.
                    </Specification>

                    <SpecificationLtr title='نام و ریشه'
                        icon={SpecificationsIcon}>
                            اورانوس در دین یونان خدای آسمان (رب النوع ) و اول فرمانروای جهان ، پسر گایا و پدر تیتانها و سیکلوپها.وی چون از دیدن هیکل کریه فرزندان خود بیزار بود آنها را در تارتاروس محبوس کرد. گایا کرونوس را برانگیخت تا او را معزول کرده و بجایش نشست. از خونش که بزمین ریخت عفریت ها و ارینوئس برخاستند و از آنچه بدریا ریخت آفرودیته بوجود آمد.
                    </SpecificationLtr>

                    <Specification title='ویژگی ها'
                        icon={specificIcon}
                        afterColor='blue'>
                            جرم این سیاره برابر (۰٫۰۰۱۳ ± ۸٫۶۸۱۰)‎×۱۰۲۵ kg و ۱۴٫۵۳۶ برابر زمین است و چگالی آن ۱٫۲۵ برآورد می‌شود در نتیجه احتمال می‌رود از جو بسیار ضخیم، گوشته‌ای مایع و هسته‌ای جامد و کوچک تشکیل شده باشد. شتاب گرانشی آن نیز ۹۰ درصد شتاب گرانشی زمین تخمین زده شده‌است. دمای بخش مایع آن ۲۳۰۰ درجه سانتیگراد و هسته آن ۷۰۰۰ درجه سانتیگراد است.
                            <br />
                            تنها ناهید کجی محور بیشتری از اورانوس و برابر ۱۷۷ درجه دارد. اما علت این کجی احتمالاً برخورد جسمی به ابعاد زمین به این سیاره و در اوایل دوران زندگی‌اش بوده‌است. البته کاندیدهای دیگری هم مطرح هستند مانند برخورد یک دسته بزرگ از دنباله‌دارها در اوایل تشکیلش که این خود وجود یک اقیانوس بزرگ داخلی آن را نیز توجیه می‌کند.
                    </Specification>

                </div>
            </div>

            <PlanetCounter
                distanceType='فاصله از خورشید'
                distanceUnit='km'
                distanceCounterValue='2,869,600000'
                gravityCounterValue='8/69'
                tempratureCounterValue='-214'
                movementCounterValue='2/59' />


                <Carousel 
                gallery = {[
                    uranusSlide1,
                    uranusSlide2,
                    uranusSlide3,
                    uranusSlide4,
                    uranusSlide5,
                    uranusSlide6,
                    uranusSlide7
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

export default connect(mapState, mapDispatch)(Uranus);