# Chart-es - ES moduleバージョンのChart.js

ES moduleバージョンのChart.jsライブラリです。

## デモ
- [LineChart demo](https://code4fukui.github.io/Chart-es/)
- [RaderChart demo](https://code4fukui.github.io/Chart-es/raderchart.html)
- [RaderChart with Data Labels plugin demo](https://code4fukui.github.io/Chart-es/raderchart_datalabels.html)

## 機能
- Chart.jsのES moduleバージョン
- Line ChartとRadar Chartのデモ
- Chart.js Data Labelsプラグインをサポート

## 使い方

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

- Data Labelsプラグインを使う場合
```JavaScript
import { Chart } from "https://code4fukui.github.io/Chart-es/Chart_plugin_datalabels.js";
```
→ [raderchart_datalabels.html](raderchart_datalabels.html)

## ライセンス
MIT