import './App.css';
import PageHeader from './PageHeader';
import PredictForm from './PredictForm';

function App() {
  
  return (
    <div className="App"> 
      <PageHeader />   
      <div className="content">
        <PredictForm />
      </div>
    </div>
  );
}

export default App;
