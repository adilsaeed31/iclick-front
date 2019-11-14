import React from "react";
import PropTypes from "prop-types";
import FooterMaps from "custom/iclick/components/FooterMaps";
import Link from "custom/iclick/components/Link";
import FooterScroller from "custom/iclick/components/Footer/FooterScroller";
import { Waypoint } from "react-waypoint";

const date = new Date();

const Footer = ({ isVisible, handleEnter, handleLeave }) => (
  <Waypoint onEnter={handleEnter} onLeave={handleLeave}>
    <footer className="footer">
      {isVisible && <FooterScroller />}

      <div className="footer-middle">
        <div className="container">
          <div className="footer-ribbon">Get in touch</div>
          <div className="row is-border-bottom">
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
                        <Link route="tel:">04 3254251</Link>
                      </li>
                      <li>
                        <span className="contact-info-label">Email:</span>
                        <Link route="mailto:mail@example.com">info@iclick.ae</Link>
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
                        <Link route="/">Company Portfolio</Link>
                      </li>
                      <li>
                        <Link route="/">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link route="/">Shipping &amp; Retruns</Link>
                      </li>
                      <li>
                        <Link route="/">Delivery Information</Link>
                      </li>
                      <li>
                        <Link route="/">Order &amp; Collect FAQs</Link>
                      </li>
                      <li>
                        <Link route="/">Terms of Use</Link>
                      </li>
                      <li>
                        <Link route="/">Terms of Service</Link>
                      </li>
                      <li>
                        <Link route="/">About Us</Link>
                      </li>
                      <li>
                        <Link route="/">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="widget">
                    <h4 className="widget-title">My Account</h4>

                    <ul className="links">
                      <li>
                        <Link route="my-account.html">My Account</Link>
                      </li>
                      <li>
                        <Link route="/">Orders History</Link>
                      </li>
                      <li>
                        <Link route="/">Advanced Search</Link>
                      </li>
                      <li>
                        <Link route="/" className="login-link">
                          Login
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="widget">
                    <h4 className="widget-title">Services</h4>

                    <ul className="links">
                      <li>
                        <Link route="/">#WeFixIt</Link>
                      </li>
                      <li>
                        <Link route="/">Business</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="widget widget-newsletter">
                <h4 className="widget-title">Follow Us</h4>
                <div className="social-icons">
                  <a href="https://www.facebook.com" className="social-icon" target="_blank">
                    <i className="icon-facebook" />
                  </a>
                  <a href="https://www.twitter.com" className="social-icon" target="_blank">
                    <i className="icon-twitter" />
                  </a>
                  <a href="https://www.instagram.com" className="social-icon" target="_blank">
                    <i className="icon-instagram" />
                  </a>
                  <a href="https://plus.google.com" className="social-icon" target="_blank">
                    <i className="icon-gplus" />
                  </a>
                </div>

                <p className="news-signup">SIGN UP FOR NEWSLETTER!</p>

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
          <img className="payment-images" src="/static/images/payments.png" alt="payment methods" />

          <p className="footer-copyright">iClick Electronics. &copy; {date.getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  </Waypoint>
);

Footer.propTypes = {
  handleEnter: PropTypes.func.isRequired,
  handleLeave: PropTypes.func.isRequired,
  isMarkerShown: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired
};

Footer.defaultProps = {
  isMarkerShown: true,
  isVisible: false
};

export default Footer;
