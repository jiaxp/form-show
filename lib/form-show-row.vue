<template>
  <div class="form-show_row">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FormShowRow',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .form-show_row {
    display: flex;
    flex-direction: row;
  }
</style>
