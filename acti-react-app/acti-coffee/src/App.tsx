import React from "react";
import CometChatBuilderApp from "./CometChat/CometChatBuilderApp";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css"; 
/*import "@fontsource/montserrat";        
import "@fontsource/montserrat/700.css"; 
import "@fontsource/pacifico";*/
import heroImage from "./assets/hero1.avif";
import logo from "./assets/logo2.png";
import espresso from "./assets/espresso.avif";
import coffee1 from "./assets/coffee and snack1.jpg";
import secure from "./assets/secure.png";
import custom from "./assets/custom.png";
import quality from "./assets/quality.png";
import pay from "./assets/pay.png";
import staff from "./assets/focused-mix.avif";
import americano from "./assets/americano.jpg";
import cappuccino from "./assets/cappuccino.jpg";
import latte from "./assets/latte.jpg";
import black from "./assets/black coffe.jpg";
import cold from "./assets/cold brew.jpg";
import coffee2 from "./assets/cofee shop.jpg";
import coffee3 from "./assets/attractive-woman.jpg";
import coffee4 from "./assets/our-teamwork.jpg";
import coffee5 from "./assets/coffe and snack.jpg";
import coffee6 from "./assets/black-bearded.jpg";
import  cust1 from "./assets/cust1.jpg";
import cust2 from "./assets/cust2.avif";
import cust3 from "./assets/cust3.jpg";
import customer from "./assets/customer.avif";
/*import  from "./assets/";
import  from "./assets/";
import  from "./assets/";
import  from "./assets/";
import  from "./assets/";
import  from "./assets/";
import  from "./assets/";*/


/*<img src={logo} alt="logo" />
<img src={heroImage} alt="cup of coffee" />
<img src={} alt="" />
<img src={} alt="" />
<img src={} alt="" />
<img src={} alt="" />
<img src={} alt="" />
<img src={} alt="" />
<img src={} alt="" />
<img src={} alt="" />
<img src={} alt="" />
<img src={} alt="" />
<img src={} alt="" />
<img src={} alt="" />*/


const App = () => {
  return (
    <div>
      {/* Floating CometChat widget */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "350px",
          height: "100px",
          zIndex: 1000,
          backgroundColor: "#fff",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        <CometChatBuilderApp />
      </div>

      {/* NAVIGATION */}
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1 className="pfont">Acti</h1>&nbsp;
          <h1 className="pfont">Coffee</h1>
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reviews</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div id="bars" onClick={() => console.log("Toggle Menu")}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="hero">
        <div>
          <img src={heroImage} alt="cup of coffee" />
        </div>
        <div className="hero-text">
          <h1 className="pfont">Acti Coffee</h1>
          <h3>
            Start your day with our coffee and stay{" "}
            <span className="pfont">ACTIVE</span> for the rest of the day
          </h3>
          <p>
            Welcome to our coffee shop where boredom disappears with a cup in
            your hand.
          </p>
          <div>
            <button className="pribtn">Visit Us</button>
            <button className="secbtn">Contact Us</button>
          </div>
        </div>
      </div>

      {/* ABOUT US */}
      <div className="aboutus" id="aboutus">
        <h1 className="title">ABOUT US</h1>
        <div className="about">
          <div className="about-sec">
            <p>
              <span className="pfont">Acti coffee</span> is located in
              Liliesville at Swizz town. With our Italian sourced coffee bean
              we make exquisite varieties of coffee. Our customers are at the
              center of our heart and we provide an environment for dates,
              meetings and reflection. With us you come{" "}
              <span className="pfont">ALIVE</span>
            </p>
            <div className="usp">
              <div className="sp">
                <div className="shade">
                   <img src={secure} alt="secure" />
                </div>
                <p>Secure and conducive space.</p>
              </div>
              <div className="sp">
                <div className="shade">
                  <img src={custom} alt="custom" />
                </div>
                <p>Coffee made for your specific need.</p>
              </div>
              <div className="sp">
                <div className="shade">
                 <img src={quality} alt="qualiy" />
                </div>
                <p>Uncompromised quality coffee.</p>
              </div>
              <div className="sp">
                <div className="shade">
                <img src={pay} alt="pay" />
                </div>
                <p>Flexible payment options.</p>
              </div>
            </div>
            <div className="social-icon">
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          <div>
           <img src={staff} alt="happystaff" />
          </div>
        </div>
      </div>

      {/* MENU SECTION */}
      <div className="menu" id="menu">
        <h1 className="title">OUR MENU</h1>
        <div className="coffee-brands">
          {/* Add your menu items here */}
          <div>
          <img className="coffee-img" src={espresso} alt="Espresso" />
            <h3>ESPRESSO</h3>
            <p>Espresso has an Italy origin with strong, bold, and concentrated flavor.</p>
            <p className="price">&#8358;2,500</p>
          </div>
          



          <div>
                <img className="coffee-img" src={americano} alt="americano" />
                <h3>AMERICANO</h3>  
                <p> It is smooth and slightly diluted, but retains espresso’s rich taste.</p>
                <p className="price">&#8358;2,000</p>
            </div>
            <div>
                <img className="coffee-img" src={cappuccino} alt="cappuccino" />
                <h3>CAPPUCCINO</h3> 
                <p>It has Italian origin. A balanced mix of strong espresso, creamy milk (often topped with cocoa or cinnamon.), and a light, airy froth.
        
                 </p>
                <p className="price">&#8358;2,700</p>
            </div>
            <div>
                <img className="coffee-img" src={latte} alt="latte" />
                <h3>LATTE</h3> 
                <p>Latte has its origin from Italy. Flavor is creamy and smooth with a mild coffee taste due to more milk.
        
                </p>
                <p className="price">&#8358;1,500</p>
            </div>
            <div>
                
                <img className="coffee-img" src={black} alt="black-coffee" />
                <h3>BLACK COFFEE</h3> 
                <p>Black coffee is Global. Flavor contains pure coffee taste.</p>
                <p className="price">&#8358;1,000</p>
            </div>
            <div>
                <img className="coffee-img"src={cold} alt="cold-brew" />
                <h3>COLD BREW</h3>  
                <p >Cold brew is traced back to Japan. It is known to have Smooth, slightly sweet, and less acidic than hot coffee served with ice.  </p>
                <p className="price">&#8358;3,000</p>
            </div>
          
        </div>
      </div>

      {/* GALLERY SECTION */}
      <h2 className="pfont" id="sub-title">Gallery</h2>
      <div className="gallery">
        <div><img src={coffee1} alt="" /></div>
        <div><img src={coffee2} alt="" /></div>
        <div><img src={coffee3} alt="" /></div>
        <div><img src={coffee4} alt="" /></div>
        <div><img src={coffee5} alt="" /></div>
        <div><img src={coffee6} alt="" /></div>
      </div>





      {/* REVIEWS */}
      <div className="reviews">
        <h1 className="title">REVIEWS</h1>
        <div className="cust-reviews">
          <div>
           <img className="review-img" src={customer} alt="" />
            <h5>Emmanuel Baker</h5>
            <p>The decor and serenity was next dimension.</p>
          </div>
           <div>
           <img className="review-img" src={cust1} alt="" />
            <h5>Stephanie Brooks</h5>
            <p>Prompt deliveries with professionalism.</p>
            
        </div>
        <div>
            <img className="review-img" src={cust2} alt="" />
            <h5>Anita Shein</h5>
            <p>The coffee is brilliant. Availability of healthy snacks to go is next level top notch.</p>
            
        </div>
        <div>
            <img className="review-img" src={cust3} alt="" />
            <h5>Sheila Mant</h5>
            <p>I am visting Liliesville and this is a place to remember. Inspired!!!</p>
            
        </div>
        {/* Add more reviews */}
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="contact-us">
        <h1 className="title">CONTACT</h1>
        <div className="contact">
          <div className="contact-details">
            <a><i className="fa-regular fa-clock"></i> Mon-Sat 8:00am-6:00pm </a>
            <a id="mail" href="mailto:acticoffee@gmail.com"><i className="fa-regular fa-envelope"></i> acticoffee@gmail.com</a>
            <a><i className="fa-solid fa-phone"></i> +234 809 940 0012</a>
            <a><i className="fa-solid fa-globe"></i> website.com</a>
            <a><i className="fa-solid fa-location-dot"></i> No 12 Happy Street, Liliesville. Swizz Town</a>
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              height="150px"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
          <div className="form">
            <form onSubmit={(e) => { e.preventDefault(); alert("Form submitted!"); }}>
              <h2 id="hear">We love to hear from you.</h2>
              <div className="msg">
                <div>
                  <label htmlFor="fullName">Full Name</label><br />
                  <input id="fullName" type="text" name="Fullname" placeholder="Type your name here....." /><br />
                  <label htmlFor="email">Email</label><br />
                  <input id="email" type="email" name="Email" placeholder="abc@gmail.com" /><br />
                </div>
                <div>
                  <label htmlFor="message">Message</label><br />
                  <input id="message" type="text" name="inquiry" placeholder="Type here" /><br />
                  <button type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div>
          <p>© 2025 Acti Coffee</p>
        </div>
        <div className="social-icon1">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-youtube"></i></a>
        </div>
        <div>
          <p>privacy policy  ·  Refund policy</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
