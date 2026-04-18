import { useState, useEffect } from "react";

type Props = {
  data: string[];
};

const DEFAULT_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Keymap({ data }: Props) {

  const ALPHABET = data?.length ? data : DEFAULT_ALPHABET;

  const [map, setMap] = useState<Map<string, string>>(
    () => new Map(DEFAULT_ALPHABET.map(l => [l, ""]))
  );

  // keep map in sync if alphabet changes
  useEffect(() => {
    setMap(new Map(ALPHABET.map(l => [l, map.get(l) ?? ""])));
  }, [ALPHABET]);

  function updateMapping(letter: string, value: string) {
    setMap(prev => {
      const next = new Map(prev);
      next.set(letter, value.toUpperCase().slice(0, 1));
      return next;
    });
  }

  return (
    <div className="p-3 border-2 rounded-xl overflow-x-auto">
      
      <h4 className="text-2xl mb-2">Keymap</h4>

      <table className="w-full border-collapse text-center font-mono">

        <thead>
          <tr>
            {ALPHABET.map(letter => (
              <th key={letter} className="border p-1">
                {letter}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            {ALPHABET.map(letter => (
              <td key={letter} className="border p-1">
                <input
                  className="w-6 text-center bg-transparent outline-none"
                  value={map.get(letter) ?? ""}
                  onChange={(e) => updateMapping(letter, e.target.value)}
                />
              </td>
            ))}
          </tr>
        </tbody>

      </table>
    </div>
  );
}