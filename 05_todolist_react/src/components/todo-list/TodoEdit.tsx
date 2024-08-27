import Input from "../froms/Input";
import Button from "../froms/Button";
import { useState } from "react";

const TodoEdit = ({ updateList }: { updateList: (value: string) => void }) => {
    const [value, setValue] = useState("");
    const addList = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value === "") return;
        updateList(value); // 배열에 Input의 value 값 추가
        setValue(""); // 리스트가 추가된 후 input 비우기
    };

    return (
        <form className="flex items-center gap-2 mb-4" onSubmit={addList}>
            <Input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button>추가</Button>
        </form>
    );
};
export default TodoEdit;
