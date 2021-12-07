import "./App.css";
import Profile from "./profile/Profile";
import image from "./profile/mahdi.jpg";

function App() {
  const fullName = "Mohamed Mehdi Nouira";
  const handleName = () => alert(fullName);
  return (
    <div className="App">
      <Profile
        fullName={fullName}
        bio="i love coding..."
        profession="engineer"
        handleName={handleName}
      >
        <img
          style={{
            width: 120,
            height: 180,
            border: "2px #1A5276 solid",
            borderRadius: 15,
          }}
          src={image}
          alt="profile"
        />
      </Profile>
    </div>
  );
}

export default App;
