import json
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    with open('pose_landmarks.json') as f:
        data = json.load(f)
    return jsonify(data)

@app.route('/data')
def data():
    return jsonify({"sample_data": 4})

if __name__ == '__main__':
    app.run(debug=True)