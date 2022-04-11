<template>
  <tr>
    <td><span class="fw-bold">RGB img</span> <span class="text-secondary">(150x150x3)</span></td>
  </tr>
  <tr>
    <td><img id="image" /></td>
  </tr>
</template>

<script>
export default {
  props: {
    img: String
  },
  mounted() {
    document.getElementById('image').setAttribute('src', 'data:image/jpg;base64,' + this.img)
  }
}
</script>