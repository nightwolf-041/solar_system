import React from 'react';
import {withRouter} from 'react-router-dom'
import classes from './modal.module.css'
import {Formik} from 'formik'
import axios from 'axios'
import anime from 'animejs'


const Modal = (props) => {

    let [fullnameValue, setfullnameValue] = React.useState('')
    let [phonenumberValue, setphonenumberValue] = React.useState('')
    let [addressValue, setaddressValue] = React.useState('')

    let modalAlert = React.useRef()

    let [loading, setLoading] = React.useState(false)
    let [success, setsuccess] = React.useState(false)
    let [fail, setfail] = React.useState(false)

    const modalFullnameInputHandler = (e) => {
        setfullnameValue(e.target.value)
    }
    const modalPhonenumberInputHandler = (e) => {
        setphonenumberValue(e.target.value)
    }
    const addressinputInputHandler = (e) => {
        setaddressValue(e.target.value)
    }


    return (
        <>
        <div ref={modalAlert} className={classes.modalFailAlet}>خطایی رخ داده</div>
        <div className={classes.modalMain}>
            <div className={classes.menuCloserIcon}
            onClick={props.clicked}>&times;</div>

            <h4 className={classes.modalTitle}>
                مشخصات خود را وارد کنید
            </h4>

            <Formik
                initialValues={{ fullname: '', phonenumber: '', address: '' }}
                validate={values => {
                    let errors = {};

                    if (!fullnameValue) {
                        errors.fullname = 'الزامیست';
                    } else if (fullnameValue.length < 6) {
                        errors.fullname = 'کوتاه است';
                    } else {
                    }

                    if (!phonenumberValue) {
                        errors.phonenumber = 'الزامیست';
                    } else if (phonenumberValue.length < 11 || phonenumberValue.length > 11) {
                        errors.phonenumber = 'باید 11 رقمی باشد';
                    } else {
                    }

                    if (!addressValue) {
                        errors.address = 'الزامیست';
                    } else if (addressValue.length < 10) {
                        errors.address = 'کوتاه است';
                    } else {
                    }

                    return errors;
                }}

                onSubmit={() => {
                    let userFullname = fullnameValue
                    let userPhonenumber= phonenumberValue
                    let userAddress = phonenumberValue
                    let totalPrices = props.totalPrice
                    const data = {
                        userFullname,
                        userPhonenumber,
                        userAddress,
                        totalPrices
                    }

                    setLoading(true)
                    setsuccess(false)
                    setfail(false)

                    axios.post('https://jsonplaceholder.typicode.com/posts', data).then(res => {
                        setLoading(false)
                        setsuccess(true)
                        setfail(false)

                        window.location.assign('https://www.google.com')
                    
                    }).catch(err => {
                        console.log(err.message);
                        setLoading(false)
                        setsuccess(false)
                        setfail(true)

                        anime({
                            targets: modalAlert.current,
                            top: '0'
                        })

                        setTimeout(() => {
                            anime({
                                targets: modalAlert.current,
                                top: '-50%'
                            })
                        }, 3500);
                    })

                }}>

                {({
                    values,
                    errors,
                    handleSubmit,
                }) => (

                        <form className={classes.modalForm}
                            onSubmit={handleSubmit}>
                            <input
                                className={!errors.fullname?
                                    classes.modalFullnameInput
                                    : classes.modalFullnameInputInvalid}
                                type="text"
                                name="text"
                                onChange={modalFullnameInputHandler}
                                value={fullnameValue}
                                placeholder="نام کامل"
                            />
                            {errors.fullname && (
                                    <div className={classes.fullnameErrorSpan}>{errors.fullname}</div>
                            )}


                            <input
                                className={!errors.phonenumber ?
                                    classes.modalPhonenumberInput :
                                    classes.modalPhonenumberInputInvalid}
                                type="text"
                                name="text"
                                onChange={modalPhonenumberInputHandler}
                                value={phonenumberValue}
                                placeholder="شماره تلفن"
                            />
                            {errors.phonenumber && (
                                <div className={classes.phonenumberErrorSpan}>{errors.phonenumber}</div>
                            )}


                            <textarea
                                className={!errors.address ?
                                    classes.addressinputInput :
                                    classes.addressinputInputInvalid}
                                type="text"
                                name="text"
                                onChange={addressinputInputHandler}
                                value={addressValue}
                                placeholder="آدرس"
                            />
                            {errors.address && (
                                <div className={classes.addressErrorSpan}>{errors.address}</div>
                            )}


                            <button type="submit" disabled={loading}
                                className={classes.modalSubmit}>
                                {loading ?
                                    'در حال انتقال' :
                                    'پرداخت نهایی'}
                            </button>
                        </form>
                    )}
            </Formik>
        </div>
        </>
    );
}


export default withRouter(Modal);