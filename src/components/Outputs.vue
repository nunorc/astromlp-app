<template>
  <br/>
  <table class="table">
    <thead><tr class="text-center"><th colspan="2">Model Outputs</th></tr></thead>
    <tbody>
      <template v-for="(value, index) in y" :key="index">
        <tr>
          <td class="fw-bold">{{ value }}</td>
        </tr>
        <tr>
          <td v-html="ppOutput(index)"></td>
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
    ppOutput(index) {
      if (Object.keys(this.classes).includes(this.y[index])) {
        const cl = this.classes[this.y[index]]
        if (cl in shared.EXPLAIN)
          return `<code>${ cl }</code> <span class="text-secondary ms-3">(${ shared.EXPLAIN[cl] })</span>`
        else
          return `<code>${ cl }</code>`
      }
      else {
        const o = this.y[index]
        if (o==='smass')
          return `<code>${ this.output[index] }</code> <span class="ms-2 text-secondary">&times;10<sup>9</sup></span>`
        return `<code>${ this.output[index] }</code>`
      }
    }
  }
}
</script>