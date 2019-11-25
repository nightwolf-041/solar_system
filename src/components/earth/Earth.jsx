import React from 'react'
import { connect } from 'react-redux'
import LazyLoad from 'react-lazy-load';
import classes from './earth.module.css'
import Specification from '../../components/UI/planetsSpecificate/Specification'
import SpecificationLtr from '../../components/UI/planetsSpecificate/SpecificationLtr'
import Backdrop from '../../components/UI/backdrop/Backdrop'
import * as uiActionCreators from '../../storeConfigure/actionCreators/uiActionCreators'
import BottomMenu from '../../components/UI/menu/bottomMenu/BottomMenu'
import Humanwithtelexcope from '../UI/humanwithtelexcope/Humanwithtelexcope'
import PlanetCounter from '../UI/planetCounter/PlanetCounter'
import Carousel from '../UI/carousel/Carousel'
import Footer from '../UI/footer/Footer'

import earthCircleImage from '../../assets/images/earth/earth-editted.png'
import telescopeIcon from '../../assets/images/icons/telescope-icon.png'
import SpecificationsIcon from '../../assets/images/icons/Specifications-icon.png'
import specificIcon from '../../assets/images/icons/specific-icon.png'
import menuIcon from '../../assets/images/icons/menu.png'

import earthSlide1 from '../../assets/images/earth/earth-slide1.png'
import earthSlide2 from '../../assets/images/earth/earth-slide2.png'
import earthSlide3 from '../../assets/images/earth/earth-slide3.png'
import earthSlide4 from '../../assets/images/earth/earth-slide4.png'
import earthSlide5 from '../../assets/images/earth/earth-slide5.png'
import earthSlide6 from '../../assets/images/earth/earth-slide6.png'
import earthSlide7 from '../../assets/images/earth/earth-slide7.png'



const Earth = (props) => {

    return (
        <div className={classes.earthMain}>

            {props.showMenu ? <Backdrop clicked={props.onHideMenu} /> : null}

            <BottomMenu />

            <div className={classes.earthHeadingBox}>
                <LazyLoad>
                    <img src={earthCircleImage} alt="earth" className={classes.earthCircle} />
                </LazyLoad>
                <div className={classes.earthHeaderDiv}>
                    <h1 className={classes.earthHeader}>زمین</h1>
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
                            زمین سومین سیارهٔ سامانهٔ خورشیدی است که در فاصلهٔ۱۴۹٬۶۰۰٬۰۰۰کیلومتری از ستارهٔ خورشید قرار دارد. از نظر واژه‌شناسی ایرانی، زم یکی از فرشتگان دین زرتشت بوده‌است که با پسوند «ین» زمین را به وجود آورده‌است.این سیاره چگال‌ترین (به دلیل دارا بودن منبع وسیع آهن و فلزات دیگر) و از نظر بزرگی پنجمین سیاره از هشت سیارهٔ سامانهٔ خورشیدی است. همچنین در میان چهار سیارهٔ سنگی گردان به دور خورشید (تیر، ناهید، زمین و مریخ) زمین بزرگترین آن‌ها است. گاهی از آن با نام‌های جهان و سیارهٔ آبی نیز یاد می‌شود.نام لاتین آن Terra است.در سامانهٔ خورشیدی، فاصلهٔ زمین تا خورشید بین فاصلهٔ زهره (یا ناهید) تا خورشید و فاصلهٔ مریخ (یا بهرام) تا خورشید است. زمین جزو سیارات داخلی سامانهٔ خورشیدی به‌شمار می‌آید. زمین ششمین جسم در سامانه خورشیدی بر پایهٔ جرم و حجم می‌باشد.

                            </Specification>

                    <SpecificationLtr title='نام و ریشه'
                        icon={SpecificationsIcon}>
                            زمین بمعنی معروف است و این مرکب است به لفظ «زم » که بمعنی سردی است و «یا نون » نسبت ، چنانکه در سیمین و زرین. چون جوهر ارض سرد است ، لهذا به این اسم مسمی گردید. گاهی نون حذف کرده زمی هم گویند. ارض و تراب و خاک و سطح کره ٔ خاکی. خاک. مخفف آن زمی ، پهلوی «زمیک » ، اوستا «زم » ... و زمین از همین زم است با پسوند «ین »و زمیک پهلوی نیز از همان ریشه است با پسوند «یک »، هندی باستان «جمه » (روی زمین )، افغانی «جمکه » (زمین )، استی «زخ » و «زنخه » ، سریکلی «زمس » ، شغنی «زمچ » ، بلوچی «زمیک » (مزارع ،بذرها)، گیلکی ، فریزندی ، یرنی و نطنزی... سمنانی ، سنگسری... لاسگردی و شهمیرزادی «زمین » ، سرخه یی «زم » خاک ، ارض ، تراب. زمی ارض.غبرا. خاک. 
                            </SpecificationLtr>

                    <Specification title='ویژگی ها'
                        icon={specificIcon}
                        afterColor='blue'>
                            درون زمین را مانند دیگر سیاره‌های خاکی می‌توان بسته به تفاوت‌های شیمیایی و فیزیکی (رئولوژی) که در آن دیده می‌شود، به چندین لایه تقسیم کرد. زمین بر خلاف دیگر سیاره‌های خاکی از دو هستهٔ بیرونی و درونی جدا از هم ساخته شده‌است. لایهٔ بیرونی زمین که پوسته نام دارد، جامد است و بیشتر از سیلیکات‌ها ساخته شده‌است.
                        <br />
                            درست در زیر پوسته، گوشتهٔ جامد، لایه‌ای با گرانروی بسیار بالا قرار دارد.
                            پوسته و گوشته با کمک لایه‌ای به نام ناپیوستگی موهوروویچیچ از هم جدا می‌شوند. ضخامت پوسته در نقاط گوناگون زمین تغییر می‌کند، این ضخامت به‌طور متوسط در زیر اقیانوس‌ها حدود ۶ کیلومتر است و در بخش‌های قاره‌ای به ۳۰ تا ۵۰ کیلومتر هم می‌رسد. مجموعهٔ پوسته و ناحیهٔ بالایی گوشته که سرد و سخت است روی هم لیتوسفر نام دارد. زمین‌ساخت بشقابی یا همان صفحه‌های تکتونیکی مربوط به لیتوسفر است. در زیر لیتوسفر، لایهٔ آستنوسفر قرار دارد. این لایه به نسبت از گرانروی کمتری برخوردار است به گونه‌ای که لیتوسفر بر روی آن روان است.
                            </Specification>

                </div>
            </div>

            <PlanetCounter
                distanceCounterValue='149,600000'
                gravityCounterValue='9/807'
                tempratureCounterValue='14/9'
                movementCounterValue='108000' />


            <Carousel
                gallery={[
                    earthSlide1,
                    earthSlide2,
                    earthSlide3,
                    earthSlide4,
                    earthSlide5,
                    earthSlide6,
                    earthSlide7
                ]} />

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

export default connect(mapState, mapDispatch)(Earth);