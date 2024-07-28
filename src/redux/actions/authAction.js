import { GLOBALTYPES } from './globalTypes'
import { postDataAPI } from '../../utils/fetchData'
import valid from '../../utils/valid'
import axios from 'axios'
import {clearUserData, setUserData } from "../../utils/utils";


export const saveUserData = (data) => async (dispatch) => {
    console.log("auth data", data)
    try {
    dispatch({ 
        type: GLOBALTYPES.AUTH, 
        payload: {
            token: data.user_data.access_token,
            user: data.user_data.user
        } 
    })
    console.log("savedauth data", data)
    } catch (err) {
        console.log("errr savedauth data", err)
        dispatch({ 
            type: GLOBALTYPES.ALERT, 
            payload: {
                error: err
            } 
        })
    }
}


export const login = (data) => async (dispatch) => {
    const isLogin = true
    const check = valid(data, isLogin)
    if(check.errLength > 0)
    return dispatch({type: GLOBALTYPES.ALERT, payload: check.errMsg})

    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true} })
        const res = await postDataAPI('token/', data)
        dispatch({ 
            type: GLOBALTYPES.AUTH, 
            payload: {
                token: res.data.user_data.access_token,
                user: res.data.user_data.user
            } 
        })

        // localStorage.setItem("firstLogin", true)
        dispatch({ 
            type: GLOBALTYPES.ALERT, 
            payload: {
                success: res.data.msg
            } 
        })

        setUserData(res.data)
        
    } catch (err) {
        dispatch({ 
            type: GLOBALTYPES.ALERT, 
            payload: {
                error: err.response.data.msg
            } 
        })
    }
}


export const refreshToken = () => async (dispatch) => {
    const firstLogin = localStorage.getItem("firstLogin")
    if(firstLogin){
        dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true} })

        try {
            const res = await postDataAPI('refresh_token')
            dispatch({ 
                type: GLOBALTYPES.AUTH, 
                payload: {
                    token: res.data.access_token,
                    user: res.data.user
                } 
            })

            dispatch({ type: GLOBALTYPES.ALERT, payload: {} })

        } catch (err) {
            dispatch({ 
                type: GLOBALTYPES.ALERT, 
                payload: {
                    error: err.response.data.msg
                } 
            })
        }
    }
}

export const register = (data) => async (dispatch) => {
    const check = valid(data)
    if(check.errLength > 0)
    return dispatch({type: GLOBALTYPES.ALERT, payload: check.errMsg})

    try {
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})
        console.log("befor res rgister", data)

        const res = await postDataAPI('register/', data)
        console.log("res rgister", res)
        dispatch({ 
            type: GLOBALTYPES.AUTH, 
            payload: {
                token: res.data.user_data.access_token,
                user: res.data.user_data.user
            } 
        })

        // localStorage.setItem("firstLogin", true)
        dispatch({ 
            type: GLOBALTYPES.ALERT, 
            payload: {
                success: res.data.msg
            } 
        })
    } catch (err) {
        dispatch({ 
            type: GLOBALTYPES.ALERT, 
            payload: {
                error: err.response.data.msg
            } 
        })
        console.log("error", err.response.data.msg)
    }
}


export const logout = () => async (dispatch) => {
    try {
        localStorage.removeItem('firstLogin')
        await postDataAPI('logout')
        window.location.href = "/"
    } catch (err) {
        dispatch({ 
            type: GLOBALTYPES.ALERT, 
            payload: {
                error: err.response.data.msg
            } 
        })
    }
}