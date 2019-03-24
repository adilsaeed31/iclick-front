import React from "react";
import FooterMaps from "custom/iclick/components/FooterMaps";

const date = new Date();

const Footer = () => (
  <footer className="footer">
    <div className="footer-middle">
      <div className="container">
        <div className="footer-ribbon">Get in touch</div>
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-3">
                <div className="widget">
                  <ul className="contact-info">
                    <li>
                      <span className="contact-info-label">Address:</span>Al Seef, Dubai, UAE
                    </li>
                    <li>
                      <span className="contact-info-label">Phone:</span>
                      <a href="tel:">04 3254251</a>
                    </li>
                    <li>
                      <span className="contact-info-label">Email:</span>
                      <a href="mailto:mail@example.com">info@iclick.ae</a>
                    </li>
                    <li>
                      <span className="contact-info-label">Working Days/Hours:</span>
                      24/7 - 9:00AM to 10:00PM
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="widget">
                  <h4 className="widget-title">Information</h4>

                  <ul className="links">
                    <li>
                      <a href="/">Company Portfolio</a>
                    </li>
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/">Shipping &amp; Retruns</a>
                    </li>
                    <li>
                      <a href="/">Delivery Information</a>
                    </li>
                    <li>
                      <a href="/">Order &amp; Collect FAQs</a>
                    </li>
                    <li>
                      <a href="/">Terms of Use</a>
                    </li>
                    <li>
                      <a href="/">Terms of Service</a>
                    </li>
                    <li>
                      <a href="/">About Us</a>
                    </li>
                    <li>
                      <a href="/">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div className="widget">
                  <h4 className="widget-title">My Account</h4>

                  <ul className="links">
                    <li>
                      <a href="my-account.html">My Account</a>
                    </li>
                    <li>
                      <a href="/">Orders History</a>
                    </li>
                    <li>
                      <a href="/">Advanced Search</a>
                    </li>
                    <li>
                      <a href="/" className="login-link">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div className="widget">
                  <h4 className="widget-title">Services</h4>

                  <ul className="links">
                    <li>
                      <a href="/">#WeFixIt</a>
                    </li>
                    <li>
                      <a href="/">Business</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="widget widget-newsletter">
              <h4 className="widget-title">Follow Us</h4>
              <p>SIGN UP FOR NEWSLETTER!</p>
              <form action="#">
                <input type="email" className="form-control" placeholder="Email address" required />

                <input type="submit" className="btn" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterMaps isMarkerShown={true} />

    <div className="container">
      <div className="footer-bottom">
        <p className="footer-copyright">iClick Electronics. &copy; {date.getFullYear()} All Rights Reserved</p>
        <img src="/static/images/payments.png" alt="payment methods" className="footer-payments" />

        <div className="social-icons">
          <a href="/" className="social-icon" target="_blank">
            <i className="icon-facebook" />
          </a>
          <a href="/" className="social-icon" target="_blank">
            <i className="icon-twitter" />
          </a>
          <a href="/" className="social-icon" target="_blank">
            <i className="icon-linkedin" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
