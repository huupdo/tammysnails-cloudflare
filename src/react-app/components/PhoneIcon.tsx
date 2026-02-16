// src/components/PhoneIcon.tsx
import { FiPhone } from "react-icons/fi";

interface PhoneIconProps {
  className?: string;
}

const PhoneIcon = ({ className = "" }: PhoneIconProps) => {
  return <FiPhone className={`inline-block mr-2 text-red-100 ${className}`} />;
};

export default PhoneIcon;
