import Button from "../atoms/Button";

const PrimaryButton = ({ children, ...props }) => {
  return (
    <Button colorScheme="blue" {...props}>
      {children}
    </Button>
  );
};

export default PrimaryButton;