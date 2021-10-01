import React, { useEffect, useState } from "react";
import UserButton from "../UserButton/UserButton";
import "./UserList.css";

const UserList = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    setActive(0);
  }, []);

  const users = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="user-list">
      <div className="container">
        <div className="inner">
          <nav>
            {users.map((user, index) => (
              <UserButton
                userId={user}
                rowNumber={index}
                isActive={index === active}
                setActive={setActive}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default UserList;
