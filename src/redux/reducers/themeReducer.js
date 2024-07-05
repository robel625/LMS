import * as themeActionTypes from "../actions/themeActions"
import { selectedTheme } from "../../constants"
// import appTheme from "../../constants/theme"

const initialState = {
    appTheme: selectedTheme,
    error: null
}

console.log("reducer nnnnnnnnnnn", initialState)

const themeReducer = (state = initialState, action) => {
    switch (action.type){
        case themeActionTypes.TOGGLE_THEME_BEGIN:
            return {
                ...state,
                error: null
            }
        case themeActionTypes.TOGGLE_THEME_SUCCESS:
            return{
                ...state,
                appTheme: action.payload.selectedTheme
            }
        case themeActionTypes.TOGGLE_THEME_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
            default:
                return state
    }
}

export default themeReducer;