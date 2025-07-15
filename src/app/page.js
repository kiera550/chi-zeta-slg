import Image from "next/image";
import MyNavbar from "./components/Navbar";

export default function Home() {
  return (
    
    <div className = "container text-center">
      <div className="row mt-4">
        <div className="col-4 ">
          <h1>Chi Zeta at Case Western Reserve</h1>
          <h3>Sigma Lambda Gamma National Sorority Inc.</h3>
          <p>Greetings from the Chi Zeta Chapter of Sigma Lambda Gamma! </p>
        </div>
        <div className="col-8">
          Image to go here
        </div>
      </div>
    </div>

  );
}
