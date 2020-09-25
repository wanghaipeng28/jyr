<template>
  <div class="wt-list">
    <el-row class="padding-4">
      <el-col :span="8">
        <el-button type="primary" icon="el-icon-circle-plus-outline" size="mini" @click="showFormDialog('add')">添加</el-button>
        <el-button type="default" icon="el-icon-delete" size="mini">删除</el-button>
        <p class="description">源域：DMZ&nbsp;&nbsp;&nbsp;&nbsp;目的域：srvB</p>
      </el-col>
      <el-col :span="16" align="right">
        <el-form :inline="true" :model="searchForm">
          <el-input v-model="searchForm.a" class="filter-item" placeholder="源地址" size="mini" />
          <el-input v-model="searchForm.b" class="filter-item" placeholder="目的地址" size="mini" />
          <el-select v-model="searchForm.c" class="filter-item">
            <el-option label="ICMP" value="icmp" />
            <el-option label="TCP" value="tpc" />
            <el-option label="UDP" value="udp" />
            <el-option label="any" value="any" />
          </el-select>
          <el-input v-model="searchForm.d" class="filter-item" placeholder="目的端口" size="mini" />
          <el-input v-model="searchForm.e" class="filter-item" placeholder="备注" size="mini" />
          <el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button>
          <span>设置全通</span>
          <el-switch v-model="searchForm.f" />
        </el-form>
      </el-col>
    </el-row>
    <combo-table
      :data="listData"
      :fields="listFields"
      :total="listTotal"
      no-setolumnbtn
      selection
      index
    >
      <table-column slot="tableOperator" label="操作" align="center" width="120">
        <template slot-scope="scope">
          <el-button v-show="scope" type="default" size="mini" icon="el-icon-edit" @click="showFormDialog('edit')">编辑</el-button>
        </template>
      </table-column>
    </combo-table>
    <el-dialog :title="formDialogTitle" :visible.sync="formDialogVisible" width="50%">
      <el-form ref="dataForm" :model="dataForm" label-width="100px" size="mini">
        <el-form-item label="原地址">
          <el-row class="padding-2">
            <el-col :span="11">
              <el-select v-model="dataForm.a" placeholder="请选择域源子网">
                <el-option label="9.2.1.0/30" value="1" />
                <el-option label="9.2.1.4/30" value="2" />
                <el-option label="9.2.1.8/30" value="3" />
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11">
              <el-input v-model="dataForm.b" placeholder="起始源IP地址" />
            </el-col>
            <el-col :span="2" style="text-align: center;">~</el-col>
            <el-col :span="11">
              <el-input v-model="dataForm.c" placeholder="终止源IP地址" />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="目的地址">
          <el-row class="padding-2">
            <el-col :span="11">
              <el-select v-model="dataForm.d" placeholder="请选择目的域子网">
                <el-option label="9.2.1.0/30" value="1" />
                <el-option label="9.2.1.4/30" value="2" />
                <el-option label="9.2.1.8/30" value="3" />
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11">
              <el-input v-model="dataForm.e" placeholder="起始目的IP地址" />
            </el-col>
            <el-col :span="2" style="text-align: center;">~</el-col>
            <el-col :span="11">
              <el-input v-model="dataForm.f" placeholder="终止终止IP地址" />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="协议">
          <el-select v-model="dataForm.g">
            <el-option label="ICMP" value="icmp" />
            <el-option label="TCP" value="tcp" />
            <el-option label="UDP" value="upd" />
            <el-option label="any" value="any" />
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="dataForm.h" type="textarea" placeholder="输入备注，描述不超过100个字符" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="formDialogVisible=false">取 消</el-button>
        <el-button type="primary" @click="formDialogVisible=false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import WtList from './WtList'
export default WtList
</script>
<style scoped lang="scss">
.description {
  color: #e6a23c;
  display: inline-block;
  padding-left: 20px;
  margin: 0px;
  font-size: 12px;
}
.filter-item{
  vertical-align: middle;
  width: 160px;
  margin-right: 4px;
}
</style>
