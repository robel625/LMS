import { GLOBALTYPES } from '../actions/globalTypes'

const initialState = false

const themeReducer1 = (state = initialState, action) => {
    switch (action.type){
        case GLOBALTYPES.THEME:
            return action.payload;
        default:
            return state;
    }
}


export default themeReducer1