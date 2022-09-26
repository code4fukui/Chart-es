# Chart-es - Chart.js - ES module version

## Usage

```JavaScript
import { Chart } from "https://code4fukui.github.io/Chart-es/Chart.js";

const config = {
  type: "bar",
  data: {
    labels: [1, 2, 3],
    datasets: [
      { label: "data1", data: [10, 20, 30], backgroundColor: "#66e" },
      { label: "data2", data: [5, 10, 20], backgroundColor: "#e66" },
    ],
  }
};
const canvas = document.createElement("canvas");
canvas.width = 600;
canvas.height = 300;
const graph = document.createElement("div");
document.body.appendChild(graph);
graph.appendChild(canvas);
const chart = new Chart(canvas, config);
```

## How to make

1. download Chart.js from CDN
2. add followings
```JavaScript
export const Chart = window.Chart.Chart;
```
