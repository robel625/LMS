import { GLOBALTYPES } from './globalTypes';
import { imageUpload, deletefile } from '../../utils/imageUpload';
import {
  postDataAPI,
  getDataAPI,
  patchDataAPI,
  deleteDataAPI,
} from '../../utils/fetchData';


export const QUESTION_TYPES = {
    CREATE_QUESTION: 'CREATE_QUESTION',
    UPDATE_QUESTION: 'UPDATE_QUESTION',
    DELETE_QUESTION: 'DELETE_QUESTION',
    GET_QUESTION: 'GET_QUESTION',
    GET_QUESTIONBYID: 'GET_QUESTIONBYID',
    CREATE_YEAR: 'CREATE_YEAR',
    UPDATE_YEAR: 'UPDATE_YEAR',
    DELETE_YEAR: 'DELETE_YEAR',
    GET_YEAR: 'GET_YEAR',
    GET_UNITQUESTION: 'GET_UNITQUESTION',
  };

  
  export const getYear = (subject, auth) => async (dispatch) => {
    try {
      console.log('getyears redux', subject, auth.token)
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
      const res = await getDataAPI(`exam/getYear/${subject}`, auth.token);
      // console.log("getYear YYYYYYYYZZZZZZZZZZZZZZ", res.data)
      dispatch({
        type: QUESTION_TYPES.GET_YEAR,
        payload: res.data,
      });

      
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
    } catch (err) {
      // console.log("error getYear YYYYYYYYZZZZZZZZZZZZZZ", err)
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

  
  export const getQuestion = ({data, auth}) => async (dispatch) => {
    try {
      console.log("getQuestion", data)
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
      const res = await postDataAPI(`exam/getQuestion/`,data, auth.token);
      console.log("getQuestion YYYYYYYY", res.data)
      dispatch({
        type: QUESTION_TYPES.GET_QUESTION,
        payload: res.data,
      });

      
  
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };


  export const deleteQuestion =(id, auth) => async (dispatch) => {
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

      const res = await deleteDataAPI(`exam/deleteQuestion/${id}`, auth.token);

      // console.log("delete123id Action", res)
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { success: "deleted successfully" },
      });

      dispatch({
        type: QUESTION_TYPES.DELETE_QUESTION,
        payload: {id},
      });

      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
      
    } catch (err) {
      //console.log(err)
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

  

  export const getQuestion_byid = (id, auth) => async (dispatch) => {
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true }});
      const res = await getDataAPI(`exam/getQuestion_byid/${id}`, auth.token);
      // const res = await getDataAPI(`get_devices`, token);
      console.log('get res.data getQuestion_byid', res.data);
  
      dispatch({
        type: QUESTION_TYPES.GET_QUESTIONBYID,
        payload: res.data
      });
  
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  
  };


  
  export const updateQuestion = ({id, questionData, auth}) => async (dispatch) => {
      console.log("updateQuestion", questionData)
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

      const res = await patchDataAPI(
        `exam/updateQuestion/${id}`,
        questionData,
        auth.token
      );

    //   dispatch({ type: GLOBALTYPES.AUTH, payload: {user: res.data} });

      dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data },
      });
    }
  };

  
  export const deleteYear =({id, auth}) => async (dispatch) => {
    console.log("delete123id Year", id)
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

      const res = await deleteDataAPI(`exam/deleteYear/${id}`, auth.token);

      dispatch({
        type: QUESTION_TYPES.DELETE_QUESTION,
        payload: {id},
      });

      dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
      
    } catch (err) {
      //console.log(err)
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };



  export const createHeader = ({ data, auth }) => async (dispatch) => {
    console.log("headerDataDataaaaaaaaaaaataaaaaaaa", data )
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

      const res = await postDataAPI(
        'exam/createHeader/',
        data,
        auth.token
      );

      // dispatch({
      //   type: QUESTION_TYPES.CREATE_QUESTION,
      //   payload: res.data,
      // });

      dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });

      // dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });

    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };


  export const deleteHeader =(id, auth) => async (dispatch) => {
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

      const res = await deleteDataAPI(`exam/deleteHeader/${id}`, auth.token);

      // console.log("delete123id Action", res)
      // dispatch({
      //   type: GLOBALTYPES.ALERT,
      //   payload: { success: "deleted successfully" },
      // });

      dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });

      // dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
      
    } catch (err) {
      //console.log(err)
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };


  export const getUnitQuestion = ({data, auth}) => async (dispatch) => {
    try {
      console.log("getunitQuestion", data)
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
      const res = await postDataAPI(`exam/getUnitQuestion/`,data, auth.token);
      console.log("gteUnittQuestion YYYYYYYY", res.data)
      dispatch({
        type: QUESTION_TYPES.GET_UNITQUESTION,
        payload: res.data,
      });

      
  
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };
  



  