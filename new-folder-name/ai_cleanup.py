from PIL import Image
import cv2
import numpy as np
import base64
import io

def cleanup_diagram(image_data: str):
    img_bytes = base64.b64decode(image_data)
    img = Image.open(io.BytesIO(img_bytes)).convert("RGB")
    np_img = np.array(img)

    # Example: detect circles
    gray = cv2.cvtColor(np_img, cv2.COLOR_BGR2GRAY)
    circles = cv2.HoughCircles(gray, cv2.HOUGH_GRADIENT, 1, 20,
                               param1=50, param2=30, minRadius=10, maxRadius=100)
    return {"circles": circles.tolist() if circles is not None else []}
