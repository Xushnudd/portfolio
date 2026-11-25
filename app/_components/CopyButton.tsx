'use client'

import { useState } from "react";
import { PiCopySimpleLight } from "react-icons/pi";

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
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
  return (
    <button
      onClick={handleCopy}
      className="
        w-max px-3 py-1
        bg-gray-600
        flex items-center gap-1
        cursor-pointer
      ">
      <PiCopySimpleLight />
      {copied ? "Copied" : "Copy"}
    </button>
  )
}