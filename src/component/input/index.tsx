import React from "react";

type InputProps = {
  label: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
};

const Input = ({ label, required, value, onChange }: InputProps) => {
  return (
    <div className="flex gap-[10px] w-[100%] flex-col">
      <p className="flex gap-[10px] font-Sen text-md">{label} {required && <p className="text-[red]">*</p>}</p> 
      <input className="p-[10px] rounded-[10px] border-[1px] border-[#565656] bg-transparent" />
    </div>
  );
};

export default Input;
