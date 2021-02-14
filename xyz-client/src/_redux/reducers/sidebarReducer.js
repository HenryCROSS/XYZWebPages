import {SIDEBAR} from '_redux/constants'
// from coreui

const initialState = {
  sidebarShow: 'responsive'
}

export default (state = initialState, { type, ...rest }) => {
  switch (type) {
    case SIDEBAR.SIDEBAR_SET:
      return {...state, ...rest }
    default:
      return state
  }
}