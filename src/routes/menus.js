import Dashboard from "@material-ui/icons/Dashboard";
import LayersIcon from '@material-ui/icons/Layers';
import TableList from "../views/TableList";
import DashboardPage from "../views/Dashboard";
import TextFields from "../views/FormLayout";
import ReCharts from "../views/ReCharts";
import CommonLayout from "../views/CommonLayout";

const menusRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/table",
    sidebarName: "TableList",
    navbarName: "Table List",
    icon: LayersIcon,
    component: TableList
  },
  {
    path: "/form",
    sidebarName: "Form",
    navbarName: "Form TextFields",
    icon: LayersIcon,
    component: TextFields
  },
  {
    path: "/reCharts",
    sidebarName: "ReCharts",
    navbarName: "ReCharts",
    icon: LayersIcon,
    component: ReCharts
  },
  {
    path: "/common",
    sidebarName: "CommonDemo",
    navbarName: "CommonDemo",
    icon: LayersIcon,
    component: CommonLayout
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default menusRoutes;
