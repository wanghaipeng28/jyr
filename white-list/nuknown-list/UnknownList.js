import { TableColumn } from 'element-ui'

export default {
  name: 'UnknownList',
  components: { TableColumn },
  data() {
    return {
      listData: [
        { a: '100.92.121.1', b: '100.92.121.75', c: '8080', d: 'TCP', e: 'test' }
      ],
      listFields: [
        { label: '源地址', prop: 'a' },
        { label: '目的地址', prop: 'b' },
        { label: '目的端口', prop: 'c' },
        { label: '协议', prop: 'd' }
      ],
      listTotal: 20
    }
  },
  methods: {
    // 跳转到路径详情
    jumpToDetail() {
      this.$emit('jump-detail')
    }
  }
}
