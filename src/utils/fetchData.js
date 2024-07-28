import axios from 'axios'
import { BASE_URL } from './config';

// export const getDataAPI = async (url, token) => {
//     console.log('fetch getyears redux', url, token)
//     const res = await axios.get(`${BASE_URL}/api/${url}`, {
//         headers: { Authorization: token}
//     })
//     // const response = await axios.get('http://192.168.18.86:8000/api/exam/getYear/MATHS'
//     //     , {
//     //             headers: { Authorization: token}
//     //         }
//     // )

//     console.log('response fetch getyears redux', response)
//     return res;
// }

export const getDataAPI = async (url, token) => {
    console.log('fetch getyears redux', url, token)
    const res = await axios.get(`${BASE_URL}/api/${url}`,
    {headers: {'Content-Type': 'multipart/form-data',
            //   Authorization: 'Bearer ' + token
            }}
    )
    
    return res;
}

export const postDataAPI = async (url, post, token) => {
    const res = await axios.post(`${BASE_URL}/api/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const putDataAPI = async (url, post, token) => {
    const res = await axios.put(`/api/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const patchDataAPI = async (url, post, token) => {
    const res = await axios.patch(`/api/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const deleteDataAPI = async (url, token) => {
    const res = await axios.delete(`/api/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}

export const getLecturesData = async (videoIds) => {
    console.log('videoId youtube', videoIds)
    const response = await axios.get(
      'https://youtube.googleapis.com/youtube/v3/videos',
      {
        params: {
          part: 'snippet,contentDetails',
          id: videoIds,
          // key: process.env.REACT_APP_YOUTUBE_API_KEY
          key: 'AIzaSyDdb5ritWnaVb4dCvOXA4XFJPWbqjOEK6w'
        }
      }
    )
    return response.data
  }