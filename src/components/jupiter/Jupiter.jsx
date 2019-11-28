import React from 'react'
import { connect } from 'react-redux'
import classes from './jupiter.module.css'
import Specification from '../../components/UI/planetsSpecificate/Specification'
import SpecificationLtr from '../../components/UI/planetsSpecificate/SpecificationLtr'
import Backdrop from '../../components/UI/backdrop/Backdrop'
import * as uiActionCreators from '../../storeConfigure/actionCreators/uiActionCreators'
import BottomMenu from '../../components/UI/menu/bottomMenu/BottomMenu'
import Humanwithtelexcope from '../UI/humanwithtelexcope/Humanwithtelexcope'
import PlanetCounter from '../UI/planetCounter/PlanetCounter'
import Carousel from '../UI/carousel/Carousel'
import Footer from '../UI/footer/Footer'

import jupiterCircleImage from '../../assets/images/jupiter/jupiter-circle.png'
import telescopeIcon from '../../assets/images/icons/telescope-icon.png'
import SpecificationsIcon from '../../assets/images/icons/Specifications-icon.png'
import specificIcon from '../../assets/images/icons/specific-icon.png'
import menuIcon from '../../assets/images/icons/menu.png'

import jupiterSlide1 from '../../assets/images/jupiter/jupiter-slide1.png'
import jupiterSlide2 from '../../assets/images/jupiter/jupiter-slide2.png'
import jupiterSlide3 from '../../assets/images/jupiter/jupiter-slide3.png'
import jupiterSlide4 from '../../assets/images/jupiter/jupiter-slide4.png'
import jupiterSlide5 from '../../assets/images/jupiter/jupiter-slide5.png'
import jupiterSlide6 from '../../assets/images/jupiter/jupiter-slide6.png'
import jupiterSlide7 from '../../assets/images/jupiter/jupiter-slide7.png'


const Jupiter = (props) => {

    return (
        <div className={classes.jupiterMain}>

            {props.showMenu ? <Backdrop clicked={props.onHideMenu} /> : null}

            <BottomMenu />

            <div className={classes.jupiterHeadingBox}>
                    <img src={jupiterCircleImage} alt="jupiter" className={classes.jupiterCircle} />
                <div className={classes.jupiterHeaderDiv}>
                    <h1 className={classes.jupiterHeader}>مشتری</h1>
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
                            مُشتَری بزرگ‌ترین سیاره در سامانهٔ خورشیدی است. این سیاره غول گازی با جرم یک هزارم خورشید است، ولی جرمی دو و نیم برابر تمامی دیگر سیاره‌های سامانهٔ خورشیدی دارد و دومین جسم در سامانهٔ خورشیدی بر پایهٔ جرم و حجم است. از نظر دوری از خورشید، مشتری پنجمین سیاره پس از تیر، ناهید، زمین و بهرام است.
                            <br />
                            جرم مشتری ۲٫۵ بار از مجموع جرم دیگر سیاره‌های سامانه خورشیدی بیشتر است. جرم مشتری ۳۱۸ بار بیشتر از جرم زمین است. قطر آن ۱۱ برابر قطر زمین است. مشتری می‌تواند ۱۳۰۰ زمین را درخود جای دهد. میانگین دوری آن از خورشید در حدود ۷۷۸ میلیون و ۵۰۰ هزار کیلومتر است یعنی بیشتر از ۵ برابر دوری زمین از خورشید. ستاره‌شناسان با تلسکوپ‌های برپاشده در زمین و ماهوارههائی که در مدار زمین می‌گردند به بررسی مشتری می‌پردازند. ایالات متحده تا کنون ۶ فضاپیمای بدون سرنشین را به مشتری فرستاده‌است.

                    </Specification>

                    <SpecificationLtr title='نام و ریشه'
                        icon={SpecificationsIcon}>
                            مشتری ستاره ای که سعد اکبر است. ستاره ای از سیارات فلک ششم که آن رابه فارسی برجیس نامند. نام ستاره ای که بر فلک ششم است. اهل تنجیم آن را سعد اکبر دانند و آن را قاضی فلک نیز گویند، به فارسی برجیس و به هندی برهسپت و خانه ٔ اوقوس و حوت و شرف او در سرطان. خانه ٔ او حوت و قوس است و بیت الشرف او در سرطان است.
                            <br />
                            سیاره ٔ میان زحل و مریخ. خطیب فلک. قاضی فلک. هرمزد. اورمزد. زاوش. برجیس. هرمز. احور. قاضی چرخ. خانه و بیت او در برج قوس و حوت است. نام ستاره ٔ برجیس که آن را ستاره ٔ برووخسپی و زاوش و زواش و زوش و فروزد و مژد و آورسر و هورمز و هورمزد و سعد اکبر و قاضی فلک نیزگویند.
                    </SpecificationLtr>

                    <Specification title='ویژگی ها'
                        icon={specificIcon}
                        afterColor='blue'>
                            جرم مشتری به تنهایی ۲٫۵ برابر جرم تمام سیاره‌های دیگر در سامانه خورشیدی است. نسبت جرم این سیاره به اندازه‌ای است که مرکز سنگینی سراسری آن با خورشید بالاتر از سطح خورشید، در ۱٫۰۶۸ برابر شعاع خورشید (فاصله از مرکز خورشید) قرار می‌گیرد. حجم مشتری ۱۳۲۱ برابر حجم زمین و جرم آن تنها ۳۱۸٫۵ برابر زمین است. این نسبت، زمین را به‌طور قابل توجهی متراکم تر از مشتری نشان می‌دهد. شعاع مشتری حدود یک دهم شعاع خورشید است و جرم آن ۰٫۰۰۱ برابر جرم خورشید است، بنابراین چگالی این دو با هم مشابه است.
                            <br />
                            مشتری از هر سیاره دیگری در سامانه خورشیدی سنگین‌تر است. جرم آن ۳۱۸ بار بیشتر از زمین است؛ ولی با این جرم زیاد، کم و بیش دارای چگالی کمی است. میانگین چگالی آن ۱٫۳ گرم در سانتی‌متر مکعب است که اندکی از چگالی آب بیشتر است. چگالی مشتری در حدود یک چهارم چگالی زمین است. زیرا بیشتر سیاره از عناصر سبک هیدروژن و هلیوم ساخته شده‌است.
<br />
                            احتمالاً هسته مشتری نه چندان سفت، نسبتاً رقیق و خیلی بزرگ است.
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
                    jupiterSlide1,
                    jupiterSlide2,
                    jupiterSlide3,
                    jupiterSlide4,
                    jupiterSlide5,
                    jupiterSlide6,
                    jupiterSlide7
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

export default connect(mapState, mapDispatch)(Jupiter);