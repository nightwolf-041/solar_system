import * as actionTypes from '../actionTypes/actionTypes'
import axios from 'axios'
import anime from 'animejs'


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    }
}

export const auth = (email, password, loginAlert, history) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email,
            password
        }

        axios.post('https://jsonplaceholder.typicode.com/posts', authData).then(res => {
            localStorage.setItem('token', 'blabla--bla-b-l-a')
            setTimeout(() => {
                dispatch(authSuccess(localStorage.getItem('token')))
            }, 1500);
            anime({
                targets: loginAlert,
                height: '90px',
                paddingTop: '20px',
                top: '0',
                display: 'fixed',
                backgroundColor: '#43A047'
            })
            setTimeout(() => {
                anime({
                    targets: loginAlert,
                    height: '0',
                    top: '-20%',
                    display: 'none'
                })
            }, 1500);

            setTimeout(() => {
                history.goBack()
            }, 1300);

        }).catch(err => {
            dispatch(authFail(err.message))
            anime({
                targets: loginAlert,
                height: '100px',
                paddingTop: '0',
                top: '0',
                display: 'fixed',
                backgroundColor: '#f44336'
            })
            setTimeout(() => {
                anime({
                    targets: loginAlert,
                    height: '0',
                    top: '-20%',
                    display: 'none',
                })
            }, 4000);
        })
    }

}

export const loggedOut = () => {
    localStorage.removeItem('token')
    return {
        type: actionTypes.LOG_OUT
    }
}