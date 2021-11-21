import "./App.css";
import Profile from "./profile/Profile";
import image from "./profile/mahdi.jpg";

function App() {
  const fullName = "Mohamed Mehdi Nouira";
  const handleName = e => {
    e.preventDefault();
    alert(fullName);
  };
  return (
    <div className="App">
      <Profile
        fullName={fullName}
        bio="i love coding..."
        profession="engineer"
        handleName={handleName}
      >
        {image}
      </Profile>
    </div>
  );
}

export default App;
