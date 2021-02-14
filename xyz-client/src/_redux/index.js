import { createBrowserHistory } from "history"
import configureStore from './configureStore'


// its just a setting put in /public/index.html
const history = createBrowserHistory()
export const store = configureStore(history, {})

export * from './constants'