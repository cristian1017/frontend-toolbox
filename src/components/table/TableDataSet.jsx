import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFiles } from "../../redux/features/filesSlice";
import { columns } from "../../constants/columns.constants";
import { useState } from "react";
import { sortFiles } from "../../utils/sort.utils";
import Table from "react-bootstrap/Table";
import { Skeleton } from "../skeleton/Skeleton";
import "./index.css";

export const TableDataSet = () => {
  const dispatch = useDispatch();
  const { data, isLoading, filter } = useSelector((state) => state.files);
  
  const [filesData, setFilesData] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const filteredData = data?.filter((file) => file.lines?.length > 0);
      const sortedData = sortFiles(filteredData);
      setFilesData(sortedData);
    }
  }, [data, filter]);

  useEffect(() => {
    dispatch(getDataFiles());
  }, []);

  return (
    <div className="container-table">
      {isLoading ? (
        <Skeleton />
      ) : filter && data[0]?.lines?.length < 1 ? (
        <h2>No results found</h2>
      ) : (
        <Table responsive bordered={true}>
          <thead>
            <tr>
              {columns.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filesData.map((file, fileIndex) =>
              file.lines?.map((line, lineIndex) => (
                <tr key={`${fileIndex}-${lineIndex}`}>
                  <td>{file?.file}</td>
                  <td>{line?.text}</td>
                  <td>{line?.number}</td>
                  <td>{line?.hex}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      )}
    </div>
  );
};
