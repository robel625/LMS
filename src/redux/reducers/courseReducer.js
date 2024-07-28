import { COURSE_TYPES } from '../actions/courseAction'
import { EditData, DeleteData } from '../actions/globalTypes'

const initialState = {
    courses: [],
    lectures: []
}

const courseReducer  = (state = initialState, action) => {
    switch (action.type){
        case COURSE_TYPES.GET_COURSE:
            return {
                ...state,
                courses: action.payload
            };
        case COURSE_TYPES.GET_LECTURES:
            return {
                ...state,
                lectures: action.payload
            };
            

        default:
            return state;
    }
}

export default courseReducer 