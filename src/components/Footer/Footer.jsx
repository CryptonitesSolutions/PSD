import React from "react";
import sambhavLogo from "../../assets/Logo.png";
import classes from "./Footer.module.css";


const grabbitinsta = "https://www.instagram.com/vox4rum?igsh=MTQ0Mnlnc3lvMTBoMg==";
const grabbitlinkedin = "https://www.linkedin.com/in/vox-4rum-5b5232308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
const YouTube = "https://youtube.com/@vox4rum?si=VwkacKJYiWIDS8Nl"


const grabbiturl = "https://www.grabbitdypcoe.in";
const Footer = () => {
  return (
    <div className={classes.footer_outer}>
      <div className={classes.footer}>
        <div className={classes.footer_first}>
          <div className={classes.footer_social_item}>
          </div>
        </div>
        <div className={classes.footer_first}>
          <div className={classes.footer_sambhav_image_div}>
            <div>
              <a
                href={grabbiturl}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
              </a>
            </div>
            <div>
            </div>
          </div>
          <div className={classes.footer_social_item}>
            <div>
              <a
                href={grabbitinsta}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png"
                  alt=""
                />
              </a>{" "}
            </div>
            <div>
              <a
                href={grabbitlinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/color/48/ffffff/linkedin-circled--v1.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                href={YouTube}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLTi2ub8_T_7xRaWF7ZU36P-8jSs9sP6TvGg&s"
                  alt=""
                />
              </a>
            </div>
    
            
          </div>
        </div>
        <div className={classes.footer_third}>
          <h2 className={classes.footer_menu_heading}>Contact Us</h2>
          <div className={classes.footer_contact}>
            <div className={classes.footer_contact_item_image}>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/marker.png"
                alt=""
              />
            </div>
            <div>
              <p>Kongu Engineering College</p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://cdn-icons-png.flaticon.com/512/646/646094.png"
                alt=""
              />
            </div>
            <div>
              <p>voxforumkec@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
