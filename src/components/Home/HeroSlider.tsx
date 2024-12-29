import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import c1 from "../../assets/images/hero/c1.jpg"
import c2 from "../../assets/images/hero/c2.jpg"
import c3 from "../../assets/images/hero/c3.jpg"
import c4 from "../../assets/images/hero/c4.jpg"

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

function HeroSlider() {
  return (
    <header>
<div
  style={{
    // paddingBottom: '30px',
    // position: 'relative'
  }}
>
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={4000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  customTransition="all 1s ease-in-out"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={true}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
    <img src={c1}     className="d-block w-100" alt="..." />
    <img src={c2}     className="d-block w-100" alt="..." />
    <img src={c3}     className="d-block w-100" alt="..." />
    <img src={c4}     className="d-block w-100" alt="..." />

    {/* <img
      src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      style={{
        display: 'block',
        height: '100%',
        margin: 'auto',
        width: '100%'
      }}
    /> */}
  </Carousel>
</div>
    </header>
  )
}

export default HeroSlider