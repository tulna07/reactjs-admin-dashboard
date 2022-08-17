import "./style.scss";

// Material UI
import {
  Dashboard,
  PersonOutline,
  Inventory,
  LocalShipping,
  BarChart,
  NotificationsNone,
  MedicalInformation,
  Settings,
  Psychology,
  AccountCircle,
  Logout,
  CreditCard,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">LiamLe</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutline className="icon" />
            <span>Users</span>
          </li>
          <li>
            <Inventory className="icon" />
            <span>Products</span>
          </li>
          <li>
            <CreditCard className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <BarChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MedicalInformation className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <Psychology className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircle className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <Logout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color-option color-option--light"></div>
        <div className="color-option color-option--dark"></div>
      </div>
    </div>
  );
};

export default Sidebar;
