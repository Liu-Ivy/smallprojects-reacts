import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";

let styles = {
  background: "cover",
  margin: "50px auto",
  width: "500px",
  color: "blue",
  text: "center",
};

function App() {
  return (
    <div style={styles}>
      <h1>What are you feeling like tonight?</h1>
      <Carousel>
        <div>
          <img
            src="https://res.cloudinary.com/dnyr0f79p/image/upload/c_scale,h_800,r_0,w_800/v1586800512/any/photo-1542834369-f10ebf06d3e0_pwamb0.jpg"
            alt="pizza"
          />
          <p className="legend">Pizza</p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dnyr0f79p/image/upload/c_scale,h_800,w_800/v1586800477/any/photo-1578687388049-079580e6eb2d_xofwm6.jpg"
            alt="salad"
          />
          <p className="legend">Salad</p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dnyr0f79p/image/upload/c_scale,h_800,w_800/v1586800453/any/photo-1529692236671-f1f6cf9683ba_h6xshc.jpg"
            alt="steak"
          />
          <p className="legend">Steak</p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dnyr0f79p/image/upload/c_scale,h_800,w_800/v1586800401/any/photo-1553621042-f6e147245754_wk4suu.jpg"
            alt="sushi"
          />
          <p className="legend">Sushi</p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dnyr0f79p/image/upload/v1586800348/any/800px-Plateau_van_zeevruchten_v0zjgi.jpg"
            alt="seafood"
          />
          <p className="legend">Seafood</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
