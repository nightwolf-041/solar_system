import React from 'react'
import { connect } from 'react-redux'
import classes from './saturn.module.css'
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

import saturnCircleImage from '../../assets/images/saturn/saturn-circle.png'
import telescopeIcon from '../../assets/images/icons/telescope-icon.png'
import SpecificationsIcon from '../../assets/images/icons/Specifications-icon.png'
import specificIcon from '../../assets/images/icons/specific-icon.png'
import menuIcon from '../../assets/images/icons/menu.png'

import saturnSlide1 from '../../assets/images/saturn/saturn-slide1.png'
import saturnSlide2 from '../../assets/images/saturn/saturn-slide2.png'
import saturnSlide3 from '../../assets/images/saturn/saturn-slide3.png'
import saturnSlide4 from '../../assets/images/saturn/saturn-slide4.png'
import saturnSlide5 from '../../assets/images/saturn/saturn-slide5.png'
import saturnSlide6 from '../../assets/images/saturn/saturn-slide6.png'
import saturnSlide7 from '../../assets/images/saturn/saturn-slide7.png'


const Saturn = (props) => {

    return (
        <div className={classes.saturnMain}>

            {props.showMenu ? <Backdrop clicked={props.onHideMenu} /> : null}

            <BottomMenu />

            <div className={classes.saturnHeadingBox}>
                <LazyLoad>
                    <img src={saturnCircleImage} alt="saturn" className={classes.saturnCircle} />
                </LazyLoad>
                <div className={classes.saturnHeaderDiv}>
                    <h1 className={classes.saturnHeader}>زحل</h1>
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
                            زُحَل یا کِیوان، پس از مشتری، دومین سیارهٔ بزرگ منظومه شمسی و ششمین سیاره نزدیک به خورشید است. یک گلوله گازی غول‌پیکر است که با وجود حجم زیادش تنها ۹۵ برابر زمین جرم دارد.
                            <br />
                            چگالی این سیاره حدود یک‌هشتم زمین و کمتر از آب است. یک روز کامل در کیوان برابر ۱۰ ساعت و ۳۹ دقیقه در زمین و یک سال آن برابر ۲۹٫۵ برابر سال زمین است. از آنجایی که مدار استوایی زحل تقریباً همانند زمین در ۲۷ درجه‌است، تغییرات زاویه سیاره نسبت به خورشید شبیه به زمین است و در این سیاره نیز همان چهار فصل مشاهده می‌شود. جرم سیاره زحل همانند مشتری از گاز است که بیشتر آن را هیدروژن تشکیل می‌دهد. میزان اندکی هلیوم و متان در رده‌های بعدی گازهای تشکیل‌دهندهٔ سیاره قرار دارند.
                    </Specification>

                    <SpecificationLtr title='نام و ریشه'
                        icon={SpecificationsIcon}>
                            زحل مانده شدن || دور گشتن از جای خود. کلمه ٔزحل در اصل بمعنی دور گشتن و دوری گزیدن است. یکسو شدن از جایگاه خود. در حدیث ابوموسی آمده : «فلما اقیمت الصلوة، زحل و قال ما اتقدم رجلاً من اهل بدر»؛ یعنی هنگامی که نماز برپا گشت ، از جایی که مقام امام است بیکسوی شد و گفت : بر مردی که از اهل بدر است تقدم نخواهم جست ، و از امامت جماعت دوری گزید. زمخشری آرد: عبداﷲبن مسعود بنزد ابو موسی آمد و بگفتگو پرداخت و چون وقت نماز رسید، ابوموسی ، ابن مسعود را مقدم داشت و خود یکسوی شد. زحل و زحک بیک معنی است و هر دو، معنی دوری و یکسوی شدن میدهند.
                    </SpecificationLtr>

                    <Specification title='ویزگی ها'
                        icon={specificIcon}
                        afterColor='blue'>
                            مهم ترین ویژگی منحصر به فرد زحل حلقه ها یا کمربند های آن هستند.
                            <br />
                            حلقه‌ها یا کمربندهای زحل در فاصله ۱۱۲۰۰ کیلومتری آن جای گرفته‌اند. حلقه‌های زحل از تکه‌های یخ و همچنین تکه‌های سنگ و غبار تشکیل شده‌اند برخی به اندازه یک غبار ریز و برخی به اندازه یک خانه. حلقه‌های زحل پهن هستند ولی بسیار تخت و نازک. پهنای آن‌ها ۲۸۰ هزار کیلومتر است اما کلفتی آن‌ها تنها یک کیلومتر است؛ بنابراین هنگامیکه از پهلو به زحل بنگریم حلقه‌ها تیغه باریکی می‌شوند و دیده نمی‌شوند.
                            <br />
                            پهنای برخی از حلقه‌های زحل به اندازه فاصله زمین تا ماه می‌باشد. مشتری و نپتون و اورانوس هم حلقه دارند اما حلقه زحل از همه بهتر دیده می‌شود. به باور دانشمندان دلیل درخشانتر بودن حلقه‌های زحل تازه‌تر بودن و جوان‌تر بودن آن هاست.

                    </Specification>

                </div>
            </div>

            <PlanetCounter
                distanceType='فاصله از خورشید'
                distanceUnit='km'
                distanceCounterValue='1,399,900000'
                gravityCounterValue='10/44'
                tempratureCounterValue='-180'
                movementCounterValue='9/87' />


                <Carousel 
                gallery = {[
                    saturnSlide1,
                    saturnSlide2,
                    saturnSlide3,
                    saturnSlide4,
                    saturnSlide5,
                    saturnSlide6,
                    saturnSlide7
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

export default connect(mapState, mapDispatch)(Saturn);