<template>
  <div style="z-index:2008">
    <script id="editor" type="text/plain" style="z-index:3333"></script>
    <el-button>保存</el-button>
  </div>
</template>
<script>
  export default {
    name: 'Ueditor',
    data () {
      return {
        editor: null
      }
    },
    props: [
      "value",
      "config"
    ],
    mounted () {
      this.editor = window.UE.getEditor('editor', this.config);
      this.editor.addListener('ready',  () => {
        this.editor.setContent(this.value)
      })
    },
    methods: {
      getUEContent () {
        return this.editor.getContent()
      }
    },
    destroyed () {
      this.editor.destroy()
    }
  }
</script>