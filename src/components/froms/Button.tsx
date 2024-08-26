import { twMerge } from "tailwind-merge";
import { TButtonProps } from "../../types/TTodo";

const Button = (props: TButtonProps) => {
    const { className, children = "버튼", ...rest } = props;
    return (
        <>
            <button
                className={twMerge(
                    `py-2 px-4 text-white bg-blue-400 rounded`,
                    className
                )}
                {...rest}
            >
                {children}
            </button>
        </>
    );
};
export default Button;
