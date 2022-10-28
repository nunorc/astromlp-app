<template>
  <div class="container h-100">
    <h1>Pipeline</h1>
    <hr/>
    <h5>
      <span style="color: var(--bs-pink)">{{ name }}</span>
      <router-link :to="`/proc/${ id }`" class="btn btn-link btn-sm float-end">Proc</router-link>
    </h5>
    <hr/>

    <p class="myuc">{{ desc[0] }}</p>
    <span v-html="desc[1]"></span>
  </div>
</template>

<script>
import shared from '../shared.js'

export default {
  data () {
    return {
      id: this.$route.params.id,
      name: shared.PIPES_NAMES[this.$route.params.id],
      desc: shared.PIPES_DESCS[this.$route.params.id],
      publicPath: process.env.BASE_URL
    }
  }
}
</script>
