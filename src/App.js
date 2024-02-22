import FeatureToggle from './FeatureToggle';


function App() {
  return (
    <div className="App">
      <FeatureToggle isEnabled={true} featureName="Feature One" />
      <FeatureToggle isEnabled={false} featureName="Feature Two" />
      <FeatureToggle isEnabled={false} featureName="Feature Three" />
      <FeatureToggle isEnabled={false} featureName="Feature Four" />
      <FeatureToggle isEnabled={false} featureName="Feature Five" />
      {/* Add more instances as needed */}
    </div>
  );
}

export default App;