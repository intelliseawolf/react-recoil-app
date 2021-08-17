import { useRecoilState } from "recoil";

import { todoListFilterState } from "./TodoList";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  function updateFilter(e) {
    setFilter(e.target.value);
  }

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};

export default TodoListFilters;
