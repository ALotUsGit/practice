import { useId } from "react";
import { TCheckedProps } from "../../types/TTodo";
import { twMerge } from "tailwind-merge";

const CheckBox = (props: TCheckedProps) => {
    const { children, className, ...rest } = props;
    const id = useId();
    return (
        <label className="flex items-center gap-2 text-zinc-800">
            <input
                id={id}
                type="checkbox"
                className={twMerge(`text-zinc-500 rounded-sm`, className)}
                {...rest}
            />
            {children}
        </label>
    );
};
export default CheckBox;
