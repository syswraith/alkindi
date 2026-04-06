import { useState } from "react";

export default function CiphertextPlaintext() {
  const [ciphertext, setCiphertext] = useState<string>("");
  const [plaintext, setPlaintext] = useState<string>("");

  return (
    <div className="border-2 rounded-xl p-3 grid grid-cols-2 gap-4">
      <div>
        <h4 className="text-2xl mb-2">Ciphertext</h4>
        <div
          className="font-mono border-2 rounded-xl min-h-40 w-full p-2"
          contentEditable
          suppressContentEditableWarning
          onInput={(e) => {
            const value = (e.target as HTMLDivElement).innerText;
            setCiphertext(value);
            setPlaintext(value);
          }}
        ></div>
      </div>

      <div>
        <h4 className="text-2xl mb-2">Plaintext</h4>
        <div className="font-mono border-2 rounded-xl min-h-40 w-full p-2">
          {plaintext}
        </div>
      </div>
    </div>
  );
}
