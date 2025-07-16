import Image from "next/image";
import MyNavbar from "./components/Navbar";
import './globals.css';

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
      <div className="row mt-4">
        <div>
          <h1>Culture is Pride, Pride is Success</h1>
        </div>
      </div>
      <div className="row mt-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="row mt-4">
        <div className="text-start">
          <h3>Interested in joining?</h3>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-sm">
          <h3>Sign up for a coffee chat with a sibling!</h3>
          <button type="button" className="btn btn-primary btn-lg button-custom">Schedule</button>
        </div>
        <div className="col-sm">
          <h3>Fill out our interest form to learn more.</h3>
          <button type="button" className="btn btn-primary btn-lg button-custom">Form</button>
        </div>
        <div className="col-sm">
          <p>Image here</p>
        </div>
      </div>
    </div>

  );
}
