import { useState } from 'react';
import './App.css';
import Prediction from './containers/Prediction';
import Region from './containers/Region';
import Scores from './containers/Scores';
import RegionInterface from './models/RegionInterface';

function App() {
  const [step, setStep] = useState(1)

  function handleRegionSubmit(region: RegionInterface) {
    setStep(2)
  }

  return (
    <div id="app" className="fixed h-full w-full overflow-auto">
      {step === 1 && <Region onSubmit={(region) => handleRegionSubmit(region)} />}
      {step === 2 && <Scores onBack={()=>setStep(1)} onRecommend={()=>setStep(3)}/>}
      {step === 3 && <Prediction onDone={()=>setStep(1)}/>}
    </div>
  );
}

export default App;
