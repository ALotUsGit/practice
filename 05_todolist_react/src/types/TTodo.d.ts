export type TTodo = {
    id: number;
    txt: string;
    isCompleted: boolean;
};

export type TButtonProps = React.ComponentPropsWithoutRef<"button">;

export type TCheckedProps = Omit<
    React.ComponentPropsWithoutRef<"input">,
    "type" | "id"
>;

export type TInputProps = Omit<
    React.ComponentPropsWithoutRef<"input">,
    "type"
> & { type: "text" | "name" | "number" | "email" | "password" | "date" };
