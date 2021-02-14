/*
  Note: How to add icons
    find the icon name from: https://icons.coreui.io/icons/
    assets/icons/index.js
      import the icon
      (the component name is in cammel case, which is different from the classname)
      put it into export
*/
export const nav_admin = [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Admin']
  },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Products',
  //   route: '/admin/products',
  //   icon: 'cil-3d',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Cagetory',
  //       to: '/admin/categories',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Platforms',
  //       to: '/admin/platforms/0',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Products',
  //       to: '/admin/products',
  //     }
  //   ],
  // },
  {
    _tag: 'CSidebarNavItem',
    name: 'Users',
    to: '/admin/users',
    route: '/admin/users',
    icon: 'cil-user',
  },  
  {
    _tag: 'CSidebarNavItem',
    name: 'Leaderboard',
    to: '/admin/leaderboard',
    route: '/admin/leaderboard',
    icon: 'cil-book',
  },   
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['My Account']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Logout',
    to: '/signout',
    icon: {
      name: 'cil-account-logout',
    },
    label: true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

