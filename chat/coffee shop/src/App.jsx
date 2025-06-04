import CometChatBuilderApp from "./CometChat/CometChatBuilderApp";
import React from "react";
import "./app.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <div style={{ width: "100vw" }}>
      {/* CometChat section */}
      <div style={{ height: "100vh" }}>
        <CometChatBuilderApp />
      </div>

      {/* Coffee Shop Website */}
      <div>
        <nav>
          <div className="logo">
            <img className="logo-img" src="logo1 (2).png" alt="logo" />
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
          <div id="bars" onClick={() => console.log("toggle menu")}> 
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>

        <div className="hero">
          <div>
            <img src="hero-nobg1.avif" alt="cup of coffee" />
          </div>
          <div className="hero-text">
            <h1 className="pfont">Acti Coffee</h1>
            <h3>
              Start your day with our coffee and stay <span className="pfont">ACTIVE</span> for the rest of the day
            </h3>
            <p>Welcome to our coffee shop where boredom disappears with a cup in your hand.</p>
            <div>
              <button className="pribtn">Visit Us</button>
              <button className="secbtn">Contact Us</button>
            </div>
          </div>
        </div>

        <div className="aboutus" id="aboutus">
          <h1 className="title">ABOUT US</h1>
          <div className="about" id="about">
            <div className="about-sec">
              <p>
                <span className="pfont">Acti coffee</span> is located in Liliesville at Swizz town. With our Italian sourced coffee bean we make exquisite varieties of coffee. Our customers are at the center of our heart and we provide an environment for dates, meetings and reflection. With us you come <span className="pfont">ALIVE</span>
              </p>
              <div className="usp">
                <div className="sp">
                  <div className="shade"><img src="secure.png" alt="secure" /></div>
                  <p>Secure and conducive space.</p>
                </div>
                <div className="sp">
                  <div className="shade"><img src="custom.png" alt="custom" /></div>
                  <p>Coffee made for your specific need.</p>
                </div>
                <div className="sp">
                  <div className="shade"><img src="quality.png" alt="quality" /></div>
                  <p>Uncompromised quality coffee.</p>
                </div>
                <div className="sp">
                  <div className="shade"><img src="pay.png" alt="payment" /></div>
                  <p>Flexible payment options.</p>
                </div>
              </div>
              <div className="social-icon">
                <a href=""><i className="fa-brands fa-facebook"></i></a>
                <a href=""><i className="fa-brands fa-instagram"></i></a>
                <a href=""><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>
            <div>
              <img src="focused-mix-raced-colleagues-watching-content-tablet_74855-2788.avif" alt="happy staff" />
            </div>
          </div>
        </div>

        <div className="menu" id="menu">
          <h1 className="title">OUR MENU</h1>
          <div className="coffee-brands">
            <div>
              <img className="coffee-img" src="espresso.avif" alt="Espresso" />
              <h3>ESPRESSO</h3>
              <p>Espresso has an Italy origin with strong, bold, and concentrated with a rich crema on top.</p>
              <p className="price">&#8358;2,500</p>
            </div>
          </div>
        </div>

        <h2 className="pfont" id="sub-title">Gallery</h2>
        <div className="gallery">
          <div><img src="coffee and snack1.jpg" alt="" /></div>
          <div><img src="cofee shop.jpg" alt="" /></div>
          <div><img src="attractive-woman-casual-clothing-takes-selfie-coffee-shop_1339901-15152.jpg" alt="" /></div>
          <div><img src="coffe and snack.jpg" alt="" /></div>
          <div><img src="cup-coffee-with-heart-drawn-foam_1286-70.avif" alt="" /></div>
          <div><img src="person-serving-cup-coffee_1286-227.avif" alt="" /></div>
        </div>

        <div className="reviews">
          <h1 className="title">REVIEWS</h1>
          <div className="cust-reviews">
            <div>
              <img className="review-img" src="customer.avif" alt="Emmanuel Baker" />
              <h5>Emmanuel Baker</h5>
              <p>The decor and serenity was next dimension.</p>
            </div>
          </div>
        </div>

        <div className="contact-us">
          <h1 className="title">CONTACT</h1>
          <div className="contact">
            <div className="contact-details">
              <a><i className="fa-regular fa-clock"></i> Mon-Sat 8:00am-6:00pm </a>
              <a id="mail" href="mailto: acticoffee@gmail.com"> <i className="fa-regular fa-envelope"></i> acticoffee@gmail.com</a>
              <a><i className="fa-solid fa-phone"></i> +234 809 940 0012</a>
              <a><i className="fa-solid fa-globe"></i> website.com</a>
              <a><i className="fa-solid fa-location-dot"></i> No 12 Happy Street, Liliesville. Swizz Town</a>
              <iframe
                src="https://www.google.com/maps/embed?..."
                height="150px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
            <div className="form">
              <form onSubmit={(e) => { e.preventDefault(); alert("Form submitted"); }}>
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

        <footer>
          <div>
            <p>&#169; 2025 Acti Coffee</p>
          </div>
          <div className="social-icon1">
            <a href=""><i className="fa-brands fa-facebook"></i></a>
            <a href=""><i className="fa-brands fa-instagram"></i></a>
            <a href=""><i className="fa-brands fa-youtube"></i></a>
          </div>
          <div>
            <p>privacy policy . Refund policy</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
