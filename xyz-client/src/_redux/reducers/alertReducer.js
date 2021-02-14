import { ALERT as CONST } from "../constants"
import { ALERT_STATUS } from "helper/enums"

const initialState = {
	status: "clear",
}

export default (state = initialState, action) => {
	switch (action.type) {
		case CONST.SUCCESS:
			return { ...state, status: ALERT_STATUS.success, message: action.message, toggle: !state.toggle }
		case CONST.ERROR:
			return { ...state, status: ALERT_STATUS.error, message: action.message, toggle: !state.toggle }
		case CONST.NOTIFY:
			return { ...state, status: ALERT_STATUS.notify, message: action.message, toggle: !state.toggle }
		case CONST.INFO:
			return { ...state, status: ALERT_STATUS.info, message: action.message, toggle: !state.toggle }
		case CONST.CLEAR:
			return { ...state, status: ALERT_STATUS.clear, message: action.message, toggle: !state.toggle }

		default:
			return state
	}
}
