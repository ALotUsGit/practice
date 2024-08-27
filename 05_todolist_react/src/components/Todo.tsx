import { useId, useState } from "react";
import TodoEdit from "./todo-list/TodoEdit";
import TodoList from "./todo-list/TodoList";
import { TTodo } from "../types/TTodo";

const Todo = () => {
    const [lists, setLists] = useState<TTodo[]>([]);
    const updateList = (txt: string) => {
        // 인풋에 추가된 값은 txt, 체크값은 false로 lists 배열에 추가한다.
        setLists((list) => [
            ...list,
            { id: Math.random(), txt, isCompleted: false },
        ]);
    };

    const toggleCheck = (id: number) => {
        // id값을 확인해 체크 여부 판단
        setLists((lists) =>
            lists.map((list) =>
                list.id === id
                    ? { ...list, isCompleted: !list.isCompleted }
                    : list
            )
        );
    };

    // id값이 선택된 것과 다른 것만 삭제
    const deleted = (id: number) => {
        setLists((lists) => lists.filter((list) => list.id !== id));
    };

    return (
        <div className="my-4 mx-6">
            <h1 className="mb-6 text-lg text-center font-bold">
                Make a React Version of a TodoList
            </h1>
            <TodoEdit updateList={updateList} />
            <TodoList
                lists={lists}
                toggleCheck={toggleCheck}
                deleted={deleted}
            />
        </div>
    );
};
export default Todo;
