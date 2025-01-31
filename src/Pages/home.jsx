import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Introduction from "../components/Introduction/Introduction";
import History from "../components/History/History"; // Keep it here for the home page
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Literature from "../components/Literature/Literature";
import Cinematography from "../components/Cinematography/Cinematography";
import Warning from "../components/warning/Warning";

export function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      <History />
      <Literature />
      <Cinematography />
      <Warning />
      <Footer />
    </>
  );
}

export default Home;
