import React from "react";

type PropsButtonTypes = {
  title: string;
  onClick: () => void;
  className?: string;
};

export const Button = ({ title, onClick, className }: PropsButtonTypes) => {
  return <button className={className} onClick={onClick}>{title}</button>;
};
