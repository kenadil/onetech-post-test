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
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(rowNumber);
  }, [rowNumber]);
  const handleClick = () => {
    setActive(index);
    console.log(index);
  };
  return (
    <span className={isActive ? "active" : ""} onClick={handleClick}>
      {userId}
    </span>
  );
};

export default UserButton;
