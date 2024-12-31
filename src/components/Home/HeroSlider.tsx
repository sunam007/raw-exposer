import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import c1 from "../../assets/images/hero/c1.jpg";
import c2 from "../../assets/images/hero/c2.jpg";
import c3 from "../../assets/images/hero/c3.jpg";
import c4 from "../../assets/images/hero/c4.jpg";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
    // partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    // partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    // partialVisibilityGutter: 30
  },
};

function HeroSlider() {
  return (
    <header>
      <div className="relative">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={4000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          customTransition="all 2s fade-in-out"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          // pauseOnHover
          // renderArrowsWhenDisabled={false}
          // renderButtonGroupOutside={false}
          // renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={true}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          <img src={c1} className="d-block w-100" alt="..." />
          <img src={c2} className="d-block w-100" alt="..." />
          <img src={c3} className="d-block w-100" alt="..." />
          <img src={c4} className="d-block w-100" alt="..." />
        </Carousel>
      </div>
    </header>
  );
}

export default HeroSlider;
