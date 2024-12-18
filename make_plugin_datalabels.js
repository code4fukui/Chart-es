const url = "https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels";
const txt = await (await fetch(url)).text();
const es = `export { Chart } from "./Chart.js";\n\n` + txt;
await Deno.writeTextFile("Chart_plugin_datalabels.js", es);
