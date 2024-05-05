import Placeholder from "react-bootstrap/Placeholder";
import './index.css'
export const Skeleton = () => {
  return (
    <>
      <Placeholder
        as="p"
        animation="glow"
        data-testid="placeholder"
      >
        <Placeholder xs={12} />
      </Placeholder>
    </>
  );
};
