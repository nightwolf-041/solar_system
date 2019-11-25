import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import anime from 'animejs'
import classes from './planetCounter.module.css'
import background from '../../../assets/images/backgrounds/background.jpg'

import distanceIcon from '../../../assets/images/icons/distance-icon.png'
import tempratureIcon from '../../../assets/images/icons/temperature-icon.png'
import gravityIcon from '../../../assets/images/icons/gravity-icon.png'
import movementIcon from '../../../assets/images/icons/movement-icon.png'



const PlanetCounter = (props) => {

    let distanceCounter = useRef()
    let gravityCounter = useRef()
    let tempratureCounter = useRef()
    let movementCounter = useRef()

    const [ref, inView] = useInView({
        threshold: 0,
    })

    if (inView) {

        let distanceCounterValue = props.distanceCounterValue
        let gravityCounterValue = props.gravityCounterValue
        let tempratureCounterValue = props.tempratureCounterValue
        let movementCounterValue = props.movementCounterValue

        anime({
            targets: distanceCounter.current,
            innerHTML: distanceCounterValue,
            easing: 'linear',
            round: 1
        });
        anime({
            targets: gravityCounter.current,
            innerHTML: gravityCounterValue,
            easing: 'linear',
            round: 1
        });
        anime({
            targets: tempratureCounter.current,
            innerHTML: tempratureCounterValue,
            easing: 'linear',
            round: 1
        });
        anime({
            targets: movementCounter.current,
            innerHTML: movementCounterValue,
            easing: 'linear',
            round: 1
        });

    } else {
        anime({
            targets: distanceCounter.current,
            innerHTML: 0,
            easing: 'linear',
            round: 20
        });
        anime({
            targets: gravityCounter.current,
            innerHTML: 0,
            easing: 'linear',
            round: 10
        });
        anime({
            targets: tempratureCounter.current,
            innerHTML: 0,
            easing: 'linear',
            round: 10
        });
        anime({
            targets: movementCounter.current,
            innerHTML: 0,
            easing: 'linear',
            round: 10
        });
    }


    return (
        <div className={classes.planetCounterBox} id="x">
            <div className={classes.planetCounterbackground}>
                <svg className={classes.planetCounterSvg1}>
                    <path style={{ backgroundImage: background, stroke: "none", strokeWidth: "0" }} stroke="none" strokeWidth="0" d="M 0 70, L 3500 0, L 0 0 Z" />
                </svg>

                <svg className={classes.planetCounterSvg2}>
                    <path style={{ backgroundImage: background }} d="M 0 70 L 3500 150 L 3500 0 Z" />
                </svg>


                <div className="container">
                    <div className={classes.planetCounterMainHolder}>
                        <div className={classes.countersHolder}>
                            <div className={classes.planetCounterDistanceBox}>
                                <img src={distanceIcon} alt="distanceIcon"
                                    className={classes.distanceIcon} />
                                <h4 className={classes.distanceTitle} id="myObject">
                                    {props.gravityCounterValue === '274' ? 'فاصله از مرکز کهشکان'
                                        : 'فاصله از خورشید'}
                                </h4>

                                <p>
                                    <span ref={distanceCounter} className={classes.distanceCounter}>
                                        0
                            </span>
                                    {props.gravityCounterValue === '274' ? 'ly' : 'km'}
                                </p>
                            </div>

                            <div className={classes.planetCounterGravityBox}>
                                <img src={gravityIcon} alt="gravityIcon"
                                    className={classes.gravityIcon} />
                                <h4 className={classes.gravityTitle}>
                                    گرانش
                        </h4>

                                <p>
                                    <span ref={gravityCounter} className={classes.gravityCounter}>
                                        0
                            </span>
                                    m/s2
                        </p>
                            </div>

                            <div className={classes.planetCounterTemperatureBox}>
                                <img src={tempratureIcon} alt="tempratureIcon"
                                    className={classes.tempratureIcon} />
                                <h4 className={classes.tempratureTitle}>
                                    میانگین دما
                        </h4>

                                <p ref={ref}>
                                    <span ref={tempratureCounter}
                                        className={classes.tempratureCounter}>
                                        0
                            </span>
                                    °C
                        </p>
                            </div>

                            <div className={classes.planetCounterMovementBox}>
                                <img src={movementIcon} alt="movementIcon"
                                    className={classes.movementIcon} />
                                <h4 className={classes.movementTitle}>
                                    حرکت انتقالی
                        </h4>

                                <p>
                                    <span ref={movementCounter}
                                        className={classes.movementCounter}>
                                        0
                            </span>
                                    km/s
                        </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
    // }
}

export default PlanetCounter;