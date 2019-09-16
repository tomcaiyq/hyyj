<!-- /* 风暴潮 》》 增水场预报页面 */ -->
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
            <th>风暴增水场预报</th>
            <th>台风路径</th>
            <th>最大增水场概率</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="radio" name="num" class="btn" checked="checked" />
            </td>
            <td>1</td>
            <td value="tc1902">tc1902</td>
            <td value="03">阿拉伯海区域</td>
            <td value="2019-6-17 10">2019-6-17 10:00:00</td>
            <td>
              <a href="#" class="typhoonBt">详情</a>
            </td>
            <td>
              <a href="#" class="typhoonBtTwo">详情</a>
            </td>
            <td>
              <a href="#" class="typhoonBtThree">详情</a>
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="num" class="btn" />
            </td>
            <td>2</td>
            <td value="tc1902">tc1902</td>
            <td value="03">阿拉伯海区域</td>
            <td value="2019-6-17 10">2019-6-17 10:00:00</td>
            <td>
              <a href="#" class="typhoonBt">详情</a>
            </td>
            <td>
              <a href="#" class="typhoonBtTwo">详情</a>
            </td>
            <td>
              <a href="#" class="typhoonBtThree">详情</a>
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="num" class="btn" />
            </td>
            <td>3</td>
            <td value="tc1902">tc1902</td>
            <td value="03">阿拉伯海区域</td>
            <td value="2019-6-17 10">2019-6-17 10:00:00</td>
            <td>
              <a href="#" class="typhoonBt">详情</a>
            </td>
            <td>
              <a href="#" class="typhoonBtTwo">详情</a>
            </td>
            <td>
              <a href="#" class="typhoonBtThree">详情</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="unitAndTime">
      <p>
        发布单位:
        <span class="unitAndTimeData">国家海洋预报台</span>
      </p>
      <p>
        发布时间:
        <span class="unitAndTimeData">2019-6-17 10:00:00</span>
      </p>
    </div>
    <el-button class="imgTitle" round>不同台风路径下风暴增水场预报</el-button>
    <div class="imgs">
      <div class="imgCheckBox">
        <ul>
          <li>
            <label>
              <input type="checkbox" checked />集合路径
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />集合路径
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />集合路径
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />集合路径
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />集合路径
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />集合路径
            </label>
          </li>
        </ul>
      </div>
      <div class="imgList">
        <ul>
          <li>
            <img src="../../assets/img/imglist.jpg" />
          </li>
          <li>
            <img src="../../assets/img/imglist.jpg" />
          </li>
          <li>
            <img src="../../assets/img/imglist.jpg" />
          </li>
          <li>
            <img src="../../assets/img/imglist.jpg" />
          </li>
        </ul>
      </div>
    </div>
    <el-button class="imgTitle" round>台风路径预报</el-button>
    <div class="typhoonTrack">
      <img src="../../assets/img/imglist.jpg" alt />
    </div>
    <el-button class="imgTitle" round>不同台风路径下风暴增水场预报</el-button>
    <div class="imgs">
      <div class="imgCheckBox">
        <ul>
          <li>
            <label>
              <input type="checkbox" checked />>50cm
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />>100cm
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />>150cm
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />>200cm
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />>250cm
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />>300cm
            </label>
          </li>
        </ul>
      </div>
      <div class="imgList">
        <ul>
          <li>
            <img src="../../assets/img/imglist.jpg" />
          </li>
          <li>
            <img src="../../assets/img/imglist.jpg" />
          </li>
          <li>
            <img src="../../assets/img/imglist.jpg" />
          </li>
          <li>
            <img src="../../assets/img/imglist.jpg" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { demo, formatData } from "../../utils";
import Api from "../../api";
export default {
  data() {
    return {};
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

.eventTable tbody tr a {
  color: black;
  text-decoration: none;
}

.unitAndTime {
  font-size: 16px;
  font-weight: bold;
  color: #b9b9b9;
}

.unitAndTimeData {
  color: #818181;
}

.map {
  width: 100%;
  height: 500px;
  border: 1px solid red;
}

.imgTitle {
  width: 100%;
  background: rgb(87, 152, 220);
  font-size: 18px;
  color: #fff;
  margin: 10px 0;
  cursor: default;
}

.imgCheckBox {
  text-align: center;
  margin-bottom: 10px;
}

.imgCheckBox ul li {
  display: inline-block;
  margin: 0 15px;
  font-size: 18px;
}

.imgList ul li img {
  width: 390px;
  float: left;
  margin-right: 5px;
  margin-bottom: 5px;
}

.typhoonTrack {
  width: 100%;
}

.typhoonTrack img {
  width: 100%;
}
</style>