import { useDispatch } from 'react-redux'
import {LOADING, ALERT} from '_redux/constants'

export const useLoading = (fn, isAlert = true) => {
  const dispatch = useDispatch()
  return async (...params) => {
      try {
        dispatch({type:LOADING.LOADING})
        const res = await fn(...params)
        
        if(!res || res?.statusText !== 'OK') {
          throw new Error(res?.message || 'error')
        }

        if(res?.statusText === 'OK' && res?.data?.status !== 'success') {
          throw new Error(res?.data?.message)
        }

        dispatch({type:LOADING.SUCCESS})

        if(isAlert) {
          dispatch({type: ALERT.SUCCESS, message: res?.data?.message})
        }
        return Promise.resolve(res)   
      } catch (error) {
        console.log("error", error.message)
        dispatch({type: LOADING.FAILURE})
        if(isAlert) {
          dispatch({type: ALERT.ERROR, message: error.message})
          return Promise.resolve()
        } else {
          return Promise.reject(error) 
        }         
      }
  }
}

export default useLoading