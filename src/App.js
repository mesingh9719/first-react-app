import './App.css';
import User from "./components/users-assets/User";

function App() {
  const message = "app clicked";
  return (
    <div className="App" onClick={(()=>console.log(message))}>
      <User />
    </div>
  );
}

export default App;
