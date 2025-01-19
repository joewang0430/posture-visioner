from flask import Flask, request, jsonify, send_file
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

@app.route('/get_video', methods=['GET'])
def get_video():
    file_id = request.args.get('file_id')
    video = fs.get(file_id)
    if not video:
        return jsonify({'error': 'Video not found'}), 404
    return send_file(video, mimetype='video/mp4')

if __name__ == '__main__':
    app.run(debug=True)