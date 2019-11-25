import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { Formik } from 'formik';
import axios from 'axios'
import anime from 'animejs'
import classes from './loginPage.module.css'
import * as authActionCreators from '../../storeConfigure/actionCreators/authActionCreator'

import showHidePasswordIcon from '../../assets/images/icons/showHide_pass-icon.png'
import sorryIcon from '../../assets/images/icons/sorry-icon.png'

class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.registerAlertRef = React.createRef()
        this.loginAlertRef = React.createRef()

        this.state = {
            loginRegisterSwitch: false,

            loginEmailValue: '',
            loginEmailValid: true,
            loginPasswordValue: '',
            loginPasswordValid: true,
            loginShowHidePassword: false,

            registerFullnameValue: '',
            registerFullnameValid: true,
            registerEmailValue: '',
            registerEmailValid: true,
            registerPasswordValue: '',
            registerPasswordValid: true,
            registerShowHidePassword: false,
            registerRepasswordValue: '',
            registerRepasswordValid: true,
            registerShowHideRepassword: false,

            registerStatus : {
                loading: null,
                success: null,
                error: null,
                errorMsg: null
            },

            loginStatus : {
                success: null,
                error: null,
                errorMsg: null
            }

        }
    }


    loginEmailChangeHandler = (e) => {
        let loginEmailValue = { ...this.state.loginEmailValue }
        loginEmailValue = e.target.value
        this.setState({ loginEmailValue: loginEmailValue })
    }

    loginPasswordChangeHandler = (e) => {
        let loginPasswordValue = { ...this.state.loginPasswordValue }
        loginPasswordValue = e.target.value
        this.setState({ loginPasswordValue: loginPasswordValue })
    }

    registerFullnameChangeHandler = (e) => {
        let registerFullnameValue = { ...this.state.registerFullnameValue }
        registerFullnameValue = e.target.value
        this.setState({ registerFullnameValue: registerFullnameValue })
    }

    registerEmailChangeHandler = (e) => {
        let registerEmailValue = { ...this.state.registerEmailValue }
        registerEmailValue = e.target.value
        this.setState({ registerEmailValue: registerEmailValue })
    }

    registerPasswordChangeHandler = (e) => {
        let registerPasswordValue = { ...this.state.registerPasswordValue }
        registerPasswordValue = e.target.value
        this.setState({ registerPasswordValue: registerPasswordValue })
    }

    registerRepasswordChangeHandler = (e) => {
        let registerRepasswordValue = { ...this.state.registerRepasswordValue }
        registerRepasswordValue = e.target.value
        this.setState({ registerRepasswordValue: registerRepasswordValue })
    }

    loginShowPasswordHandler = () => {
        this.setState({loginShowHidePassword: true})
    }

    loginHidePasswordHandler = () => {
        this.setState({loginShowHidePassword: false})
    }

    registerShowPasswordHandler = () => {
        this.setState({registerShowHidePassword: true})
    }

    registerHidePasswordHandler = () => {
        this.setState({registerShowHidePassword: false})
    }

    registerShowRepasswordHandler = () => {
        this.setState({registerShowHideRepassword: true})
    }

    registerHideRepasswordHandler = () => {
        this.setState({registerShowHideRepassword: false})
    }

    reLoginAlertHandler = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <>
            {!this.props.token ?
            <div>
                <div className={classes.loginPageMain}>
                    <div className={classes.loginRegisterSwitch}>

                        <div className={
                            this.state.loginRegisterSwitch === false ? classes.registerSideBox
                                : classes.registerSideBoxHidden
                        }>
                            <h5 className={classes.registerboxHead}>
                                قبلا ثبتنام نکرده اید ؟
                        </h5>
                            <p className={classes.registerboxDesc}>
                                همین حالا حساب کاربری خود را ایجاد کنید
                        </p>
                            <button className={classes.registerboxButton}
                                onClick={() => this.setState({ loginRegisterSwitch: true })}>
                                ثبتنام
                        </button>
                        </div>

                        <div className={
                            this.state.loginRegisterSwitch === true ? classes.loginSideBox
                                : classes.loginSideBoxHidden
                        }>
                            <h5 className={classes.loginboxHead}>
                                قبلا ثبتنام کرده اید ؟
                        </h5>
                            <p className={classes.loginboxDesc}>
                                مشخصات خود را پر کرده و وارد شوید
                        </p>
                            <button className={classes.loginboxButton}
                                onClick={() => this.setState({ loginRegisterSwitch: false })}>
                                ورود
                        </button>
                        </div>


                        <div className={
                            this.state.loginRegisterSwitch === false ? classes.loginRegisterLoginBox
                                : classes.loginRegisterRegisterBox
                        }>

                            {this.state.loginRegisterSwitch === false ?
                                <div>
                                    <h4 className={classes.loginRegisterLoginHead}>
                                        ورود
                                </h4>

                                    <Formik
                                        initialValues={{ logemail: '', logpassword: '' }}
                                        validate={values => {
                                            let errors = {};

                                            if (!this.state.loginEmailValue) {
                                                errors.logemail = 'الزامیست';
                                                this.setState({ loginEmailValid: false })
                                            } else if (
                                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.state.loginEmailValue)
                                            ) {
                                                errors.logemail = 'ایمیل نامعتبر است';
                                                this.setState({ loginEmailValid: false })
                                            } else {
                                                this.setState({ loginEmailValid: true })
                                            }

                                            if (!this.state.loginPasswordValue) {
                                                errors.logpassword = 'الزامیست';
                                                this.setState({ loginPasswordValid: false })
                                            } else if (this.state.loginPasswordValue.length < 6) {
                                                errors.logpassword = 'رمز عبور کوتاه است';
                                                this.setState({ loginPasswordValid: false })
                                            } else {
                                                this.setState({ loginPasswordValid: true })
                                            }
                                            return errors;
                                        }}

                                        onSubmit={() => {
                                            let userLoginEmail = this.state.loginEmailValue
                                            let userLoginPassword = this.state.loginPasswordValue
                                         
                                            this.props.onLoginAuth(userLoginEmail,userLoginPassword,
                                                this.loginAlertRef.current, this.props.history)  

                                        }}>

                                        {({
                                            values,
                                            errors,
                                            touched,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            isSubmitting,
                                        }) => (

                                                <form className={classes.loginRegisterLoginForm}
                                                    onSubmit={handleSubmit}>
                                                    <input
                                                        className={this.state.loginEmailValid ?
                                                            classes.loginRegisterLoginEmail
                                                            : classes.loginRegisterLoginEmailInvalid}
                                                        type="email"
                                                        name="email"
                                                        onChange={this.loginEmailChangeHandler}
                                                        // onBlur={handleBlur}
                                                        value={this.state.loginEmailValue}
                                                        placeholder="EMAIL"
                                                    />
                                                    {errors.logemail &&
                                                        touched.logemail && (
                                                            <div className={classes.loginEmailErrorSpan}>{errors.logemail}</div>
                                                        )
                                                    }
                                                    <input
                                                        className={this.state.loginPasswordValid ?
                                                            classes.loginRegisterLoginPassword :
                                                            classes.loginRegisterLoginPasswordInvalid}
                                                        type={this.state.loginShowHidePassword ? 
                                                        'text' :
                                                        'password'}
                                                        name="password"
                                                        onChange={this.loginPasswordChangeHandler}
                                                        // onBlur={handleBlur}
                                                        value={this.state.loginPasswordValue}
                                                        placeholder="PASSWORD"
                                                    />
                                                    <img src={showHidePasswordIcon} alt="showHidePasswordIcon"
                                                    className={classes.loginShowHidePasswordIcon}
                                                    onMouseDown={this.loginShowPasswordHandler}
                                                    onMouseUp={this.loginHidePasswordHandler} />

                                                    {errors.logpassword && touched.logpassword && (
                                                        <div className={classes.loginPasswordErrorSpan}>{errors.logpassword}</div>
                                                    )}
                                                    <button type="submit" disabled={this.props.loading}
                                                        className={classes.loginRegisterLoginButton}>
                                                        {this.props.loading ?
                                                        'صبور باشید' :
                                                        'ورود'}
                                                </button>
                                                </form>
                                            )}
                                    </Formik>


                                    <a href="##" className={classes.loginRegisterPasswordForgot}>
                                        فراموشی رمز عبور ؟
                                </a>
                                </div>
                                :

                                <div>
                                    <h4 className={classes.loginRegisterRegisterHead}>
                                        ثبت نام
                                </h4>

                                    <Formik
                                        initialValues={{
                                            name: '', email: '', password: '', repassword: ''
                                        }}

                                        validate={values => {
                                            let errors = {};

                                            if (!this.state.registerFullnameValue) {
                                                errors.name = 'الزامیست';
                                                this.setState({ registerFullnameValid: false })
                                            } else if (this.state.registerFullnameValue.length < 6) {
                                                errors.name = 'نام کاربری کوتاه است';
                                                this.setState({ registerFullnameValid: false })
                                            } else if (/[\u0600-\u06FF\u0750-\u077F]/.test(this.state.registerFullnameValue)) {
                                                errors.name = 'نام کاربری لاتین نیست';
                                                this.setState({ registerFullnameValid: false })
                                            } else {
                                                this.setState({ registerFullnameValid: true })
                                            }

                                            if (!this.state.registerEmailValue) {
                                                errors.email = 'الزامیست';
                                                this.setState({ registerEmailValid: false })
                                            } else if (
                                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.state.registerEmailValue)) {
                                                errors.email = 'ایمیل نامعتبر است';
                                                this.setState({ registerEmailValid: false })
                                            } else {
                                                this.setState({ registerEmailValid: true })
                                            }

                                            if (!this.state.registerPasswordValue) {
                                                errors.password = 'الزامیست';
                                                this.setState({ registerPasswordValid: false })
                                            }
                                            else if (this.state.registerPasswordValue.length < 6) {
                                                errors.password = 'رمز عبور کوتاه است';
                                                this.setState({ registerPasswordValid: false })
                                            } else if (/[\u0600-\u06FF\u0750-\u077F]/.test(this.state.registerPasswordValue)) {
                                                errors.password = 'رمز عبور غیر لاتین است';
                                                this.setState({ registerPasswordValid: false })
                                            } else if (!/[0-9]/.test(this.state.registerPasswordValue)) {
                                                errors.password = 'رمز عبور شامل عدد نیست';
                                                this.setState({ registerPasswordValid: false })
                                            } else if (!/[a-zA-Z]/.test(this.state.registerPasswordValue)) {
                                                errors.password = 'رمز عبور شامل حروف نیست';
                                                this.setState({ registerPasswordValid: false })
                                            } else if (!/[_ & @ * -]/.test(this.state.registerPasswordValue)) {
                                                errors.password = 'رمز باید شامل (_ & @ * -) باشد';
                                                this.setState({ registerPasswordValid: false })
                                            } else {
                                                this.setState({ registerPasswordValid: true })
                                            }

                                            if (!this.state.registerRepasswordValue) {
                                                errors.repassword = 'الزامیست';
                                                this.setState({ registerRepasswordValid: false })
                                            } else if (this.state.registerRepasswordValue !==
                                                this.state.registerPasswordValue) {
                                                errors.repassword = 'مشابه رمز عبور نیست';
                                                this.setState({ registerRepasswordValid: false })
                                            } else {
                                                this.setState({ registerRepasswordValid: true })
                                            }

                                            console.log(errors);
                                            return errors;
                                        }}
                                        onSubmit={(values, { setSubmitting }) => {
                                            let regFullname = this.state.registerFullnameValue
                                            let regEmail = this.state.registerEmailValue
                                            let regPassword = this.state.registerPasswordValue

                                            const registerData = {
                                                userName: regFullname,
                                                userEmail: regEmail,
                                                userPassword: regPassword
                                            }

                                            const registerStatus = {...this.state.registerStatus}
                                            registerStatus.loading = true
                                            registerStatus.success = false
                                            registerStatus.error = false
                                            this.setState({registerStatus: registerStatus})

                                            axios.post('https://jsonplaceholder.typicode.com/posts', registerData).then(res => {
                                                const registerStatus = {...this.state.registerStatus}
                                                registerStatus.loading = false
                                                registerStatus.success = true
                                                registerStatus.error = false
                                                this.setState({
                                                    registerStatus: registerStatus,loginRegisterSwitch: false
                                                })

                                                let SuccessAlert = this.registerAlertRef.current
                                                anime({
                                                    targets: SuccessAlert,
                                                    height: '90px',
                                                    paddingTop: '20px',
                                                    top: '0',
                                                    display: 'fixed',
                                                    backgroundColor: '#43A047'
                                                })
                                                setTimeout(() => {
                                                    anime({
                                                        targets: SuccessAlert,
                                                        height: '0',
                                                        top: '-20%',
                                                        display: 'none'
                                                    })
                                                }, 3000);

                                            }).catch(err => {
                                                const registerStatus = {...this.state.registerStatus}
                                                registerStatus.loading = false
                                                registerStatus.success = false
                                                registerStatus.error = true
                                                registerStatus.errorMsg = err.message
                                                this.setState({registerStatus: registerStatus})

                                                let ErrorAlert = this.registerAlertRef.current
                                                anime({
                                                    targets: ErrorAlert,
                                                    height: '100px',
                                                    paddingTop: '0',
                                                    top: '0',
                                                    display: 'fixed',
                                                    backgroundColor: '#f44336'
                                                })
                                                setTimeout(() => {
                                                    anime({
                                                        targets: ErrorAlert,
                                                        height: '0',
                                                        top: '-20%',
                                                        display: 'none',
                                                    })
                                                }, 4000);
                                            })
                                        }}>

                                        {({
                                            values,
                                            errors,
                                            touched,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            isSubmitting,
                                        }) =>
                                            (
                                                <form className={classes.loginRegisterRegisterForm}
                                                    onSubmit={handleSubmit}>

                                                    <input
                                                        className={this.state.registerFullnameValid ?
                                                            classes.loginRegisterRegisterFullname :
                                                            classes.loginRegisterRegisterFullnameInvalid}
                                                        type="text"
                                                        name="name"
                                                        onChange={this.registerFullnameChangeHandler}
                                                        // onBlur={handleBlur}
                                                        value={this.state.registerFullnameValue}
                                                        placeholder="FULLNAME"
                                                    />
                                                    {errors.name && (
                                                        <div className={classes.registerFullNameErrorSpan}>{errors.name}</div>
                                                    )}

                                                    <input
                                                        className={this.state.registerEmailValid ?
                                                            classes.loginRegisterRegisterEmail :
                                                            classes.loginRegisterRegisterEmailInvalid}
                                                        type="email"
                                                        name="email"
                                                        onChange={this.registerEmailChangeHandler}
                                                        // onBlur={handleBlur}
                                                        value={this.state.registerEmailValue}
                                                        placeholder="EMAIL"
                                                    />
                                                    {errors.email && (
                                                        <div className={classes.registerEmailErrorSpan}>{errors.email}</div>
                                                    )}

                                                    <input
                                                        className={this.state.registerPasswordValid ?
                                                            classes.loginRegisterRegisterPassword :
                                                            classes.loginRegisterRegisterPasswordInvalid}
                                                        type={this.state.registerShowHidePassword ?
                                                        'text' : 'password'}
                                                        name="password"
                                                        onChange={this.registerPasswordChangeHandler}
                                                        // onBlur={handleBlur}
                                                        value={this.state.registerPasswordValue}
                                                        placeholder="PASSWORD"
                                                    />
                                                    <img src={showHidePasswordIcon} alt="showHidePasswordIcon"
                                                    className={classes.registerShowHidePasswordIcon}
                                                    onMouseDown={this.registerShowPasswordHandler}
                                                    onMouseUp={this.registerHidePasswordHandler} />

                                                    {errors.password && (
                                                        <div className={classes.registerPasswordErrorSpan}>{errors.password}</div>
                                                    )}

                                                    <input
                                                        className={this.state.registerRepasswordValid ?
                                                            classes.loginRegisterRegisterRepassword :
                                                            classes.loginRegisterRegisterRepasswordInvalid}
                                                        type={this.state.registerShowHideRepassword ? 'text' : 'password'}
                                                        name="repassword"
                                                        onChange={this.registerRepasswordChangeHandler}
                                                        // onBlur={handleBlur}
                                                        value={this.state.registerRepasswordValue}
                                                        placeholder="RE-PASSWORD"
                                                    />
                                                    <img src={showHidePasswordIcon} alt="showHidePasswordIcon"
                                                    className={!errors.repassword ?classes.registerShowHideRepasswordIcon :
                                                        classes.registerShowHideRepasswordIconInvalid
                                                    }
                                                    onMouseDown={this.registerShowRepasswordHandler}
                                                    onMouseUp={this.registerHideRepasswordHandler}/>

                                                    {errors.repassword && (
                                                        <div className={classes.refisterRepasswprdErrorSpan}>{errors.repassword}</div>
                                                    )}

                                                    <button type="submit"
                                                    disabled={this.state.registerStatus.loading}
                                                        className={classes.loginRegisterRegisterButton}>
                                                        {this.state.registerStatus.loading ?
                                                        'صبور باشید':
                                                        'ثبتنام'}
                                                    </button>
                                                </form>
                                            )}
                                    </Formik>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className={classes.loginPageBottom}></div>

                <div ref={this.loginAlertRef} className={classes.loginAlerts}>
                    {
                        this.props.error ?
                        <p>خطایی رخ داده <br />
                        <span>{this.props.errorMsg}</span>
                        </p> : 
                        <h4>خوش آمدید :)</h4>
                    }
                
                </div>

                <div ref={this.registerAlertRef} className={classes.registerAlerts}>
                    {this.state.registerStatus.error ?
                    <p>خطایی رخ داده <br />
                    <span>{this.state.registerStatus.errorMsg}</span>
                    </p> :
                    <h4>ثبتنام موفق بود</h4>}
                </div>
                </div>
                : 
                <div className={classes.reLoginAlert}>
                    <img src={sorryIcon} alt="sorryIcon" className={classes.reLoginAlertIcon} />
                    <h1 className={classes.reLoginAlertTitle}>!شما قبلا وارد شده اید</h1>
                    <button type="button" className={classes.reLoginAlertButton}
                    onClick={this.reLoginAlertHandler}>
                        بازگشت به صفحه اصلی
                    </button>
                </div>
                }
            </>
        );
    }
}

const mapState = state => {
    return {
        loading: state.authReducer.loading,
        token: state.authReducer.token !== null,
        error: state.authReducer.error,
        errorMsg: state.authReducer.errorMsg
    }
}

const mapDispatch = dispatch => {
    return {
        onLoginAuth: (email, password, loginAlert, history) => 
            dispatch(authActionCreators.auth(email, password, loginAlert, history))
    }
}

export default connect(mapState, mapDispatch)(withRouter(LoginPage));