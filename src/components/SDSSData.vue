<template>
  <table class="table">
    <thead><tr class="text-center"><th colspan="6">SDSS Data</th></tr></thead>
    <tbody>
      <tr>
        <td>objID</td>
        <td>RA</td>
        <td>Dec</td>
        <td>Class</td>
        <td>SubClass</td>
        <td>Redshift</td>
      </tr>
      <tr>
        <td><a :href="`http://skyserver.sdss.org/dr17/VisualTools/explore/summary?id=${ obj.objid }`" alt="View on SkyServerExplorer" title="View on SkyServerExplorer"><code>{{ obj.objid }}</code></a></td>
        <td><code>{{ obj.ra }}</code></td>
        <td><code>{{ obj.dec }}</code></td>
        <td><code>{{ obj.class }}</code></td>
        <td><code>{{ obj.subclass }}</code></td>
        <td><code>{{ obj.redshift }}</code></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    obj: Object
  }
}
</script>