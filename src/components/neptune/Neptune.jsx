import React from 'react'
import { connect } from 'react-redux'
import classes from './neptune.module.css'
import Specification from '../../components/UI/planetsSpecificate/Specification'
import SpecificationLtr from '../../components/UI/planetsSpecificate/SpecificationLtr'
import Backdrop from '../../components/UI/backdrop/Backdrop'
import * as uiActionCreators from '../../storeConfigure/actionCreators/uiActionCreators'
import BottomMenu from '../../components/UI/menu/bottomMenu/BottomMenu'
import Humanwithtelexcope from '../UI/humanwithtelexcope/Humanwithtelexcope'
import PlanetCounter from '../UI/planetCounter/PlanetCounter'
import Carousel from '../UI/carousel/Carousel'
import Footer from '../UI/footer/Footer'

import neptuneCircleImage from '../../assets/images/neptune/neptune-circle.png'
import telescopeIcon from '../../assets/images/icons/telescope-icon.png'
import SpecificationsIcon from '../../assets/images/icons/Specifications-icon.png'
import specificIcon from '../../assets/images/icons/specific-icon.png'
import menuIcon from '../../assets/images/icons/menu.png'

import neptuneSlide1 from '../../assets/images/neptune/neptune-slide1.png'
import neptuneSlide2 from '../../assets/images/neptune/neptune-slide2.png'
import neptuneSlide3 from '../../assets/images/neptune/neptune-slide3.png'
import neptuneSlide4 from '../../assets/images/neptune/neptune-slide4.png'
import neptuneSlide5 from '../../assets/images/neptune/neptune-slide5.png'
import neptuneSlide6 from '../../assets/images/neptune/neptune-slide6.png'
import neptuneSlide7 from '../../assets/images/neptune/neptune-slide7.png'


const Neptune = (props) => {

    return (
        <div className={classes.neptuneMain}>

            {props.showMenu ? <Backdrop clicked={props.onHideMenu} /> : null}

            <BottomMenu />

            <div className={classes.neptuneHeadingBox}>
                    <img src={neptuneCircleImage} alt="neptune" className={classes.neptuneCircle} />
                <div className={classes.neptuneHeaderDiv}>
                    <h1 className={classes.neptuneHeader}>نپتون</h1>
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
                            نپتون هشتمین و آخرین سیارهٔ سامانه خورشیدی است. این نام به عنوان خدای دریا و همزاد اورانوس نامگذاری شده‌است. نپتون چهارمین سیاره از نظر اندازه و سومین سیاره از نظر جرم است. نپتون، چهارمین جسم در سامانه خورشیدی بر پایهٔ جرم و حجم می‌باشد.
<br />
                            ۷۴درصد هیدروژن، ۲۵درصد هلیم و حدود ۱ درصد متان جو نپتون را تشکیل می‌دهند. به دلیل وجود متان در جو سیاره که به شدت نور قرمز را جذب می‌کند، نپتون این رنگ آبی دلنشین را به خود گرفته‌است. جوی از هیدروژن، هلیم و متان، گوشته‌ای از آب یخ زده، متان و آمونیاک و هسته‌ای از سنگ سیلیس ساختار نپتون را شکل می‌دهد. پس از کشف هم اطلاعات بسیار کمی دربارهٔ نپتون موجود بود تا این که در ۲۵ اوت سال ۱۹۸۹ وویجر ۲ از ۵ هزار کیلومتری این غول گازی گذشت و اطلاعات بسیار زیادی دربارهٔ این سیاره به دست آورد.
                    </Specification>

                    <SpecificationLtr title='نام و ریشه'
                        icon={SpecificationsIcon}>
                            نپتون در اساطیر روم ، نام الهه ٔ دریاهاست.او را با نیزه ٔ سه شاخه ای تصویر کرده اند کنایه از این نکته که هرکه بر دریاها تسلط یافت بر عالم مسلط است. وی پسر ساتورن و برادر ژوپیتر و پلوتن است ، یونانیان او را پوزئیدون نامیده اند.
                            <br />
                            مؤلف فرهنگ اساطیر یونان و روم آرد: «نپتون خدای رومی است که با پوزئیدون تطبیق شده ، نام او که اشتقاق و ریشه ٔ مبهمی دارد ظاهراً از لغات بسیار قدیم زبان رومی بوده ، وی خدای آب [ بوده است ] و قبل از آنکه با پوزئیدون تطبیق شود داستانی مخصوص به خود نداشته.
                    </SpecificationLtr>

                    <Specification title='ویژگی ها'
                        icon={specificIcon}
                        afterColor='blue'>
                            معمولاً همهٔ انسان‌های روی زمین این سیاره را به رنگ آبی می‌شناسند. این رنگ را گاز متان حاضر در جو نپتون که رنگ سرخ را جذب می‌کند و آبی‌حاصل از طیف نوری خورشید که بازتابیده می‌شود پدید می‌آید.
<br />
                            نپتون از نظر ساختاری بسیار شبیه به سایر سیارات گازی به خصوص اورانوس است. تفاوتی که در ساختار سیاره‌هایی مانند اورانوس و نپتون دیده می‌شود، به سبب عدم حضور هیدروژن فلزی مایع است که در عوض آن یک ساختار متراکم آب مانندی در اطراف هسته وجود دارد. لایهٔ بیرونی‌تر نپتون متشکل از هیدروژن ملکولی مایع و هلیوم مایع است.
                            <br />
                            اتمسفر و جو نپتون آبی رنگ است و درصد بازتابش بالائی دارد که حاکی از وجود یک جو غلیظ است. برابر با نتیجهٔ بررسی‌ها حضور مقداری متان نیز در این سیاره تأیید شده‌است. در کل، ترکیبات جو این سیاره به مانند سایر سیارات غول پیکر گازی شامل ۸۰ تا ۸۵ درصد هیدروژن و ۱۵ تا ۱۹ درصد هلیوم است.
                    </Specification>

                </div>
            </div>

            <PlanetCounter
                distanceType='فاصله از خورشید'
                distanceUnit='km'
                distanceCounterValue='4,496,500000'
                gravityCounterValue='11/15'
                tempratureCounterValue='-220'
                movementCounterValue='5/47' />


                <Carousel 
                gallery = {[
                    neptuneSlide1,
                    neptuneSlide2,
                    neptuneSlide3,
                    neptuneSlide4,
                    neptuneSlide5,
                    neptuneSlide6,
                    neptuneSlide7
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

export default connect(mapState, mapDispatch)(Neptune);