import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchField } from "../components/search/SearchField";
import { OptionsSearchField } from "../components/options/OptionsSearchField";
import { getSugerencias } from "../helpers/getSugerencias";
import { Hero } from "../interfaces/heroe";
import "./BuscarPage.css";

export const BuscarPage = () => {
  const [Input, setInput] = useState("");
  const [Options, setOptions] = useState<Hero[]>([]);
  const navigate = useNavigate();

  const getOptions = () => {
    setOptions(getSugerencias(Input.toLowerCase()));
  };

  const onInput = ({ target }: SyntheticEvent) => {
    const { value } = target as HTMLInputElement;
    setInput(value);
  };

  const onSelected = (id: string) => {
    navigate(`/app/heroe/${id}`);
  };

  useEffect(() => {
    if (Input.length <= 0) return;
    getOptions();
  }, [Input]);

  return (
    <>
      <div
        className="container m-3 animate__animated animate__fadeIn"
        style={{ height: "300px", paddingTop: "100px" }}
      >
        <SearchField onInputPatern={onInput} />
        <div className="row mt-1 d-flex justify-content-center">
          <OptionsSearchField
            input={Input}
            options={Options}
            onSelected={onSelected}
          />
        </div>
      </div>
    </>
  );
};
