import './App.css';

import Profile from "./components/Profile"
import MainComponent from "./components/MainComponent"

export default function App() {
  return (
    <div className="main container">
      <div className="ShortProfile col-md-3">
        <Profile />
      </div>

      <div className="col-md-9 DetailsProfile">
          <MainComponent />
      </div>
    </div>
  );
}
