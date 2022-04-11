<template>
  <h2>Pipelines</h2>
  <hr/>
  <ul class="list-group">
    <li v-for="p in pipes" :key="p" class="list-group-item list-group-item-light">
      <div class="row">
        <div class="col-10">
          <code><span v-html="names[p]"></span></code><br/><span class="text-secondary">{{ descs[p][0] }}</span>
        </div>
        <div class="col my-auto">
          <router-link :to="`/proc/${ p }`" class="btn btn-link btn-sm float-end">Proc</router-link>
          <router-link :to="`/pipeline/${ p }`" class="btn btn-link btn-sm float-end">Details</router-link>
        </div>
      </div>
    </li>
  </ul>
  <br/>
</template>

<script>
import shared from '../shared.js'

export default {
  data () {
    return {
      pipes: shared.PIPES,
      names: shared.PIPES_NAMES,
      descs: shared.PIPES_DESCS
    }
  }
}
</script>
