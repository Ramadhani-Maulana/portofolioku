/* eslint-disable no-unused-vars */
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container container">
        <div className="contact__content">
          <h3 className="contact__title"></h3>

          <div className="contact__info">
            {/* Email Card */}
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">rmadhani.mr@gmail.com</span>
              <a
                href="mailto:rmadhani.mr@gmail.com"
                className="contact__button"
              >
                Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">(+62) 81252298239</span>
              <a
                href="https://wa.me/6281252298239?text=Halo%20saya%20tertarik%20dengan%20portofolio%20Anda"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
