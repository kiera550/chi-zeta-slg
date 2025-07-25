import Image from "next/image";
import MyNavbar from "./components/Navbar";
import CarouselHome from "./components/Carousel";
import './globals.css';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Home() {
  return (
    <div className = "container text-center">

      <div className="row mt-4 h-75">
        <div className="col-5">
          <br></br>
          <br></br>
          <h3>Get to know...</h3>
          <h1 className = "title-custom1">Chi Zeta</h1>
          <h2>Sigma Lambda Gamma National Sorority Inc.</h2>
          <p> at Case Western Reserve University </p>
        </div>
        <div className="col-7">
          <br></br>
          <br></br>
          {/* <Image 
            src="/images/groupphoto.jpeg" 
            alt="testingimage"
            width={1182/1.7}
            height={665/1.7}
            className="rounded"
          /> */}
          <CarouselHome/>
          
        </div>
      </div>
      <div className="row mt-4">
        <div>
          <h1 className="title-custom2">Culture is Pride, Pride is Success</h1>
        </div>
      </div>
      {/* Short summary and hisotry of chapter to go here */}
      <div className="row mt-4">
        <p>Sigma Lambda Gamma (SLG) National Sorority, Inc., provides opportunities for lifelong empowerment to its members, thereby positively influencing the global community. We pride ourselves in promoting respect and upholding standards of excellence in morality, ethics, and education. By engaging in activities that focus on our founding principles, our members can develop and fine-tune their professional and leadership skills.</p>
      </div>
      {/* Testimonials */}
      {/* <div className="row mt-4">
        <div className="col-sm">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <h3>Name of member</h3>
        </div>
        <div className="col-sm">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <h3>Name of member</h3>
        </div>
        <div className="col-sm">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <h3>Name of member</h3>
        </div>
      </div> */}
      {/* Interest forms */}
      <div className="row mt-4">
        <div className="text-start">
          <h3>Interested in joining?</h3>
        </div>
      </div>
      <div className="row mt-4 mb-4">
        <div className="col-sm">
          <h3>Sign up for a coffee chat with a sibling!</h3>
          <button type="button" className="btn btn-light  btn-lg button-custom">Schedule</button>
        </div>
        <div className="col-sm">
          <h3>Fill out our interest form to learn more.</h3>
          <a className="btn btn-light btn-lg button-custom" href="https://forms.gle/dGgPhDPx3My6oi7a9">Form</a>
        </div>
        <div className="col-sm">
          <Image
          src="/images/jocomama.png"
          alt="jocotest"
          width={1730/4}
          height={1436/4}
          className="rounded"/>
        </div>
      </div>
      {/* Social media link */}
      <div className="row mt-5">
        <br/>
        <div>
          <h3>Follow us on Instagram</h3>
          <a href="https://www.instagram.com/cwrugammas/" target="_blank">
          <InstagramIcon style={{ fontSize: 50, color: '#E4405F' }} />
          </a>
        </div>
      </div>
    </div>

  );
}
