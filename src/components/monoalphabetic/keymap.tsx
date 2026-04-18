import { useState } from "react";

export default function Keymap() {
  const [key, setKey] = useState<string>("");
  const [map, setMap] = useState<string>("");

  return (
    <div className="">
      <h4>Keymap</h4>
      <input
        onChange={(e) => {
          setKey(e.target.value);
        }}
      />
      <table>
        <thead>
          <tr className="border-2">
            <th>Key</th>
          </tr>
          <tr>
            <th>Map</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-2 w-fit">
            {key.split("").map((letter, i) => (
              <td key={i} className="border-2">
                {letter}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
