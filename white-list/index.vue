<template>
  <div class="white-list padding-4">
    <el-tabs v-model="tabName">
      <el-tab-pane label="域间访问白名单" name="first">
        <div class="top-btn">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-sort"
            :disabled="isChecking"
            @click="showViewType"
          >{{ isList?'切换矩阵':'切换列表' }}</el-button>
          <!--<el-button
            size="mini"
            :icon="isChecking?'el-icon-loading':'el-icon-view'"
            @click="startCheck"
          >立即检查</el-button>
          <el-button
            v-show="isChecking"
            size="mini"
            icon="el-icon-error"
            @click="stopCheck"
          >停止检查</el-button>-->
        </div>
        <div v-show="!isList">
          <el-table :data="rectData" border stripe width="100%" :height="tableHeight" row-class-name="row-height-50">
            <el-table-column fixed class-name="first-column-td" width="160" align="center">
              <template slot-scope="scope">
                <div class="first-column">{{ scope.row.srcZoneName }}</div>
              </template>
            </el-table-column>
            <el-table-column
              v-for="(v, k) in columnObj"
              :key="k"
              :label="k"
              min-width="130"
              class-name="with-border-td"
            >
              <template slot-scope="scope">
                <div v-if="scope.row[k]">
                  <div class="cell-btn" @click="whiteBtnClick(scope.row[k])">
                    <span>白名单(</span>
                    <span class="number">{{ scope.row[k].knownAccessNum }}</span>
                    <span>)</span>
                  </div>
                  <div
                    :class="{'cell-btn': true,'danger': scope.row[k].unknownAccessNum!=0}"
                    @click="unknownBtnClick(scope.row[k])"
                  >
                    <span>未知通路(</span>
                    <span class="number">{{ scope.row[k].unknownAccessNum }}</span>
                    <span>)</span>
                  </div>
                </div>
                <div v-else style="text-align: center">
                  -
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div v-show="isList">
          <el-table :data="listData" border stripe width="100%">
            <el-table-column label="源域" prop="srcZoneName" />
            <el-table-column label="目的域" prop="dstZoneName" />
            <el-table-column label="白名单">
              <template slot-scope="scope">
                <el-link type="primary" @click="whiteBtnClick(scope.row)">白名单({{ scope.row.knownAccessNum }})</el-link>
              </template>
            </el-table-column>
            <el-table-column label="未知通路">
              <template slot-scope="scope">
                <el-link
                  type="primary"
                  :class="{'danger': scope.row.unknownAccessNum!=0}"
                  @click="unknownBtnClick(scope.row)"
                >未知通路({{ scope.row.unknownAccessNum }})</el-link>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane v-if="secondTab" label="白名单列表" name="second">
        <wt-list />
      </el-tab-pane>
      <el-tab-pane v-if="thirdTab" label="未知通道列表" name="third">
        <unknown-list @jump-detail="jumpToDetail" />
      </el-tab-pane>
      <el-tab-pane v-if="fourthTab" label="路径详情" name="fourth">
        <detail-path />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import WhiteList from './WhiteList'
export default WhiteList
</script>
<style scoped lang="scss">
.top-btn{
  margin-bottom: 6px;
}
.first-column{
  color: rgb(144, 147, 153);
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cell-btn{
  padding-left: 5px;
  margin: 5px 0px;
  border-radius: 5px;
  border: 1px solid rgba(36, 144, 255, 0.28);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #3a8ee6;
}
.cell-btn.danger{
  color: #f56c6c;
  border-color: rgba(236, 62, 64, 0.24);
  background: rgba(236, 62, 64, 0.24);
}
.el-link.el-link--primary.danger{
  color: #f56c6c;
}
</style>
<style lang="scss">
.el-table{
  td.first-column-td{
    border-right: 1px solid #EBEEF5;
    background-color: #fafbfb;
  }
  td.with-border-td{
    border-right: 1px solid #EBEEF5;
  }
  tr.row-height-50{
    height: 50px;
  }
}
</style>
