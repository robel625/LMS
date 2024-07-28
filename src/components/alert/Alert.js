import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'

import Loading from './Loading'
import Toastmsg from './Toastmsg'
import { View } from 'react-native'

const Notify = () => {
    const { alert } = useSelector(state => state)
    const dispatch = useDispatch()

    // console.log("alert FROM CCC Alert", alert)
    const isLoading = true

    return (
        <View>
            {alert.loading && <Loading  visible={isLoading}/>}

            {
                alert.error && 
                <Toastmsg msg={{type: "danger" , body: alert.error}}
                handleShow={() => dispatch({type: GLOBALTYPES.ALERT, payload: {}})} 
                bgColor="bg-danger" />
            }
            
            {
                alert.success && 
                <Toastmsg msg={{type: "success" , body: alert.success}} 
                handleShow={() => dispatch({type: GLOBALTYPES.ALERT, payload: {}})}
                bgColor="bg-success" />
            }
        </View>
    )
}

export default Notify
