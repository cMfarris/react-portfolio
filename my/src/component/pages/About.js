import React from "react";
import picture from "../../assets/picture.jpeg"

function About() {
    const aboutpage = {
        width:"100%",
        display:"flex",
        flexwrap:"wrap",
        justifyContent:"space-around",
        backgroundColor: "#D1FFD7",
    };
    const imageStyle = {
        height: "250px",
        width: "250px",
        borderRadius: "5px",
        padding: "20px",
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto",
      };
      const Tstyle = {
        display: "flex",
        textAlign: "center",
        fontSize: "20px",
        padding: "90px",
      };
      const h1 = {
        fontSize: "50px",
        marginTop: "20px",
      };
      return (
        <section style={aboutPage}>
          <h1 style={h1}>About Me</h1>
          <div className="container-content">
            <div className="profile-picture" style={imageStyle}>
              <img src={picture} alt="picture" />
            </div>
            <p style={Tstyle}>
              <br />
              Hello, my name is Celeste Farris. I am a developer who is looking for more edcuation and to learn more in coding.
              To help me go further into coding and working in webpage development.
              <br />
            </p>
          </div>
        </section>
      );
}