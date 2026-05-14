# Chart-es - Chart.js - ESモジュール版

Chart.jsライブラリのESモジュール版です。

## デモ
- [LineChartのデモ](https://code4fukui.github.io/Chart-es/)
- [RaderChartのデモ](https://code4fukui.github.io/Chart-es/raderchart.html)
- [Data Labelsプラグイン付きRaderChartのデモ](https://code4fukui.github.io/Chart-es/raderchart_datalabels.html)

## 機能
- Chart.jsのESモジュール版
- Line ChartとRadar Chartのデモを収録
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

- [chartjs-plugin-datalabels](https://github.com/chartjs/chartjs-plugin-datalabels/) を使用する場合
```JavaScript
import { Chart } from "https://code4fukui.github.io/Chart-es/Chart_plugin_datalabels.js";
```
→ [raderchart_datalabels.html](raderchart_datalabels.html)

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
