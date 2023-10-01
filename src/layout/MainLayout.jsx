import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";
import Container from "../components/Shared/Container";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <Container>
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
    </div>
  );
};

export default MainLayout;
