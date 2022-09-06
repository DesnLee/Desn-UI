# 介绍

> Desn-UI 是一款基于 Vue 3 和 TypeScript 的 UI 组件库。

访问 [DesnLee-UI](https://ui.desnlee.top)

# 安装

```shell
npm install desn-ui   # yarn add desn-ui
```

# 使用

### 引入组件和样式文件
```javascript
import 'desn-ui/lib/index.css';
import { Button, Tabs, Tab, Switch, Dialog } from 'desn-ui';
```

### 使用示例
```html
<template>
  <div>
    <Button>这是一个按钮</Button>
  </div>
</template>

<script>
import { Button, Tabs, Tab, Switch, Dialog } from "desn-ui"

export default {
  components : {
    Button,
    Tabs,
    Tab,
    Switch,
    Dialog
  }
}
</script>
```
# 提示～
**写这个组件库有两个原因：**

- 我是一个 UI 设计师
- 我想要提高 Vue.js 3 的熟练度，并进行总结

&nbsp;

为了打磨技术，本项目从组件功能代码，组件样式设计，几乎没有采用第三方库，都是全程亲手编写。

***除非你是抱着看源代码的目的来的，否则不建议将此 UI 库用于生产环境。***

&nbsp;

**Tips：**

- 历史提交信息较规范，你可以按提交的顺序逐个查看（组件库发布前的历史提交请前往 [Desn-UI 官网仓库](https://github.com/DesnLee/Desn-UI-Website) 查看
- 你也可以直接查看每个组件的源代码和示例，运行方法见 README.md。
