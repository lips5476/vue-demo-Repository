export const demoMixin = {    //抽取公共的逻辑用在不同的组件里
  data() {
    return {
      msg: 'hello mixin'
    }
  },
  methods: {
    foo() {
      console.log('demo mixin')
    }
  },
  created() {
    console.log('mixin created')
  }

}
