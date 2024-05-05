import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import { useDispatch, useSelector } from "react-redux";
import { clearAllFilter, getDataFiles } from "../../redux/features/filesSlice";

export const Filters = () => {
  const dispatch = useDispatch();
  const { filter, isLoading, data } = useSelector((state) => state.files);

  const clearFilter = () => {
    dispatch(clearAllFilter());
    dispatch(getDataFiles());
  };

  return (
    <>
      {filter && !isLoading && (
        <Stack direction="horizontal" gap={2}>
          <Badge
            data-testid="clear-filter-badge"
            onClick={() => clearFilter()}
            bg={filter && data[0]?.lines?.length < 1 ? "danger" : "success"}
            style={{
              padding: ".6rem",
              cursor: "pointer",
              display: "flex",
              gap: ".5rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
            {filter}
          </Badge>
        </Stack>
      )}
    </>
  );
};
