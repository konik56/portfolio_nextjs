import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-[#bdb6fc] group disabled:scale-100 border-2 border-[#8a7fff] disabled:bg-opacity-50 dark:bg-[#554f96]  transition-all outline-none hover:scale-105 hover:bg-[#8a7fff] focus:scale-105  text-white w-[10rem]  px-7 py-3 rounded-full justify-center flex items-center gap-2"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin border-white rounded-full border-b-2"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all
         group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
