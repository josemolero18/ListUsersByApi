import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { SearchValue } from "./components/SearchValue";
import { getUsers } from "./helpers/getUsers";

export const ConsumerUsers = () => {
  const [person, setPerson] = useState([]);

  const AddUser = async () => {
    const users = await getUsers();
    setPerson(users);
  };

  useEffect(() => {
    AddUser();
  }, []);

  const { searchValue, filteredUsers, handleSearchChange } = SearchValue({
    users: person,
  });

  return (
    <>
      <h1 className="text-center my-4">Users By Google</h1>

      <form className="container">
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Buscar por nombre"
          className="form-control w-50 my-4"
        />
      </form>

      <Card user={filteredUsers} />
    </>
  );
};
