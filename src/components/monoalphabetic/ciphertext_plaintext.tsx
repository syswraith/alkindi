type CiphertextPlaintextProps = {
  ciphertext: string,
  setCiphertext: React.Dispatch<React.SetStateAction<string>>,
  plaintext: string,
}

export default function CiphertextPlaintext({
  ciphertext,
  setCiphertext,
  plaintext
}: CiphertextPlaintextProps) {

  return (
    <div className="flex-1 min-h-[300px]">
      <div className="border-2 rounded-xl p-3 grid grid-cols-2 gap-4 h-full">
        
        <div className="flex flex-col min-h-0">
          <h4 className="text-2xl mb-2">Ciphertext</h4>

          <div
            className="flex-1 min-h-0 font-mono border-2 rounded-xl p-2 overflow-auto whitespace-pre-wrap break-words"
            contentEditable
            suppressContentEditableWarning
            onInput={(e) => {
              setCiphertext((e.target as HTMLDivElement).innerText);
            }}
          />
        </div>

        <div className="flex flex-col min-h-0">
          <h4 className="text-2xl mb-2">Plaintext</h4>

          <div className="flex-1 min-h-0 font-mono border-2 rounded-xl p-2 overflow-auto whitespace-pre-wrap break-words">
            {plaintext}
          </div>
        </div>

      </div>
    </div>
  );
}