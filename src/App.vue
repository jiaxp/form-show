<template>
  <div id="app">
    <form-show>
      <form-show-row>
        <form-show-col :span="12">
          <form-show-item label="用户名">贾晓朋</form-show-item>
        </form-show-col>
        <form-show-col :span="12">
          <form-show-item label="年龄">32</form-show-item>
        </form-show-col>
      </form-show-row>
      <form-show-row>
        <form-show-col :span="12">
          <form-show-item label="性别">男</form-show-item>
        </form-show-col>
        <form-show-col :span="12">
          <form-show-item label="电话">18519552719</form-show-item>
        </form-show-col>
      </form-show-row>
      <form-show-row>
        <form-show-col :span="24">
          <form-show-item label="上门地址">北京市海淀区创业路8号群英科技园2号楼北京市海淀区创业路8号群英科技园2号楼</form-show-item>
        </form-show-col>
      </form-show-row>
    </form-show>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

