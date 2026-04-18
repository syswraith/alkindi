import CiphertextPlaintext from "../components/monoalphabetic/ciphertext_plaintext.tsx";
import Keymap from "../components/monoalphabetic/keymap.tsx";
import { useState } from "react";
import Counter from "../utilities/Counter.ts";
import FrequencyChart from "../components/monoalphabetic/frequency_chart.tsx";

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


function generateCounter(ciphertext: string) {
  let counter = new Counter(ciphertext)
  return counter 
}

export default function Monoalphabetic() {
  const [ciphertext, setCiphertext] = useState<string>("");

  return (
    <>
      {/* Encode decode button */}

      {/* Ciphertext Plaintext */}
      <CiphertextPlaintext
        ciphertext={ciphertext}
        setCiphertext={setCiphertext}
        plaintext={applyKeymap(ciphertext, keymap)}
      />

      {/* Frequency Chart*/}
      <FrequencyChart
        counter={generateCounter(ciphertext)}
      />

      {/* Keymap */}
      <Keymap
      />
      {/* Find and Replace */}
    </>
  );
}