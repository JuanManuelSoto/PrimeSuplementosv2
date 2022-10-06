import "./HomePage.css";
import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";

const HomePage = () => {
  return (
    <div className="HomePage-background">
      <div className="HomePage-B1"></div>
      <div className="HomePage-B2">
        <ItemListContainer />
      </div>
    </div>
  );
};

export default HomePage;
