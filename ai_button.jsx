import axios from 'axios';

const AIButton = ({ canvasRef, token }) => {
  const handleCleanup = async () => {
    const canvas = canvasRef.current;
    const imageData = canvas.toDataURL().split(',')[1]; // base64

    const res = await axios.post('http://localhost:8000/cleanup', {
      image_data: imageData,
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });

    console.log('Cleaned shapes:', res.data.cleaned);
    // Re-render cleaned shapes here
  };

  return <button onClick={handleCleanup}>AI Clean Up</button>;
};

export default AIButton;
