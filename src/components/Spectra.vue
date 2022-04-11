<template>
  <tr>
    <td><span class="fw-bold">Spectra</span> <span class="text-secondary">(3225x1)</span></td>
  </tr>
  <tr>
    <td><div id="plot-spectra" style="height: 300px; width: 100%; margin: auto;"></div></td>
  </tr>
</template>

<script>
export default {
  props: {
    waves: Array, spectra: Object
  },
  mounted() {
    let arr = []
    for (let i=0; i<this.waves.length; i++)
      arr.push([this.waves[i], this.spectra[0][i]])

    window.Highcharts.chart('plot-spectra', {
      chart: { type: 'column', backgroundColor: 'rgb(248,249,250)' },
      title: { text: undefined },
      legend: { enabled: false },
      credits: { enabled: false },
      exporting: { enabled: false },
      xAxis: { gridLineWidth: 0, min: 4000, max: 9000 },
      yAxis: { title: { enabled: false }, labels: { enabled: false }, gridLineWidth: 0 },
      series: [{ name: 'BestFit', data: arr }]
    })
  }
}
</script>