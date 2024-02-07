import { useState } from 'react';

const handlePredictionSubmit = (e, inputText, setResult) => {
  e.preventDefault();
  
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({"text": inputText})
  };

  fetch('/api/predict', requestOptions)
    .then((res) => res.json()
    .then((data) => {
      setResult(data);
    }));
}


function PredictForm() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState({'result': 'none'});

    return (
        <div className="prediction-panel-container">

          { 
            result.result === 'none' &&
            <div className="prediction-result prediction-result--none">No result</div>
          }

          { 
            result.result === 'positive' &&
            <div className="prediction-result prediction-result--positive">Positive</div>
          }

          { 
            result.result === 'negative' &&
            <div className="prediction-result prediction-result--negative">Negative</div>
          }
          
          <form className="prediction-form" onSubmit={(e) => handlePredictionSubmit(e, inputText, setResult)}>
            <textarea 
            className="prompt-textarea"
            placeholder="Enter a text..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}></textarea>
            <button className="predict-button">Predict</button>
          </form>
        </div>
    )
}

export default PredictForm;