import React from "react";

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="mt-4 text-gray-600">{description}</p>
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
};

export default Card;
