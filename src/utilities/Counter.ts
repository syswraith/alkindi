import type CounterMap from "../types/CounterMap.ts";

export default class Counter {
  iterable: Iterable<string | number>;
  private map: CounterMap = new Map();
  private percentMap: CounterMap = new Map();

  constructor(iterable: Iterable<string | number>) {
    this.iterable = iterable;

    this.setMaps();
  }

  // generate the maps internally
  private setMaps(): void {
    for (let i of this.iterable) {
      this.map.set(i, (this.map.get(i) ?? 0) + 1);
    }

    let total = [...this.map.values()].reduce((sum, number) => sum + number, 0);
    let multiplier = 100 / total;

    for (const [key, value] of this.map) {
      this.percentMap.set(key, value * multiplier);
    }
  }

  // return a copy
  getMap(): CounterMap {
    return new Map(this.map);
  }

  getPercentMap(): CounterMap {
    return new Map(this.percentMap);
  }

  getChartData() {
    return [...this.map.entries()]
      .map(([key, value]) => ({
        letter: String(key),
        count: value,
      }))
      .sort((a, b) => a.letter.charCodeAt(0) - b.letter.charCodeAt(0));
  }

getKeys(): string[] {
  return Array.from(this.map.keys())
    .map(String)
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
}
}
