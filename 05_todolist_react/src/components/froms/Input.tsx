import { twMerge } from "tailwind-merge";
import { TInputProps } from "../../types/TTodo";

const Input = (props: TInputProps) => {
    const { className, ...rest } = props;
    return (
        <>
            <input
                className={twMerge(
                    `flex-auto py-2 px-4 border-zinc-400 rounded`,
                    className
                )}
                {...rest}
            />
        </>
    );
};
export default Input;
