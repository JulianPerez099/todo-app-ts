import { FilterValue } from "../types";
import { FILTERS_BUTTONS } from "./consts";

interface Props {
  filterSelected: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange,
}) => {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { title, href }]) => {
        const isSelected = filterSelected === key;
        const className = isSelected ? "selected" : "";

        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(event) => {
                event.preventDefault();
                onFilterChange(key as FilterValue);
              }}
            >
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
