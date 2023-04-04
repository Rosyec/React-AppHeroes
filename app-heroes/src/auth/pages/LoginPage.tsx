import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../../assets/avatar.jpg";
import { FormToLogin } from "../../heroes/components/form/FormToLogin";
import { AuthContext } from "../context/AuthContext";
import "./LoginPage.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [Label, setLabel] = useState("Usuario");
  const Context = useContext(AuthContext);

  const changeTitlePage = (newLabel: React.FormEvent<HTMLInputElement>) => {
    const { value } = newLabel.target as HTMLInputElement;
    setLabel((newLabel.target as HTMLInputElement).value);
    if (value.length === 0) setLabel("Usuario");
  };

  const onLogin = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const username = evt.currentTarget.elements.namedItem(
      "username"
    ) as HTMLInputElement;
    Context.onLogin(username.value);
    navigate("/app/dc", { replace: true });
  };

  return (
    <>
      <div className="container text-center animate__animated animate__fadeIn">
        <div className="login d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col img-avatar__ia">
                  <img id="myImage" src={Avatar}></img>
                </div>
              </div>
              <div className="row title">
                <span className="display-5">{Label}</span>
              </div>
              <FormToLogin onLogin={onLogin} onTitle={changeTitlePage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
