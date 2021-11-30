import './App.css';
import Region from './containers/Region';
import Scores from './containers/Scores';
import RegionInterface from './models/RegionInterface';

function App() {

  function handleRegionSubmit(region: RegionInterface){

  }

  return (
    <div id="app" className="fixed h-full w-full overflow-auto">
      {/* <Region onSubmit={(region)=>handleRegionSubmit}/> */}
      <Scores/>
    </div>
  );
}

export default App;
