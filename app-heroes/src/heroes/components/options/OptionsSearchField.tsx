import { Hero } from "../../interfaces/heroe";

export const OptionsSearchField = ({ input, options, onSelected }: Props) => {
  return (
    <>
      <ul className="list-group">
        {input.length > 0 &&
          options.map((value) => {
            return (
              <li
                key={value.id}
                onClick={() => onSelected(value.id)}
                className="list-group-item list-group-item-action animate__animated animate__fadeIn p-2"
              >
                {" "}
                {value.superhero}
              </li>
            );
          })}
        {input.length > 0 && options.length <= 0 && (
          <li className="list-group-item list-group-item-action disabled animate__animated animate__fadeIn p-2">
            {" "}
            No hay resultados para <strong> "{input}" </strong>{" "}
          </li>
        )}
      </ul>
    </>
  );
};

interface Props {
  input: string;
  options: Hero[];
  onSelected: (id: string) => void;
}
