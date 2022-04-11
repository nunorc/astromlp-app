<template>
  <tr>
    <td><span class="fw-bold">Bands</span> <span class="text-secondary">(5x1)</span></td>
  </tr>
  <tr>
    <td><code id="bands">[<span class="mymuted">modelMag_u</span> {{ bands[0] }}, <span class="mymuted">modelMag_g</span> {{ bands[1] }}, <span class="mymuted">modelMag_r</span> {{ bands[2] }}, <span class="mymuted">modelMag_i</span> {{ bands[3] }}, <span class="mymuted">modelMag_z</span> {{ bands[4] }}]</code></td>
  </tr>
</template>

<script>
export default {
  props: {
    bands: Object
  }
}
</script>