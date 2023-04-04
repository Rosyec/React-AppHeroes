import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Card } from "../../shared/components/card/Card";
import { getHeroeById } from "../helpers/getHeroeById";

export const HeroePage = () => {
  const { id } = useParams();

  const hero = useMemo(() => getHeroeById(id), [id]);

  if (hero === undefined) {
    return <Navigate to={"/app/dc/"}></Navigate>;
  }

  return (
    <>
      <div className="container m-3 animate__animated animate__fadeIn">
        <div className="row d-flex justify-content-center">
          <div
            className="col-md-6 col-sm-12 rounded"
            style={{
              padding: "1em",
              boxShadow: "0px 20px 50px 0px rgba(0,0,0,0.3)",
            }}
          >
            <Card data={hero}></Card>
          </div>
        </div>
      </div>
    </>
  );
};
