import { Link, type LinkProps } from "react-router-dom";

interface ButtonProps extends LinkProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  to,
  className,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const baseClasses = "px-4 py-2 rounded-md font-semibold text-center transition-colors duration-200";
  
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className || ''}`;

  return (
    <Link to={to} className={combinedClasses} {...props}>
      {children}
    </Link>
  );
};

export default Button;