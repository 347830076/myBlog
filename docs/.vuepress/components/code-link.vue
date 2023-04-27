<style lang="scss" scoped>
.icon-download {
  cursor: pointer;
}
.icon-download:hover {
  color: #000000;
}
</style>

<template>
  <span class="code-link">
    <a :href="link" target="_blank">
      <slot></slot>
    </a>
    <i class="iconfont icon-download" title="下载" @click="download"></i>
  </span>
  <!-- <div class="language-javascript extra-class">
    <pre class="language-javascript">
      <code ref="code"></code>
    </pre>
  </div> -->
</template>

<script>
function downloadFile(url, fileName) {
  const a = document.createElement("a")
  a.download = fileName
  a.href = url
  a.style.display = "none"
  document.body.appendChild(a)
  a.click()
  a.remove()
}

export default {
  name: "code-link",
  props: {
    href: String
  },
  computed: {
    link() {
      return this.$withBase(this.href)
    }
  },
  mounted () {
    // const code = `var user = { name: "run", age: 26 }\nconsole.log(user)`
    // const html = Prism.highlight(code, Prism.languages.javascript, 'javascript')
    // this.$refs.code.innerHTML = html

    // Prism.highlightElement(this.$refs.code)
  },
  methods: {
    download() {
      const defaultSlot = this.$slots.default
      const fileName = defaultSlot[0].text
      downloadFile(this.link, fileName)
    }
  }
}
</script>
