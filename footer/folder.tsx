// components/Footer.js
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerCategory}>
      <div className={styles.container}>
        <h2 className={styles.footerCategoryTitle}>Brand Directory</h2>
        <div className={styles.footerCategoryBox}>
          {["Makeup Kit", "Liner", "Lipstick", "Perfume", "Body Soap", "Scrub", "Hair Gel", "Hair Colors", "Hair Dye", "Sunscreen", "Skin Lotion"].map((item, index) => (
            <a key={index} href="#" className={styles.footerCategoryLink}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className={styles.footerNav}>
      <div className={styles.container}>
        {[
          {
            title: "Popular Categories",
            links: ["Fashion", "Electronic", "Cosmetic", "Health", "Watches"],
          },
          {
            title: "Products",
            links: ["Fashion", "Electronic", "Cosmetic", "Health", "Watches"],
          },
          {
            title: "Our Company",
            links: ["Delivery", "Legal Notice", "Terms and Conditions", "About us", "Secure Payment"],
          },
          {
            title: "Services",
            links: ["Prices Drop", "New Products", "Best Sales", "Contact us", "Sitemap"],
          },
          {
            title: "Contact",
            links: [
              { text: "419 State 414 Rte Beaver Dams, New York(NY), 14812, USA", icon: "location-outline" },
              { text: "(607) 936-8058", icon: "call-outline", href: "tel:+607936-8058" },
              { text: "example@gmail.com", icon: "mail-outline", href: "mailto:example@gmail.com" },
            ],
          },
        ].map((section, index) => (
          <ul key={index} className={styles.footerNavList}>
            <li className={styles.footerNavItem}>
              <h2 className={styles.navTitle}>{section.title}</h2>
            </li>
            {section.links.map((link, i) => (
              <li key={i} className={styles.footerNavItem}>
                {typeof link === "string" ? (
                  <a href="#" className={styles.footerNavLink}>
                    {link}
                  </a>
                ) : (
                  <div className={styles.flexItem}>
                    <div className={styles.iconBox}>
                      <ion-icon name={link.icon}></ion-icon>
                    </div>
                    {link.href ? (
                      <a href={link.href} className={styles.footerNavLink}>
                        {link.text}
                      </a>
                    ) : (
                      <address className={styles.content}>{link.text}</address>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>

    <div className={styles.footerBottom}>
      <div className={styles.container}>
        <img
          src="https://i.postimg.cc/43GKnVFF/payment.png"
          alt="payment method"
          className={styles.paymentImg}
        />
        <p className={styles.copyright}>
          Copyright &copy; <a href="#">Anon</a> all rights reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
