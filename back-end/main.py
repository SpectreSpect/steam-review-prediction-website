from flask import Flask, request
import json
import requests
import pickle
from keras.preprocessing.text import Tokenizer

app = Flask(__name__, static_folder="../front-end/build", static_url_path="/")

tokenizer = Tokenizer()

@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/predict', methods=['POST'])
def predict():
    data = json.loads(request.get_data().decode(encoding='ascii'))
    text = data['text']

    sequences = tokenizer.texts_to_sequences([text])
    data_to_post = json.dumps({'instances': sequences})
    
    result = 'none'
    try:
        response = requests.post("http://model:8605/v1/models/steam_reviews_prediction:predict", data=data_to_post)
        predictions = response.json()['predictions'][0]
        result = 'negative'
        if predictions[1] >= 0.5:
            result = 'positive'     
    except requests.exceptions.RequestException as e:
        red_color = "\033[31m"
        reset_color = "\033[0m"
        print(f"{red_color}The model is not responding. The problem may be due to the incorrect URL being used, or the model may simply be disabled.{reset_color}")

    return  {'result': result}


if __name__ == "__main__":
    with open('tokenizer/tokenizer.pickle', 'rb') as handle:
        tokenizer = pickle.load(handle)

    app.run(host="0.0.0.0", port=80, debug=True)
