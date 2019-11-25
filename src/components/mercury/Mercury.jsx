import React from 'react'
import { connect } from 'react-redux'
import classes from './mercury.module.css'
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

import mercuryCircleImage from '../../assets/images/mercury/mercury-circle.png'
import telescopeIcon from '../../assets/images/icons/telescope-icon.png'
import SpecificationsIcon from '../../assets/images/icons/Specifications-icon.png'
import specificIcon from '../../assets/images/icons/specific-icon.png'
import menuIcon from '../../assets/images/icons/menu.png'

import mercurySlide1 from '../../assets/images/mercury/mercury-slide1.png'
import mercurySlide2 from '../../assets/images/mercury/mercury-slide2.png'
import mercurySlide3 from '../../assets/images/mercury/mercury-slide3.png'
import mercurySlide4 from '../../assets/images/mercury/mercury-slide4.png'
import mercurySlide5 from '../../assets/images/mercury/mercury-slide5.png'
import mercurySlide6 from '../../assets/images/mercury/mercury-slide6.png'
import mercurySlide7 from '../../assets/images/mercury/mercury-slide7.png'


const Mercury = (props) => {

    return (
        <div className={classes.mercuryMain}>

            {props.showMenu ? <Backdrop clicked={props.onHideMenu} /> : null}

            <BottomMenu />

            <div className={classes.mercuryHeadingBox}>
                <LazyLoad>
                    <img src={mercuryCircleImage} alt="mercury" className={classes.mercuryCircle} />
                </LazyLoad>
                <div className={classes.mercuryHeaderDiv}>
                    <h1 className={classes.mercuryHeader}>عطارد</h1>
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
                            عطارد یا تیر کوچک‌ترین و نزدیک‌ترین سیاره به خورشید در منظومهٔ شمسی است. تلفظ درست نام عربی آن عُطارِد است اما در تداول عامه فارسی‌زبانان عَطارُد رایج‌تر است.سطح رو به خورشیدِ سیارهٔ عطارد، به‌دلیل نزدیکی به خورشید، بسیار داغ است و رویهٔ پشت به خورشید آن نیز بسیار سرد است.
<br />
                            سیارهٔ عطارد کوچک‌ترین سیارهٔ منظومهٔ شمسی است و قمری ندارد. عطارد از نظر میدان جاذبه، تقریباً قفل شده‌است، به این معنا که حرکت وضعی آن در منظومهٔ شمسی بی‌همتاست. عطارد، به ازای هر دو باری که به دور خورشید می‌گردد، دقیقاً سه بار به دور خود می‌چرخد (نسبت حرکت وضعی به حرکت انتقالی ۳ به ۲)؛ با در نظرگرفتن سرعت حرکت انتقالی سیاره عطارد، و جهت و سرعت حرکت وضعی نسبت به آن، یک روز کامل در سیاره عطارد حدود ۱۱۶ روز زمینی (۲۷۸۴ساعت) طول می‌کشد.
                    </Specification>

                    <SpecificationLtr title='نام و ریشه'
                        icon={SpecificationsIcon}>
                            عُطارِد که در خوانش فارسی عَطارُد گفته می‌شود، واژه‌ای عربی برگرفته از «عَطْرَدَ» است. 
                            <br />
                            عُطارِد در فرهنگ لغت لِسانُ الْعَرَبِ به معنای «اَلْمُتَتابِعُ فی سَیْـرِهِ» آمده است؛ یعنی: پی‌درپی آینده. این نامگذاری اشاره به سرعت چرخش آن به دور خورشید است؛ زیرا نزدیک‌ترین سیاره به خورشید است. نام لاتینی مِرْکوری «Mercury» نیز نزدیکیِ معنا به آن دارد؛ زیرا مِرکوری ایزد پیام‌آور خدایان و دارای بال‌های بزرگی است. نام عطارد یادآور سرعت دَوَران آن پیرامون خورشید است.
                            برگرفته از کتاب دانشنامۀ نام‌ها و واژه‌ها. انتشارات مدرسه. عادل اشکبوس
                    </SpecificationLtr>

                    <Specification title='ویژگی ها'
                        icon={specificIcon}
                        afterColor='blue'>
                            سیاره عطارد با فاصلهٔ ۵۷ میلیون و ۹۲۴ هزار کیلومتری از خورشید، نزدیکترین سیاره منظومه شمسی به خورشید است و کم‌ترین مسافتی که با زمین پیدا می‌کند، به ۸۰ میلیون کیلومتر می‌رسد. به خاطر نزدیکی این سیاره به خورشید اگر در طرف رو به خورشید آن (بخشی که روز است) قرار بگیرید به راحتی در دمای ۴۶۵درجه سانتیگراد پخته خواهید شد و به علت حرکتی وضعی آرامش اگر در طرف شب آن قرار بگیرید آن قدر سرد خواهد شد که در دمای ۱۴۸- درجه سانتیگراد به راحتی مرگ را بر اثر یخ بستن تجربه می‌کنید.
                            <br />
                            حفره‌های کوچک ویا بزرگ بسیاری در سطح سیارهٔ عطارد دیده می‌شود که حکایت از برخورد شهاب‌سنگ‌های کوچک و بزرگ دارد البته قطر برخی از دهانه‌ها به ده‌ها کیلومتر می‌رسد. برخی از این دهانه‌ها محل خروج مواد مذاب است که امروزه با سنگهای مذاب پر شده‌اند و مانند کوه‌های آتشفشانی هستند. سطح عطارد بیشتر خاکستری‌رنگ است و به خاطر نوع دهانه‌های آتشفشانی و آبگیرها بسیار شبیه کره ماه است.
                    </Specification>

                </div>
            </div>

            <PlanetCounter
                distanceType='فاصله از خورشید'
                distanceUnit='km'
                distanceCounterValue='57,910000'
                gravityCounterValue='3/7'
                tempratureCounterValue='462'
                movementCounterValue='48' />


                <Carousel 
                gallery = {[
                    mercurySlide1,
                    mercurySlide2,
                    mercurySlide3,
                    mercurySlide4,
                    mercurySlide5,
                    mercurySlide6,
                    mercurySlide7
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

export default connect(mapState, mapDispatch)(Mercury);