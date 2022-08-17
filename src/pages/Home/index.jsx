// Components
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

// Style
import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar /> home container
      </div>
    </div>
  );
};

export default Home;
