export const Notice = ({ children, className }) => {
  return (
    <blockquote
      className={`mt-5 border-l-2 border-blue-400 font-light pl-4 ${className}`}
    >
      {children}
    </blockquote>
  );
};
