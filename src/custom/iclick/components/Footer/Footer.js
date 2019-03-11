import React from 'react';

const date = new Date();

const Footer = ({ ...props }) => (
	<footer class="footer">
		<div class="footer-middle">
			<div class="container">
				<div class="footer-ribbon">Get in touch</div>
				<div class="row">
					<div class="col-lg-8">
						<div class="row">
							<div class="col-md-5">
								<div class="widget">
									<ul class="contact-info">
										<li>
											<span class="contact-info-label">Address:</span>123 Street Name, City,
											England
										</li>
										<li>
											<span class="contact-info-label">Phone:</span>Toll Free{' '}
											<a href="tel:">(123) 456-7890</a>
										</li>
										<li>
											<span class="contact-info-label">Email:</span>{' '}
											<a href="mailto:mail@example.com">mail@example.com</a>
										</li>
										<li>
											<span class="contact-info-label">Working Days/Hours:</span>
											Mon - Sun / 9:00AM - 8:00PM
										</li>
									</ul>
								</div>
							</div>
							<div class="col-md-3">
								<div class="widget">
									<h4 class="widget-title">My Account</h4>

									<ul class="links">
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
											<a href="#">Orders History</a>
										</li>
										<li>
											<a href="#">Advanced Search</a>
										</li>
										<li>
											<a href="#" class="login-link">
												Login
											</a>
										</li>
									</ul>
								</div>
							</div>

							<div class="col-md-5">
								<div class="widget">
									<h4 class="widget-title">Main Features</h4>

									<ul class="links">
										<li>
											<a href="#">Super Fast Magento Theme</a>
										</li>
										<li>
											<a href="#">1st Fully working Ajax Theme</a>
										</li>
										<li>
											<a href="#">20 Unique Homepage Layouts</a>
										</li>
										<li>
											<a href="#">Powerful Admin Panel</a>
										</li>
										<li>
											<a href="#">Mobile &amp; Retina Optimized</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-4">
						<div class="widget widget-newsletter">
							<h4 class="widget-title">Subscribe newsletter</h4>
							<p>
								Get all the latest information on Events,Sales and Offers. Sign up for newsletter today
							</p>
							<form action="#">
								<input type="email" class="form-control" placeholder="Email address" required />

								<input type="submit" class="btn" value="Subscribe" />
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="footer-bottom">
				<p class="footer-copyright">iClick Electronics. &copy; {date.getFullYear()} All Rights Reserved</p>
				<img src="/static/images/payments.png" alt="payment methods" class="footer-payments" />

				<div class="social-icons">
					<a href="#" class="social-icon" target="_blank">
						<i class="icon-facebook" />
					</a>
					<a href="#" class="social-icon" target="_blank">
						<i class="icon-twitter" />
					</a>
					<a href="#" class="social-icon" target="_blank">
						<i class="icon-linkedin" />
					</a>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
