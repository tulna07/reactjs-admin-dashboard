// Components
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Datatable from "../../components/Datatable";

// Style
import "./style.scss";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list-container">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
