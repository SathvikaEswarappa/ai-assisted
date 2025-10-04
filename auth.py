from fastapi import Depends, HTTPException
from jose import JWTError, jwt

SECRET_KEY = "your-secret"
ALGORITHM = "HS256"

def get_current_user(token: str = Depends(...)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return {"id": payload.get("sub")}
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")
