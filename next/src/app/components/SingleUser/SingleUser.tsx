import { User } from "@/app/db/users";

type SingleUserProps = {
  id: number;
};

export const SingleUser = async ({ id }: SingleUserProps) => {
  const response = await fetch(`http://localhost:3000/users/${id}/api`);
  const user: User = await response.json();

  return (
    <div>
      <p>
        {user.name} [{user.id}]
      </p>
    </div>
  );
};
