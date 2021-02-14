import { LOADING } from "../constants"
import {LOADING_STATUS} from 'helper/enums'

const initialState = {
	loading: "clear",
}

export default (state = initialState, action) => {
	switch (action.type) {
		case LOADING.LOADING:
			return { ...state, loading: LOADING_STATUS.loading }
		case LOADING.SUCCESS:
			return { ...state, loading: LOADING_STATUS.success }
		case LOADING.FAILURE:
			return { ...state, loading: LOADING_STATUS.failure }
		case LOADING.CLEAR:
			return { ...state, loading: LOADING_STATUS.clear }
		default:
			return state
	}
}
