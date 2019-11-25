import React from 'react'
import classes from './footer.module.css'

import telegramIcon from '../../../assets/images/icons/telegram-icon.png'
import instagremIcon from '../../../assets/images/icons/instagram-icon.png'
import emailIcon from '../../../assets/images/icons/email-icon.png'
import nasaLogo from '../../../assets/images/icons/NASA-logo.png'
import spaceRlogo from '../../../assets/images/icons/spaceR-logo.png'


const Footer = () => {
    return (
        <div className={classes.footerMain}>
            <div className={classes.footerHeader}>
                <h2 className={classes.footerHeaderTitle}>موسسه تحقیقاتی space-R</h2>
                <p className={classes.footerHeaderDesc}>
                    بزرگترین تیم اطلاعات فضایی ایران
                </p>
                <p className={classes.footerHeaderSubdesc}>
                    تاسیس : 1389
                </p>
            </div>

            <div className={classes.footerContainerBox}>
                <div className={classes.footerContain}>
                <img src={nasaLogo} alt="nasaLogo" className={classes.footerNasaLogo} />
                    <h5 className={classes.footerContainTop}>
                        عضو رسمی تیم تحقیقات NASA
                </h5>
                    <h5 className={classes.footerContainMiddle}>
                        دارای مجوز از وزارت علوم ایران
                </h5>
                    <h5 className={classes.footerContainBottom}>
                        دارای لوح تقدیر از LPL امریکا
                </h5>
                </div>

                <div className={classes.footerContactUs}>
                    <img src={telegramIcon} alt="telegram"
                    className={classes.footerContactUsItems} />
                    <img src={instagremIcon} alt="instagram"
                    className={classes.footerContactUsItems} />
                    <img src={emailIcon} alt="email"
                    className={classes.footerContactUsItems} />
                </div>

                <div className={classes.footerLogo}>
                <img src={spaceRlogo} alt="spaceRLogo" className={classes.footerSpaceRLogo} />
                </div>

            </div>
        </div>
    );
}

export default Footer;