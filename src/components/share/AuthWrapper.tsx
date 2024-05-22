import React from "react";

const AuthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-1/4 bg-[#1C2428] p-8 rounded-lg ${className}`}>{children}</div>
  );
};

export default AuthWrapper;
