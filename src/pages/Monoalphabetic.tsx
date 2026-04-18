import CiphertextPlaintext from "../components/monoalphabetic/ciphertext_plaintext.tsx";
import Keymap from "../components/monoalphabetic/keymap.tsx";
import { useState, useMemo } from "react";
import Counter from "../utilities/Counter.ts";
import FrequencyChart from "../components/monoalphabetic/frequency_chart.tsx";
import { ENGLISH_FREQUENCY } from "../utilities/EnglishFrequency.ts";


const keymap = new Map([
  ['A', 'D'], ['B', 'E'], ['C', 'F'], ['D', 'G'], ['E', 'H'],
  ['F', 'I'], ['G', 'J'], ['H', 'K'], ['I', 'L'], ['J', 'M'],
  ['K', 'N'], ['L', 'O'], ['M', 'P'], ['N', 'Q'], ['O', 'R'],
  ['P', 'S'], ['Q', 'T'], ['R', 'U'], ['S', 'V'], ['T', 'W'],
  ['U', 'X'], ['V', 'Y'], ['W', 'Z'], ['X', 'A'], ['Y', 'B'],
  ['Z', 'C'],
]);


function applyKeymap(ciphertext: string, keymap: Map<string, string>) {
  let plaintext = '';

  for (const char of ciphertext) {
    if (keymap.has(char) && keymap.get(char)) {
      plaintext += keymap.get(char);
    } else {
      plaintext += char;
    }
  }

  return plaintext;
}

export default function Monoalphabetic() {
  const [ciphertext, setCiphertext] = useState<string>("");
  const counter = useMemo(() => new Counter(ciphertext), [ciphertext]);

  return (
    <div className="p-5 flex flex-col gap-4 h-screen">

      <CiphertextPlaintext
        ciphertext={ciphertext}
        setCiphertext={setCiphertext}
        plaintext={applyKeymap(ciphertext, keymap)}
      />

      <FrequencyChart
        title="Ciphertext Frequency"
        data={counter.getChartData()}
        color="#8884d8"
      />

      <FrequencyChart
        title="English Frequency"
        data={ENGLISH_FREQUENCY}
        color="#82ca9d"
      />

      <Keymap />

    </div>
  );
}