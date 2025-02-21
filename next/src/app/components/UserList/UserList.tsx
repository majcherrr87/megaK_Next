import { User } from "@/app/db/users";
import { revalidatePath } from "next/cache";

export const UserList = async () => {
  const response = await fetch("http://localhost:3000/users/api");
  const users: User[] = await response.json();

  const addUsers = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");
    if (!name) return;

    const response = await fetch("http://localhost:3000/users/api", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newUser = await response.json();
    revalidatePath("/users");
    console.log(newUser);
  };

  return (
    <div>
      <form action={addUsers}>
        <input type="text" name="name" />
        <button>Add new user</button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
