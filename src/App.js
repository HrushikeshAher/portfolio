import './App.css';

import Profile from "./components/Profile"
import MainComponent from "./components/MainComponent"

function App() {
  return (
    <div className="main">
      <div className="ShortProfile">
        <Profile />
      </div>

      <div className="BriefProfile">
          <MainComponent />
      </div>
    </div>
  );
}

export default App;
