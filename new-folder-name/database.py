from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
db = client["diagram_db"]

def save_diagram(diagram, user_id):
    db.diagrams.insert_one({
        "user_id": user_id,
        "name": diagram.name,
        "data": diagram.data
    })
