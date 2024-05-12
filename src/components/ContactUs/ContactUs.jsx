import React from 'react'
import classes from "./ContactUs.module.css"
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.jpeg";
const ContactUs = () => {
  return (
    <>
      <div className={classes.background}>
        {/* <div className={classes.registerForm}> */}
        <div className={classes.card}>
        <h1 className={classes.heading} style={{marginRight:"250px"}}>Contact </h1><br></br>
        {/* <div>
        <h1 style={{marginLeft:'80px'}}>FACULTY COORDINATORS</h1>
        </div> */}
        {/* <div className={classes.card2}>
            <div className={classes.column}>
              <div>
                <h1>Kanimozhi Selvi</h1>
                <div>
                  <img src={img2} alt="" />
                  <h1>AI DEPT</h1>
                  <h1>Phone No : xxxxxxxxxx</h1>
                </div>
              </div>
            </div>
            <div className={classes.column}>
              
              <div>
                <h1>PLACEHOLDER</h1>
                <div>
                  <img src={img2} alt="" />
                  <h1>  CSE DEPT</h1>
                  <h1>Phone No : xxxxxxxxxx</h1>
                </div>
              </div>
            </div>

          </div> */}
          <div>
          <h1 style={{marginLeft:'80px'}}>STUDENT COORDINATORS</h1>
        </div>


          <div className={classes.card2}>

            <div className={classes.column}>
              <div>
                <h1>JEYACHANDRAN J</h1>
                <div>
                  <img src={img1} alt="" />
                  <h1>AIML DEPT</h1>
                  <h1>Phone No : 7418800609</h1>
                </div>
              </div>
            </div>
            <div className={classes.column}>
              <div>
                <h1>Srinath V V</h1>
                <div>
                  <img src={img2} alt="" />
                  <h1>CSE DEPT</h1>
                  <h1>Phone No : 90429 67878</h1>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default ContactUs