# form-show

> 基于vue的表单详情组件

### Install

``` bash
npm install form-show-cs --save
```

### Use
``` bash
import FormShow from 'form-show-cs'

Vue.use(FormShow);

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
```

### Props
``` bash
FormShow
字段名称                类型                说明                        默认值
labelWidth             String/Number      Label宽度                   -
labelSuffix            String             Label后缀                   ：
labelPosition          String             Label对齐方式（left/right）  right
backgroundColor        String             背景色                      #ffffff
borderColor            String             边框颜色                    #E4E7ED

FormShowCol
字段名称                类型                说明                        默认值
span                   Number             栅格占据的列数                24

FormShowItem
字段名称                类型                说明                        默认值
label                  String             字段名称                     -
```
