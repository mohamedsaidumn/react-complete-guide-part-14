import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/products");
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);
  return (
    <>
      <h1>My Home Page</h1>
    </>
  );
}

export default HomePage;
