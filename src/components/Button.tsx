import Spinner from "./Spinner";

type ButtonProps = {
  text?: string;
  className?: string;
  secondary?: boolean;
  onclick?: () => void;
  loading?: boolean;
};
const Button = ({
  text = "Button",
  className,
  secondary,
  onclick,
  loading = false,
}: ButtonProps) => {
  return (
    <button
      className={`py-2 px-9 rounded-full  flex justify-center items-center gap-2  text-white border-2 border-white hover:bg-myPink transition-all hover:drop-shadow-lg ${secondary ? "bg-myPink" : "bg-myBlue"} ${className} ${loading && 'cursor-wait'}`}
      onClick={onclick}
      disabled={loading}
    >
        {loading && <Spinner />}
        {text}
    </button>
  );
};

export default Button;
