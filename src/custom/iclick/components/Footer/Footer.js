import React from "react";

const date = new Date();

const Footer = (props) => (
  <footer className="footer">
    <div className="footer-middle">
      <div className="container">
        <div className="footer-ribbon">Get in touch</div>
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-5">
                <div className="widget">
                  <ul className="contact-info">
                    <li>
                      <span className="contact-info-label">Address:</span>Al Seef, Dubai, UAE
                    </li>
                    <li>
                      <span className="contact-info-label">Phone:</span>
                      <a href="tel:">043 (CLICK) 1</a>
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
                  <h4 className="widget-title">My Account</h4>

                  <ul className="links">
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
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

              <div className="col-md-5">
                <div className="widget">
                  <h4 className="widget-title">Main Features</h4>

                  <ul className="links">
                    <li>
                      <a href="/">Super Fast Magento Theme</a>
                    </li>
                    <li>
                      <a href="/">1st Fully working Ajax Theme</a>
                    </li>
                    <li>
                      <a href="/">20 Unique Homepage Layouts</a>
                    </li>
                    <li>
                      <a href="/">Powerful Admin Panel</a>
                    </li>
                    <li>
                      <a href="/">Mobile &amp; Retina Optimized</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="widget widget-newsletter">
              <h4 className="widget-title">Subscribe newsletter</h4>
              <p>Get all the latest information on Events,Sales and Offers. Sign up for newsletter today</p>
              <form action="#">
                <input type="email" className="form-control" placeholder="Email address" required />

                <input type="submit" className="btn" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

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
