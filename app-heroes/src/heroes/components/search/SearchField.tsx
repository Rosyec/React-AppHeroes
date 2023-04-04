import React, { SyntheticEvent } from "react";

export const SearchField = ({ onInputPatern }: Props) => {
  return (
    <>
      <div className="row">
        <h1>Buscador de héroes</h1>
        <div
          className="row bg-white SearchField d-flex justify-content-center align-items-center"
          style={{ width: "100%" }}
        >
          <button
            style={{ height: "40px", width: "40px" }}
            className=""
            type="button"
          >
            <a className="text-dark">
              <i className="bi bi-search"></i>
            </a>
          </button>
          <input
            type="text"
            placeholder="Realizar busqueda..."
            onInput={onInputPatern}
            style={{ textAlign: "left", display: "flex", flex: "1" }}
          />
        </div>
      </div>
    </>
  );
};

interface Props {
  onInputPatern: (input: SyntheticEvent) => void;
}
