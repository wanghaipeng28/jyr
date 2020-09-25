import { TableColumn } from 'element-ui'

export default {
  name: 'WtList',
  components: { TableColumn },
  data() {
    return {
      searchForm: {
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
        f: false
      },
      listData: [
        { a: '100.92.121.1', b: '100.92.121.75', c: '8080', d: 'TCP', e: 'test' }
      ],
      listFields: [
        { label: '源地址', prop: 'a' },
        { label: '目的地址', prop: 'b' },
        { label: '目的端口', prop: 'c' },
        { label: '协议', prop: 'd' },
        { label: '备注', prop: 'e' }
      ],
      listTotal: 20,
      formDialogTitle: '新建白名单',
      formDialogVisible: false,
      dataForm: {
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
        f: '',
        g: 'any',
        h: ''
      }
    }
  },
  methods: {
    // 打开form弹出框
    showFormDialog(act) {
      if (act === 'add') {
        this.formDialogTitle = '新建白名单'
      } else {
        this.formDialogTitle = '编辑白名单'
      }
      this.formDialogVisible = true
    }
  }
}
