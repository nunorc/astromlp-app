<template>
  <tr>
    <td><span class="fw-bold">WISE magnitudes</span> <span class="text-secondary">(4x1)</span></td>
  </tr>
  <tr>
    <td><code id="bands">[<span class="mymuted">w1mag</span> {{ wise[0] }}, <span class="mymuted">w2mag</span> {{ wise[1] }}, <span class="mymuted">w3mag</span> {{ wise[2] }}, <span class="mymuted">w4mag</span> {{ wise[3] }}]</code></td>
  </tr>
</template>

<script>
export default {
  props: {
    wise: Object
  }
}
</script>