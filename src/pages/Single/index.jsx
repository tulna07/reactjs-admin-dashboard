// Components
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Chart from "../../components/Chart";
import Table from "../../components/Table";

// Style
import "./style.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <div className="btn-edit">Edit</div>
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="item-img"
              />
              <div className="details">
                <h1 className="item-title">Liam Le</h1>
                <div className="detail-item">
                  <span className="item-key">Email:</span>
                  <span className="item-value">liamle@nab.io</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Phone:</span>
                  <span className="item-value">+07 094 6688 199</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Address:</span>
                  <span className="item-value">17 Andre str yd. Tchalla</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Country:</span>
                  <span className="item-value">Wakanda</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Single;
