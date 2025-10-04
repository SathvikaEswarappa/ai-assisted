from fastapi import FastAPI, WebSocket, Depends
from websocket_manager import manager
from auth import get_current_user
from ai_cleanup import cleanup_diagram
from models import Diagram
from database import save_diagram

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            await manager.broadcast(data)
    except:
        manager.disconnect(websocket)

@app.post("/cleanup")
async def cleanup(image_data: str, user=Depends(get_current_user)):
    cleaned = cleanup_diagram(image_data)
    return {"cleaned": cleaned}

@app.post("/save")
async def save(diagram: Diagram, user=Depends(get_current_user)):
    save_diagram(diagram, user["id"])
    return {"status": "saved"}
