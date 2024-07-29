import { FaCheckCircle } from "react-icons/fa";

interface FormSuccesProps {
  message?: string;
}

export const FormSucces = ({ message }: FormSuccesProps) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-200 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerlad-500">
      <FaCheckCircle className="w-4 h-4 " />
      <p>{message}</p>
    </div>
  );
};
