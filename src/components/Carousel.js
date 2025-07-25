import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

export default function CarouselHome(){
    return(
       <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner rounded">
        <div className="carousel-item active">
          <img src="/images/groupphoto.jpeg" className="d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img src="/images/nashlyemilyanabrianna.jpeg" className="d-block w-100" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src="/images/smoarivanessa.jpeg" className="d-block w-100" alt="Third slide" />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>  
    );
}