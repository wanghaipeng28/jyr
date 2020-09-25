<template>
  <div class="unknown-list">
    <div class="padding-4">
      <el-button type="primary" size="mini">批量配置</el-button>
      <p class="description">源域：srvB&nbsp;&nbsp;&nbsp;&nbsp;目的域：的的</p>
    </div>
    <combo-table
      :data="listData"
      :fields="listFields"
      :total="listTotal"
      no-setolumnbtn
      selection
      index
    >
      <table-column slot="tableOperator" label="操作" align="center" width="200">
        <template slot-scope="scope">
          <el-link v-show="scope" type="primary">一键配置</el-link>
          <el-link v-show="scope" type="primary" @click="jumpToDetail">路径详情</el-link>
        </template>
      </table-column>
    </combo-table>
  </div>
</template>

<script>
import UnknownList from './UnknownList'
export default UnknownList
</script>
<style scoped lang="scss">
.description {
  color: #e6a23c;
  display: inline-block;
  padding-left: 20px;
  margin: 0px;
  font-size: 12px;
}
.el-link{
  margin: 0px 5px;
}
</style>
