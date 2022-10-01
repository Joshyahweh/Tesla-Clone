import React from "react";
import { Fade } from "react-reveal";

export const Sections = (props) => {
  // console.log(props)
  const styles = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${props.backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItem: "center",
  };

  return (
    <div className="sec-container">
      <section style={styles}>
        <Fade bottom cascade>
          <main>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </main>
        </Fade>
        <div className="btn-container">
          <Fade left>
            <button>{props.leftBtnText}</button>
          </Fade>
          <Fade right>
            {props.rightBtnText && (
              <button className="btn-right">{props.rightBtnText}</button>
            )}
          </Fade>
        </div>
        <img src="../images/down-arrow.svg" alt="" />
      </section>
    </div>
  );
};
