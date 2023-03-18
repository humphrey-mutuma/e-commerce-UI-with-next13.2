import { Todo } from "@/typings";
import React from "react";

type PageParams = {
  params: {
    todo: string;
  };
};
async function fetchTodo(todoId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {
      next: { revalidate: 60 }, //ISR
    }
  );
  const todo: Todo = await res.json();
  return todo;
}
export default async function page({ params: { todo } }: PageParams) {
  const todo_item = await fetchTodo(todo);
  return (
    <div>
      {todo_item.id} {todo_item.title} {todo_item.completed}
    </div>
  );
}
