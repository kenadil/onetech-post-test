import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../Utils/userContext";
import { TablePostType } from "../Table/Table";
import UserButton from "../UserButton/UserButton";
import "./UserList.css";

type UserListPropsType = {
  posts: TablePostType[];
  setActive: (index: number) => void;
};

const UserList = ({ posts, setActive }: UserListPropsType) => {
  const [users, setUsers] = useState<any[] | []>([]);

  useEffect(() => {
    setUsers(posts);
    console.log(users);
  }, [posts]);
  const active = useContext(UserContext);
  //   const [active, setActive] = useState(0);
  //   useEffect(() => {
  //     setActive(0);
  //   }, []);

  // const users = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="user-list">
      <div className="inner">
        <nav>
          <UserButton
            userId={-1}
            rowNumber={-1}
            isActive={-1 === active}
            setActive={setActive}
          />
          {users
            .filter(
              (v, i, a) => a.findIndex((t) => t.userId === v.userId) === i
            )
            .map((user, index) => (
              <UserButton
                userId={user.userId}
                key={index}
                rowNumber={index}
                isActive={user.userId === active}
                setActive={setActive}
              />
            ))}
        </nav>
      </div>
    </div>
  );
};

export default UserList;
