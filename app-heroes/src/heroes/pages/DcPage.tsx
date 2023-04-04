import { Slider } from "../../shared/components/slider/Slider";
import { getHeroeByPublisher } from "../helpers/getHeroeByPublisher";
import { Hero } from "../interfaces/heroe";

export const DcPage = () => {
  const getHeroes = (): Hero[] => {
    return getHeroeByPublisher("DC Comics");
  };

  return (
    <>
      <div className="container m-3 animate__animated animate__fadeIn">
        <div className="row">
          <Slider data={getHeroes()}></Slider>
        </div>
      </div>
    </>
  );
};
