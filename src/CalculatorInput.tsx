interface CalculatorInputProps {
  input: string;
}

const CalculatorInput = ({ input }: CalculatorInputProps) => {
  return (
    <>
      <input type="text" value={input} readOnly />
    </>
  );
};

export default CalculatorInput;
