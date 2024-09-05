import React from "react";

type PropsButtonTypes = {
  title: string;
  onClick: () => void;
};

export const Button = ({ title, onClick }: PropsButtonTypes) => {
  return <button onClick={onClick}>{title}</button>;
};
