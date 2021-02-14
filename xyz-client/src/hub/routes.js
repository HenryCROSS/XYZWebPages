
// ======================= admin entrance   =======================
// import AdminDashboard from 'components/user/AdminDashboard';
import home from 'hub/layouts/client_home';

// ======================= admin components =======================
// admin
import leaderboard from 'hub/layouts/admin_leaderboard';
import Dashboard from 'hub/layouts/admin_dashboard';



export const routesAdmin = [
    { path: '/', exact: true, name: 'Home', component: home},
    // { path: '/admin/', exact: true, name: 'Admin', component: AdminDashboard },
    // { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: AdminDashboard },

    { path: '/admin/', exact: true, name: 'dashboard', component: Dashboard },
    { path: '/admin/leaderboard', exact: true, name: 'leaderboard', component: leaderboard },

]