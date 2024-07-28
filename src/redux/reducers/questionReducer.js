import { QUESTION_TYPES } from '../actions/questionAction'
import { EditData, DeleteData } from '../actions/globalTypes'

const initialState = {
    years: [],
    allYears: [],
    questions: [],
    questionByid: '',
    units: '',
    allUnits: [],
    unit_questions: '',
}

const questionReducer  = (state = initialState, action) => {
    switch (action.type){
        case QUESTION_TYPES.GET_YEAR:
            return {
                ...state,
                
                years: action.payload.yearData,
                units: action.payload.unitData,
                allYears: action.payload.allYearData,
                allUnits: action.payload.allUnitData,
            };
        case QUESTION_TYPES.GET_QUESTION:
            return {
                ...state,
                questions: action.payload
            };
        case QUESTION_TYPES.GET_QUESTIONBYID:
            return {
                ...state,
                questionByid: action.payload
            };
        case QUESTION_TYPES.GET_UNITQUESTION:
            return {
                ...state,
                unit_questions: action.payload
            };
            
        // case QUESTION_TYPES.DELETE_USER:
        //     return {
        //         ...state,
        //         users: DeleteData(state.users, action.payload)
        //     };
        default:
            return state;
        // case GLOBALTYPES.USERS:
        //     return action.payload;
        // default:
        //     return state;
    }
}


export default questionReducer 