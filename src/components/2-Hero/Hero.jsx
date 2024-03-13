import "./Hero.css";
import heroImg from '/assets/hero-image.png';
import CountUp from "react-countup";
import { HiLocationMarker } from 'react-icons/hi';
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="container hero">
        <div className="hero-left">
          <div className="hero-title">
            <h1>
              Discover <br />
              Most Suitable <br /> Property
            </h1>
          </div>
          <div className="hero-desc">
            <span className="secondaryText">
              Find a variety of properties that suit you very easility
            </span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="search-bar flex">
            <HiLocationMarker color="blue" />
            <input className="" type="text" style={{ padding: "0.5rem" }} />
            <button className="button">Search</button>
          </div>

          <div className="stats">
            <div className="stat">
              <span>
                <span><CountUp start={8800} end={9000}/></span>
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="stat">
              <span>
                <span><CountUp start={1950} end={2000}/></span>
                <span>+</span>
              </span>
              <span className="secondaryText" >Happy Customers</span>
            </div>
            <div className="stat">
              <span>
                <span><CountUp end={28}/></span>
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="img-container">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
