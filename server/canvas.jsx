import React, { useRef, useEffect } from 'react';

const Canvas = ({ socket }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;

    let drawing = false;

    const draw = (x, y) => {
      ctx.lineTo(x, y);
      ctx.stroke();
      socket.send(JSON.stringify({ x, y }));
    };

    canvas.onmousedown = () => {
      drawing = true;
      ctx.beginPath();
    };

    canvas.onmouseup = () => {
      drawing = false;
    };

    canvas.onmousemove = (e) => {
      if (drawing) draw(e.offsetX, e.offsetY);
    };

    socket.onmessage = (event) => {
      const { x, y } = JSON.parse(event.data);
      ctx.lineTo(x, y);
      ctx.stroke();
    };
  }, [socket]);

  return <canvas ref={canvasRef} style={{ border: '1px solid black' }} />;
};

export default Canvas;
