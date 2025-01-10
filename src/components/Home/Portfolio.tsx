import "animate.css";
import Container from "../Container";

const Portfolio = () => {
  return (
    <Container>
      <div className="min-h-52 w-full flex justify-center items-center space-x-4">
        <div className="animate__animated animate__fadeInUp  w-20 h-20 bg-slate-400"></div>
        <div className="animate__animated animate__fadeInUp animate__slow w-20 h-20 bg-slate-400"></div>
        <div className="animate__animated animate__fadeInUp animate__slower w-20 h-20 bg-slate-400"></div>
      </div>
    </Container>
  );
};

export default Portfolio;
