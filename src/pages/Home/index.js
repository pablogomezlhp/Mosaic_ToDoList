import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Exercise() {
  return (
    <>
      <container>
        <content>
          <div className="part-1">
            <section id="section-1">
              <h1>Now it's time to save all your achievements</h1>
              <p>Have control over your running routine</p>
              <Link to={"/exercises"}>
                {" "}
                <button>CHECK THE LOGS</button>{" "}
              </Link>
            </section>
          </div>
          <div className="part-2"></div>
        </content>
      </container>
    </>
  );
}
