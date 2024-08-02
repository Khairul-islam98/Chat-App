/* eslint-disable @typescript-eslint/no-explicit-any */

type InputProps = {
    name: string;
    value?: string;
    type?: string;
    onChange?: (e: any) => void;
    className?: string;
    onKeyDown?: (e: any) => void;
    disabled?: boolean;
}


const Input = ({type = "text", name, value, onChange, className, onKeyDown, disabled}: InputProps) => {
    return (
        <input value={value} onChange={onChange} onKeyDown={onKeyDown} disabled={disabled} type={type} className={`flex-1 bg-transparent px-3 py-1 border-2 border-gray-300 rounded-full placeholder-gray-300 ${className}`} placeholder={name} />
    );
};

export default Input;