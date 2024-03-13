import "./Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../../utils/slider.json";
import { sliderSettings } from "../../../utils/common";

const Residencies = () => {
  return (
    <section className="r-wrapper" id="resi">
      <div className="container resi">
        <div className="r-head">
          <h3 className="orangeText">Best Choices</h3>
          <h1 className="primaryText">Popular Residencies</h1>
        </div>

        <Swiper className="" {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card">
                <img src={card.image} alt="" />

                <div className="r-price secondaryText">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </div>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
      
    </div>
  )
}

