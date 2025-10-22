from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Temporary in-memory storage
trips = []

@app.route('/trips', methods=['GET'])
def get_trips():
    return jsonify(trips)

@app.route('/trips', methods=['POST'])
def add_trip():
    data = request.json
    trips.append(data)
    return jsonify(data), 201

if __name__ == '__main__':
    app.run(debug=True)
