import { addNewUser, getAllUsers } from "@/app/db/users";

export const GET = async () => {
  const users = await getAllUsers();
  return Response.json(users);
};

export const POST = async (request: Request) => {
  const {name}: {name: string} = await request.json()
  const newUser = await addNewUser(name);

  return Response.json(newUser);
};
