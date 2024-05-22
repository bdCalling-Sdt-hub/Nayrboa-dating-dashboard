const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h2 className={`text-xl ${className} text-[#F7F7F7]`}>{children}</h2>;
};

export default Title;
