const url = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js";
const txt = await (await fetch(url)).text();
const es = txt + "\n\nconst Chart = window.Chart;\nexport { Chart };\n";
await Deno.writeTextFile("Chart.js", es);
