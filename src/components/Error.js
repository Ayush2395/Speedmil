import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Error() {
  return (
    <>
      <section>
        <div
          className="main d-flex justify-content-center align-items-center"
          style={{ minHeight: "90vh" }}
        >
          <h1 className="text-primary">
            <FontAwesomeIcon
              icon="fa-solid fa-triangle-exclamation"
              color="crimson"
            />{" "}
            404, Page not found
          </h1>
        </div>
      </section>
    </>
  );
}
