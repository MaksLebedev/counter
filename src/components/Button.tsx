import React from "react";

type PropsButtonTypes = {
  title: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

export const Button = ({
  title,
  onClick,
  className,
  disabled,
}: PropsButtonTypes) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
