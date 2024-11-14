import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { useNavigate } from 'react-router-dom';

function Homescreen() {
  const navigate = useNavigate();

  return (
    <MainLayout>
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
    </MainLayout>
  );
}

export default Homescreen;