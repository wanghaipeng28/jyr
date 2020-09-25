<template>
  <div class="detail-path">
    <div class="path-info">
      <el-radio-group size="mini">
        <el-radio border>路径1全通</el-radio>
      </el-radio-group>
      <el-tabs v-model="activeName">
        <el-tab-pane label="路径细节" name="first">
          <div class="nodes-parent">
            <table>
              <tr>
                <td v-for="(node, index) in nodeList" :key="index">
                  <div class="node-parent">
                    <svg-icon v-if="node.nodeType==='subnet'" icon-class="tree" class-name="tree" />
                    <svg-icon v-if="node.nodeType==='0'" icon-class="firewall" class-name="firewall" />
                    <svg-icon v-if="node.nodeType==='1'" icon-class="router" class-name="router" />
                    <p>{{ node.nodeName }}</p>
                    <p>{{ node.nodeIp }}</p>
                    <i v-if="index!==0" class="el-icon-caret-right arrow">
                      <span>——</span>
                    </i>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import DetailPath from './DetailPath'
export default DetailPath
</script>
<style scoped lang="scss">
.el-tabs{
  margin-top: 10px;
}
.nodes-parent{
  width: 100%;
  padding: 6px;
  overflow-x: auto;
}
.svg-icon{
  color: red;
  width: 80px;
  font-size: 80px;
}
.node-parent{
  cursor: pointer;
  width: 120px;
  text-align: center;
  position: relative;
  p{
    margin: 0;
    font-size: 12px;
  }
  .svg-icon.tree{
    width: 40px;
    color: #ddd;
  }
  i.arrow{
    font-size: 20px;
    position: absolute;
    top: 30%;
    left: -24px;
    color: #6ECB2C;
    &:before{
      position: absolute;
      top: 1px;
      left: 30%;
    }
  }
}
</style>
