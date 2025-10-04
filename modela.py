from pydantic import BaseModel

class Diagram(BaseModel):
    name: str
    data: dict
