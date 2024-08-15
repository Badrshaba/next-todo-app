import { getToDoListAction } from "@/actions/todo.action";
import AddTodoForm from "@/components/AddTodoForm";
import { TableDemo } from "@/components/TableDemo";

const Home = async () => {
  const todos = await getToDoListAction();
  return (
    <main className=" container">
      <div className="mx-auto flex w-full lg:w-3/4 flex-col justify-center space-y-4 mt-10">
        <AddTodoForm />
        <TableDemo todos={todos} />
      </div>
    </main>
  );
};

export default Home;
