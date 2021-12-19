
import { FETCH_NEWS_SUCCESS,GET_PUBLISHER_DATA ,FETCH_NEWS_FAILURE} from "../constants/types"

export function fetchNewsFailure(error:any){
   return {
        type:FETCH_NEWS_FAILURE,
        payload:error
    }
}

export function fetchNewsSuccess(payload: any) {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload
    }
}

export function getPublisherData(payload:any){
    return{
        type:GET_PUBLISHER_DATA,
        payload
    }
}