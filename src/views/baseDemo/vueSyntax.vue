<template>
  <div>
    <h3>模板语法</h3>
    <div>
      <h4>插值</h4>
      <p>文本：<span style="color: blue">{{msg}}</span></p>
      <p>原始HTML：<span v-html="rawHtml"></span></p>
      <p v-bind:class="className">Attribute：使用v-bind实现元素类名设置为变量 “className”</p>
      <p>使用 JavaScript 表达式：插值中的表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。但是每个绑定都只能包含单个表达式</p>
      <p>方括号括起来的 JavaScript 表达式作为一个指令的参数（Attribute）：“v-bind:[attributeName]="url">”</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vueSyntax",
    data(){
      return{
        msg:'这是使用‘{{}}’插入的文本',
        rawHtml:'<span style="color: red">使用v-html插入的元素</span>',
        className:'demo'
      }
    },
  }
</script>

<style scoped lang="stylus">

</style>
