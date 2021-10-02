import React, { useEffect, useState } from "react";

type UserButtonProps = {
  userId: number;
  rowNumber: number;
  isActive?: boolean;
  setActive: (index: number) => void;
};
const UserButton = ({
  userId,
  rowNumber,
  isActive = false,
  setActive,
}: UserButtonProps) => {
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    setIndex(userId);
  }, []);
  const handleClick = () => {
    setActive(index);
  };
  return (
    <span className={isActive ? "active" : ""} onClick={handleClick}>
      {userId === -1 ? "All" : userId}
    </span>
  );
};

export default UserButton;
