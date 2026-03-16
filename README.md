# Chart-es - Chart.js - ES module version

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

ES module version of the Chart.js library.

## Demo
- [LineChart demo](https://code4fukui.github.io/Chart-es/)
- [RaderChart demo](https://code4fukui.github.io/Chart-es/raderchart.html)
- [RaderChart with Data Labels plugin demo](https://code4fukui.github.io/Chart-es/raderchart_datalabels.html)

## Features
- ES module version of Chart.js
- Includes demos for Line Chart and Radar Chart
- Supports Chart.js Data Labels plugin

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

- with [chartjs-plugin-datalabels](https://github.com/chartjs/chartjs-plugin-datalabels/)
```JavaScript
import { Chart } from "https://code4fukui.github.io/Chart-es/Chart_plugin_datalabels.js";
```
→ [raderchart_datalabels.html](raderchart_datalabels.html)

## License
MIT License — see [LICENSE](LICENSE).