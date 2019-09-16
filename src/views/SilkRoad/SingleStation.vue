<!-- 风暴潮 》》 单站增水预报页面  -->
<template>
  <div>
    <div class="head">目前没有风暴潮过程</div>
    <div class="btnMore">
      <div class="event">
        <img src="../../assets/img/event.png" />
        <span>最新事件</span>
      </div>
      <div class="moreBtn">
        <el-button type="warning" class="right" size="mini" round>更多>></el-button>
      </div>
    </div>
    <hr style="border: 0; height: 1px; background: #ccc" />
    <div class="eventTable">
      <table style="width:100%; margin-bottom:20px; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="width:40px;">单选</th>
            <th style="width:40px;">序号</th>
            <th style="width:75px;">过程编号</th>
            <th style="width:111px;">区域</th>
            <th style="width:162px;">发生时间(CST)</th>
            <th>国家或者地区</th>
            <th>信息</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="radio" name="mum" checked="checked" />
            </td>
            <td>1</td>
            <td value="tc1902">tc1902</td>
            <td value="03">阿拉伯海区域</td>
            <td value="2019-6-17 10">2019-6-17 10:00:00</td>
            <td style="text-align:left;">印度,吉布提,巴基斯坦,阿曼,马尔代夫,也门,伊朗</td>
            <td style="width: 40px;">
              <a href="#">详情</a>
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="mum"/>
            </td>
            <td>1</td>
            <td value="tc1902">tc1902</td>
            <td value="03">阿拉伯海区域</td>
            <td value="2019-6-17 10">2019-6-17 10:00:00</td>
            <td style="text-align:left;">印度,吉布提,巴基斯坦,阿曼,马尔代夫,也门,伊朗</td>
            <td style="width: 40px;">
              <a href="#">详情</a>
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="mum"/>
            </td>
            <td>1</td>
            <td value="tc1902">tc1902</td>
            <td value="03">阿拉伯海区域</td>
            <td value="2019-6-17 10">2019-6-17 10:00:00</td>
            <td style="text-align:left;">印度,吉布提,巴基斯坦,阿曼,马尔代夫,也门,伊朗</td>
            <td style="width: 40px;">
              <a href="#">详情</a>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
    <div class="map">

    </div>
  </div>
</template>
<script>
import { demo, formatData } from "../../utils";
import Api from "../../api";
export default {
  data() {
    return {
      tableData: [{}]
    };
  }
};
</script>

<style scoped>
.head {
  border: 1px solid #ccc;
  line-height: 110px;
  height: 110px;
  text-align: center;
  color: #089039;
  font-weight: bolder;
  font-size: 18px;
}

.btnMore {
  width: 100%;
  height: 40px;
  font-family: "微软雅黑";
  font-size: 14px;
  line-height: 40px;
  margin: 5px 0;
}

.event {
  height: inherit;
  float: left;
}

.event img {
  vertical-align: middle;
}

.moreBtn {
  float: right;
}

.eventTable {
  font-size: 14px;
  font-family: "微软雅黑";
}

.eventTable thead tr {
  height: 35px;
  background: rgb(87, 152, 220);
  color: #fff;
}

.eventTable thead tr th {
  border-left: 1px solid #fff;
}

.eventTable tbody tr {
  height: 35px;
  text-align: center;
}

.eventTable tbody tr:nth-child(odd) {
  background: #f0eeee;
}

.eventTable tbody tr a{
    color: black;
    text-decoration: none;
}

.map{
    width: 100%;
    height: 500px;
    border: 1px solid red;
}
</style>