<template>
  <h2>Models</h2>
  <hr/>
  <ul class="list-group">
    <li v-for="m in models" :key="m" class="list-group-item list-group-item-light">
      <div class="row">
        <div class="col-10">
          <code><span v-html="funs[m]"></span></code><br/><span class="text-secondary">{{ descs[m][0] }}</span>
        </div>
        <div class="col my-auto">
          <router-link :to="`/infer/${ m }`" class="btn btn-link btn-sm float-end">Infer</router-link>
          <router-link :to="`/model/${ m }`" class="btn btn-link btn-sm float-end">Details</router-link>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import shared from '../shared.js'

export default {
  data () {
    return {
      models: shared.MODELS,
      funs: shared.FUNS,
      descs: shared.DESCS
    }
  }
}
</script>

<style>
 .app-m-title { font-family: var(--bs-font-monospace); }
 .app-bar { color: #ccc; padding: 0 8px; }
</style>