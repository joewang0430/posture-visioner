from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import gridfs
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

MONGODB_URI = os.getenv("MONGODB_URI")

# Connect to MongoDB Atlas
client = MongoClient(MONGODB_URI)
db = client['myDatabase'] 
fs = gridfs.GridFS(db, collection='Videos')

@app.route('/upload', methods=['POST'])
def upload_video():
    if 'video' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['video']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Store the video in GridFS
    file_id = fs.put(file, filename=file.filename)

    return jsonify({'message': 'Video uploaded successfully', 'file_id': str(file_id)}), 200

if __name__ == '__main__':
    app.run(debug=True)