import { TTodo } from "../../types/TTodo";
import TodoListItem from "./TodoListItem";

const TodoList = ({
    lists,
    toggleCheck,
    deleted
}: {
    lists: TTodo[];
        toggleCheck: (id: number) => void;
        deleted: (id: number) => void;
}) => {
    return (
        <ul className="flex flex-col gap-2">
            {lists.length === 0 ? (
                <li className="text-zinc-700 text-center">
                    추가된 항목이 없습니다.
                </li>
            ) : (
                lists.map((list) => (
                    <TodoListItem
                        list={list}
                        toggleCheck={toggleCheck}
                        deleted={deleted}
                        key={list.id}
                    />
                ))
            )}
        </ul>
    );
};
export default TodoList;
