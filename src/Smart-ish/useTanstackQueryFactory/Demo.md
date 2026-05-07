```tsx
type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

async function fetchTodos(): Promise<Todo[]> {
  // ...
  return [];
}

export const todos = defineQuery({
  queryKey: ["todos"] as const,
  queryFn: fetchTodos,
  staleTime: 5000,
});

const selectCompletedTodos = (todos: Todo[]) =>
  todos.filter((t) => t.completed);
export const selectTodoTitles = (todos: Todo[]) => todos.map((t) => t.title);
export const selectTodoCount = (todos: Todo[]) => todos.length;

export const useTodos = todos.use;
export const useCompletedTodos = todos.derive(selectCompletedTodos);
export const useTodo = todos.deriveParam(
  (id: string) => (todos) => todos.find((t) => t.id === id),
);

const { data: todos } = useTodos();
const { data: completed } = useCompletedTodos();
const { data: todo } = useTodo(todoId);

const cachedTodos = todos.get(queryClient);
const guaranteedTodos = await todos.ensure(queryClient);
```
