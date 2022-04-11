<template>
  <table class="table">
    <thead><tr class="text-center"><th colspan="2">Pipeline Output</th></tr></thead>
    <tbody>
      <template v-for="(value, y) in output" :key="y">
        <tr>
          <td class="fw-bold">{{ y }}</td>
        </tr>
        <tr>
          <td v-html="ppOutput(y, value)"></td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
import shared from '@/shared.js'

export default {
  props: {
    y: Array, output: Array, classes: Object
  },
  methods: {
    ppOutput(y, value) {
      if (y === 'subclass' || y === 'gz2c')
        return `<code>${ value }</code> <span class="text-secondary ms-3">(${ shared.EXPLAIN[value] })</span>`
      if (y === 'smass')
         return `<code>${ value }</code> <span class="ms-2 text-secondary">&times;10<sup>9</sup></span>`

      return `<code>${ value }</code>`
    }
  }
}
</script>