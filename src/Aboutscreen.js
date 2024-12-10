import MainLayout from "../layouts/MainLayout";
import MainLayout from "../layouts/MainLayout";
function Aboutscreen() {
  return (
    <MainLayout>
      <div>
        <h1>About Screen</h1>
        <button 
          onClick={() => {
            // Navigate to the home screen
            navigate("home");
          }}
        >
          Go to Home
        </button>
      </div>
    </MainLayout>
  );  
}
export default Aboutscreen;