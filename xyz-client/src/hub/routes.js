
// ======================= admin entrance   =======================
// import AdminDashboard from 'components/user/AdminDashboard';
import home from 'hub/layouts/client_home';

// ======================= admin components =======================
// admin
import Leaderboard from 'hub/layouts/admin_leaderboard';
import UserList from 'hub/layouts/admin_user_list';
import UserEdit from 'hub/layouts/admin_user_edit';
import Dashboard from 'hub/layouts/admin_dashboard';



export const routesAdmin = [
    { path: '/', exact: true, name: 'Home', component: home},
    // { path: '/admin/', exact: true, name: 'Admin', component: AdminDashboard },
    // { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: AdminDashboard },

    { path: '/admin/', exact: true, name: 'dashboard', component: Dashboard },
    { path: '/admin/leaderboard/:pagination', exact: true, name: 'leaderboard', component: Leaderboard },
    { path: '/admin/leaderboard/:pagination/:user_id/:training_id', exact: true, name: 'leaderboard', component: Leaderboard },
    { path: '/admin/users/:pagination/', exact: true, name: 'users', component: UserList },
    { path: '/admin/users/:pagination/:user_id', exact: true, name: 'edit', component: UserEdit },
]