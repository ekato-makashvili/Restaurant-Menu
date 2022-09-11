import "./App.css";
import Menu from "./components/Menu/Menu";
import Other from "./components/Other";
import Services from "./components/Services";

function App() {
  return (
    <div style={{ backgroundImage: "url(./bg.jpg)" }}>
      <div className="text-center">
        <img
          src="./makash-logo.png"
          alt="Makashvilebtan"
          className="w-24 h-24 ml-24 pt-8 pr-8"
        />
        <input
          placeholder="search..."
          className="bg-inherit border-2 rounded-md"
        ></input>
      </div>

      <div className="flex">
        <div className=" w-1/5">{/* <Services/> */}</div>
        <div className=" w-3/5 text-center">
          <Menu />
        </div>
        {/* <Other/> */}
      </div>
    </div>
  );
}

export default App;
