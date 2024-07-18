interface BtnProps {
  handleInput: (e: React.MouseEvent<HTMLButtonElement>) => void;
  keypad: string;
}

const Btn = ({ handleInput, keypad }: BtnProps) => {
  return (
    <button value={keypad} onClick={handleInput}>
      {keypad}
    </button>
  );
};

export default Btn;
