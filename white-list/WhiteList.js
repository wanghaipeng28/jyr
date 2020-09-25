import WtList from './wt-list'
import UnknownList from './nuknown-list'
import DetailPath from './detail-path'

export default {
  name: 'WhiteList',
  components: { WtList, UnknownList, DetailPath },
  data() {
    return {
      tableHeight: 500,
      isList: false,
      tabName: 'first',
      secondTab: false,
      thirdTab: false,
      fourthTab: false,
      isChecking: false,
      rectData: [],
      columnObj: {},
      listData: []
    }
  },
  beforeMount() {
    this.init()
  },
  methods: {
    // 初始化组件
    init() {
      this.listenerWinResize()
      const jsonString = '[{"srcZoneUuid":"5ef82b1d46634b3598b51b90","srcZoneName":"DMZ","dstZoneUuid":"5ef82b7746634b3598b51bbf","dstZoneName":"srvB","knownAccessNum":0,"unknownAccessNum":0,"enableAccess":0},{"srcZoneUuid":"5ef82b1d46634b3598b51b90","srcZoneName":"DMZ","dstZoneUuid":"5ef82bc346634b3598b51bc0","dstZoneName":"Internet","knownAccessNum":1,"unknownAccessNum":0,"enableAccess":0},{"srcZoneUuid":"5ef82b1d46634b3598b51b90","srcZoneName":"DMZ","dstZoneUuid":"5ef82c1646634b3598b51bc1","dstZoneName":"srvA","knownAccessNum":0,"unknownAccessNum":0,"enableAccess":0},{"srcZoneUuid":"5ef82b1d46634b3598b51b90","srcZoneName":"DMZ","dstZoneUuid":"5efb00f646634b3598e7e139","dstZoneName":"test","knownAccessNum":3,"unknownAccessNum":8,"enableAccess":0},{"srcZoneUuid":"5ef82b1d46634b3598b51b90","srcZoneName":"DMZ","dstZoneUuid":"5f51b00846634b36bb20e5ed","dstZoneName":"的的","knownAccessNum":0,"unknownAccessNum":2,"enableAccess":0},{"srcZoneUuid":"5ef82b1d46634b3598b51b90","srcZoneName":"DMZ","dstZoneUuid":"5f5b28aa46634b36bbaf768f","dstZoneName":"testf","knownAccessNum":0,"unknownAccessNum":3,"enableAccess":0},{"srcZoneUuid":"5ef82b1d46634b3598b51b90","srcZoneName":"DMZ","dstZoneUuid":"5f630f1346634b36bb2a28f6","dstZoneName":"test111","knownAccessNum":0,"unknownAccessNum":0,"enableAccess":0},{"srcZoneUuid":"5ef82b7746634b3598b51bbf","srcZoneName":"srvB","dstZoneUuid":"5ef82b1d46634b3598b51b90","dstZoneName":"DMZ","knownAccessNum":1,"unknownAccessNum":1,"enableAccess":0},{"srcZoneUuid":"5ef82b7746634b3598b51bbf","srcZoneName":"srvB","dstZoneUuid":"5ef82bc346634b3598b51bc0","dstZoneName":"Internet","knownAccessNum":1,"unknownAccessNum":0,"enableAccess":0},{"srcZoneUuid":"5ef82b7746634b3598b51bbf","srcZoneName":"srvB","dstZoneUuid":"5ef82c1646634b3598b51bc1","dstZoneName":"srvA","knownAccessNum":0,"unknownAccessNum":0,"enableAccess":0},{"srcZoneUuid":"5ef82b7746634b3598b51bbf","srcZoneName":"srvB","dstZoneUuid":"5efb00f646634b3598e7e139","dstZoneName":"test","knownAccessNum":1,"unknownAccessNum":0,"enableAccess":0},{"srcZoneUuid":"5ef82b7746634b3598b51bbf","srcZoneName":"srvB","dstZoneUuid":"5f51b00846634b36bb20e5ed","dstZoneName":"的的","knownAccessNum":0,"unknownAccessNum":6,"enableAccess":0},{"srcZoneUuid":"5ef82b7746634b3598b51bbf","srcZoneName":"srvB","dstZoneUuid":"5f5b28aa46634b36bbaf768f","dstZoneName":"testf","knownAccessNum":0,"unknownAccessNum":1,"enableAccess":0},{"srcZoneUuid":"5ef82b7746634b3598b51bbf","srcZoneName":"srvB","dstZoneUuid":"5f630f1346634b36bb2a28f6","dstZoneName":"test111","knownAccessNum":0,"unknownAccessNum":0,"enableAccess":0},{"srcZoneUuid":"5ef82bc346634b3598b51bc0","srcZoneName":"Internet","dstZoneUuid":"5ef82b1d46634b3598b51b90","dstZoneName":"DMZ","knownAccessNum":0,"unknownAccessNum":0,"enableAccess":0},{"srcZoneUuid":"5ef82bc346634b3598b51bc0","srcZoneName":"Internet","dstZoneUuid":"5ef82b7746634b3598b51bbf","dstZoneName":"srvB","knownAccessNum":0,"unknownAccessNum":0,"enableAccess":0},{"srcZoneUuid":"5ef82bc346634b3598b51bc0","srcZoneName":"Internet","dstZoneUuid":"5ef82c1646634b3598b51bc1","dstZoneName":"srvA","knownAccessNum":0,"unknownAccessNum":0,"enableAccess":0},{"srcZoneUuid":"5ef82bc346634b3598b51bc0","srcZoneName":"Internet","dstZoneUuid":"5efb00f646634b3598e7e139","dstZoneName":"test","knownAccessNum":0,"unknownAccessNum":0,"enableAccess":0},{"srcZoneUuid":"5ef82bc346634b3598b51bc0","srcZoneName":"Internet","dstZoneUuid":"5f51b00846634b36bb20e5ed","dstZoneName":"的的","knownAccessNum":0,"unknownAccessNum":1,"enableAccess":0},{"srcZoneUuid":"5ef82bc346634b3598b51bc0","srcZoneName":"Internet","dstZoneUuid":"5f5b28aa46634b36bbaf768f","dstZoneName":"testf","knownAccessNum":0,"unknownAccessNum":0,"enableAccess":0}]'
      const dataList = JSON.parse(jsonString)
      this.parseRectData(dataList)
    },
    // 添加监听窗口大小事件
    listenerWinResize() {
      if (window.onresizeFun) {
        window.removeEventListener('resize', window.onresizeFun, false)
      }
      window.onresizeFun = () => {
        this.tableHeight = window.innerHeight - 190
      }
      window.onresizeFun()
      window.addEventListener('resize', window.onresizeFun, false)
    },
    // 切换视图
    showViewType() {
      this.isList = !this.isList
    },
    // 立即检查
    startCheck() {
      this.isChecking = true
      setTimeout(t => {
        this.isChecking = false
      }, 1000)
    },
    // 停止检查
    stopCheck() {
      this.isChecking = false
    },
    // 整理矩阵表格数据
    parseRectData(dataList) {
      const columnObj = {}
      const rectData = []
      dataList.forEach(item => {
        let srcZoneName = item.srcZoneName
        if (!columnObj[srcZoneName]) {
          columnObj[srcZoneName] = { index: rectData.length }
          rectData.push({ srcZoneName })
        }
        srcZoneName = item.dstZoneName
        if (!columnObj[srcZoneName]) {
          columnObj[srcZoneName] = { index: rectData.length }
          rectData.push({ srcZoneName })
        }
        const rowIndex = columnObj[item.srcZoneName].index
        rectData[rowIndex][srcZoneName] = item
      })
      this.columnObj = columnObj
      this.rectData = rectData
      this.listData = dataList
    },
    // 白名单点击事件
    whiteBtnClick(data) {
      this.secondTab = true
      this.tabName = 'second'
    },
    // 未知通路点击事件
    unknownBtnClick(data) {
      this.thirdTab = true
      this.tabName = 'third'
    },
    // 跳转到路径详情
    jumpToDetail() {
      this.fourthTab = true
      this.tabName = 'fourth'
    }
  }
}
