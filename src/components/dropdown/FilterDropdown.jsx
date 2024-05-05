import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataFilesByFileName,
  getListFiles,
  setFilters,
} from "../../redux/features/filesSlice";
import { Filters } from "../filters/Filters";
import "./index.css";

export const FilterDropdown = () => {
  const dispatch = useDispatch();
  const { listFiles, isLoading } = useSelector((state) => state.files);

  const onClickOpt = (file) => {
    dispatch(setFilters(file));
    dispatch(getDataFilesByFileName(file));
  };

  useEffect(() => {
    dispatch(getListFiles());
  }, []);

  return (
    <div className="container-dropdown">
      {!isLoading && listFiles.length > 0 && (
        <DropdownButton id="dropdown-basic-button" title="Filter File">
          {listFiles?.map((file, index) => (
            <Dropdown.Item key={index} onClick={() => onClickOpt(file)}>
              {file}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      )}
      <Filters />
    </div>
  );
};
