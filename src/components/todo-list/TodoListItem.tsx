import { TTodo } from "../../types/TTodo";
import Button from "../froms/Button";
import CheckBox from "../froms/CheckBox";

import deleteSvg from "./../../assets/delete.svg";

const TodoListItem = ({
    list,
    toggleCheck,
    deleted,
}: {
    list: TTodo;
    toggleCheck: (id: number) => void;
    deleted: (id: number) => void;
}) => {
    return (
        <li className="flex justify-between items-center gap-2 py-3 px-4 bg-zinc-200 rounded">
            <CheckBox
                checked={list.isCompleted}
                onChange={() => toggleCheck(list.id)}
            >
                <span className={`${list.isCompleted && "text-zinc-500"}`}>
                    {list.txt}
                </span>
            </CheckBox>
            <Button
                className="p-0 bg-transparent"
                onClick={() => deleted(list.id)}
            >
                <img src={deleteSvg} alt="Deleted" className="w-5 h-5" />
            </Button>
        </li>
    );
};
export default TodoListItem;
