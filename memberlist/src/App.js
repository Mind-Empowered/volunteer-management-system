import Sidebar from "./components/Sidebar";
import MembersList from "./components/MembersList";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterSort from "./components/FilterSort";


function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4 bg-light">
        <MembersList />
      </div>
      <FilterSort />
    </div>
  );
}

export default App;
