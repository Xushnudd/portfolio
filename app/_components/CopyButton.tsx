'use client'

import { ReactNode, useState } from "react";
import { MdContentCopy } from "react-icons/md";

interface CopyButtonProps {
  children?: ReactNode;
  className?: string;
  text: string;
}

export default function CopyButton({ children, className = "", text }: CopyButtonProps) {
  const [copied, setCopied] = useState<boolean>(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Copy error");
    }
  }
  if (children) {
    return (
      <button
        onClick={handleCopy}
        className={`
          cursor-pointer
          flex gap-1 items-center
          ${className}
        `}>
        <MdContentCopy />
        <div>
          {
            copied
              ? <span className="capitalize">Copied</span>
              : children
          }
          </div>
      </button>
    )
  }
  else {
    return (
      <button
        onClick={handleCopy}
        className="
          w-max px-3 py-1
          bg-gray-600
          flex items-center gap-1
          cursor-pointer
        ">
        <MdContentCopy />
        {copied ? "Copied" : "Copy"}
      </button>
    )
  }
}