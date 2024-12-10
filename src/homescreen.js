import Mainlayout from '../layouts/mainlayout';
import { useNavigate } from 'react-router-dom';

function Homescreen() {
  const navigate = useNavigate();

  return (
    <Mainlayout>
      <div>
        <h1>Welcome to the Homescreen!</h1>
        <button 
          onClick={() => {
            // Navigate to the about screen
            navigate("about");
          }}
        >
          Go to About
        </button>
      </div>
    </Mainlayout>
  );
}

export default Homescreen;