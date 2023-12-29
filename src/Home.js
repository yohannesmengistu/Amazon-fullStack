import React from "react";
import "./Home.css";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          
          <Product
            id="12321341"
            title="WLIVE TV Stand for 65 70 inch TV, Entertainment Center with Storage, Industrial TV Console for Living Room, Long 63"
            price={113.21}
            rating={5}
            image="https://m.media-amazon.com/images/I/81FlKryY-yL._AC_SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Proscan PLDED4016A 40-Inch 1080p Full HD LED TV, black"
            price={385}
            rating={4}
            image="https://m.media-amazon.com/images/I/71CUVGSOMBL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Gaming Headset for Xbox One Series X/S PS4 PS5 PC Switch, Noise Canceling Headphones with Microphone, 3.5mm Audio Jack, Auto-Adjust Headband"
            price={24.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71g98lpOJzL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903851"
            title="
            Simple Houseware 6 Tier Wall Mount Document Letter Tray Organizer, Black"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/91NRxmx9J3L._AC_SL1500_.jpg"
          />
          <Product
            id="23445931"
            title="SOUNDANCE Laptop Stand for Desk, Metal Computer Riser, Heavy Stable PC Holder, Ergonomic Laptops Elevator for 12 to 17.3 Inches Notebook Computer, Silver"
            price={199.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71M9Lre4mpL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="3254354346"
            title="SHW Home Office 32-Inch Computer Desk, Oak"
            price={37.91}
            rating={4}
            image="https://m.media-amazon.com/images/I/81-NqWy+txL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Homieasy Small L Shaped Computer Desk, 47 Inch Corner Desk with Reversible Storage Shelves for Home Office Workstation, Modern Simple Style Writing Desk Table with Storage Bag(Black Oak)"
            price={194.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/8156a2we89L._AC_SL1500_.jpg"
          />
           
           
        </div>
      </div>
    </div>
  );
}

export default Home;
