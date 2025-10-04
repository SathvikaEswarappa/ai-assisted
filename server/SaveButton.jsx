import axios from 'axios';

const SaveButton = ({ cleanedShapes }) => {
  const handleSave = async () => {
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/diagrams/save`, {
      name: "My Diagram",
      data: cleanedShapes
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    alert("Diagram saved!");
  };

  return <button onClick={handleSave}>Save Diagram</button>;
};

export default SaveButton;
