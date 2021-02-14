import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { routerReducer, routerMiddleware } from "react-router-redux"

// reducers
import sidebarData from "./reducers/sidebarReducer"
import loadingData from "_redux/reducers/loadingReducer"
import alertData from "_redux/reducers/alertReducer"

export default function configureStore(history, initialState) {
	// -------------- Customized reducers put here --------------
	const reducers = {
		sidebarData,
		loadingData,
		alertData,
	}

	// -------------------- other magics ------------------------
	const middleware = [thunk, routerMiddleware(history)]

	// In development, use the browser's Redux dev tools extension if installed
	const enhancers = []
	const isDevelopment = process.env.NODE_ENV === "development"
	if (isDevelopment && typeof window !== "undefined" && window.devToolsExtension) {
		enhancers.push(window.devToolsExtension())
	}

	const rootReducer = combineReducers({
		...reducers,
		routing: routerReducer,
	})

	return createStore(rootReducer, compose(applyMiddleware(...middleware), ...enhancers))
}
