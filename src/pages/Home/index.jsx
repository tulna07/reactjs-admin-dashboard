// Components
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Widget from "../../components/Widget";
import Chart from "../../components/Chart";
import Featured from "../../components/Featured";

// Style
import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />{" "}
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
