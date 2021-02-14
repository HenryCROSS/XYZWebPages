import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {SIDEBAR} from '_redux/constants'

import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import {nav_admin as navigation} from 'hub/nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarData.sidebarShow)

  return (
    <CSidebar
      show={show}
      dropdownMode='noAction'
      colorScheme='dark'
      onShowChange={val => dispatch({type: SIDEBAR.SIDEBAR_SET, sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/admin">

        <div className="c-sidebar-brand-full">
          <h4 style={{paddingTop: 12}}>Admin Console</h4> 
        </div>
        <CIcon
          className="c-sidebar-brand-minimized"
          name="cilSettings"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav >

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
