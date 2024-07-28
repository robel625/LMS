import { GLOBALTYPES } from './globalTypes';
import { imageUpload, deletefile } from '../../utils/imageUpload';
import {
  postDataAPI,
  getDataAPI,
  patchDataAPI,
  deleteDataAPI,
  getLecturesData,
} from '../../utils/fetchData';


export const COURSE_TYPES = {
    GET_COURSE: 'GET_COURSE',
    GET_LECTURES: 'GET_LECTURES',
  };


  export const getAllCourses = () => async (dispatch) => {
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
      const res = await getDataAPI(`course/get_course/` );
    //   console.log("get Course CCCCCCCCCCCC", res.data)
      dispatch({
        type: COURSE_TYPES.GET_COURSE,
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


//   const getAllLectures = async (courseId) => {
//     const response = await axios.get(getLecturesURL(courseId))
//     console.log("response axios", response.data)
//     return response.data
//   }


const iso8601Duration = (duration) => {
    const durationRegex =
      /(-)?P(?:([.,\d]+)Y)?(?:([.,\d]+)M)?(?:([.,\d]+)W)?(?:([.,\d]+)D)?T(?:([.,\d]+)H)?(?:([.,\d]+)M)?(?:([.,\d]+)S)?/
  
    const matches = duration.match(durationRegex)
  
    // seconds
    if (!matches[7]) return `${matches[8]}`
    // min:seconds
    if (!matches[6]) return `${matches[7]}:${matches[8]}`
    // hours:mins:seconds
    if (!matches[5]) return `${matches[6]}:${matches[7]}:${matches[8]}`
  }


  export const getAllLectures = (courseId) => async (dispatch) => {
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
      const res = await getDataAPI(`course/${courseId}/lectures` );
      const response = res.data.lectures

      if (res.data.msg == 'video'){
         const videoIds = response.reduce((accumulator, item, index) => {
           if (index === 0) return accumulator.concat(`${item.videoId}`)
           return accumulator.concat(`,${item.videoId}`)
         }, '')
   
         if (videoIds) {
           const data = await getLecturesData(videoIds)
           for (let i = 0; i < data.items.length; i++) {
             response[i].thumbnail = data.items[i].snippet.thumbnails.medium
             response[i].youtubeDescription = data.items[i].snippet.description
             response[i].youtubeTitle = data.items[i].snippet.title
             response[i].publishedAt = data.items[i].snippet.publishedAt
               .slice(0, 10)
               .replaceAll('-', '/')
             response[i].duration = iso8601Duration(
               data.items[i].contentDetails.duration
             )
           }
         }
        }
      dispatch({
        type: COURSE_TYPES.GET_LECTURES,
        payload: response,
      });

      
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
    } catch (err) {
      console.log("error getYear YYYYYYYYZZZZZZZZZZZZZZ", err)
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

