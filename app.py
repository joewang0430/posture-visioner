from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "WE DID IT"})

@app.route('/data')
def data():
    return jsonify({"sample_data": 4})

if __name__ == '__main__':
    app.run(debug=True)