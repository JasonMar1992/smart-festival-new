<template>
  <div style="text-align: center">
    <div
      class="flex-v"
      :style="{
        'background-image': 'url(' + picUrl + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        '-moz-background-size': '100% 100%',
      }"
    >
      <div style="padding-top: 30px">
        <van-image width="70%" :src="kaohe"></van-image>
      </div>
      <div
        style="
          margin-top: 20px;
          margin-left: 30%;
          margin-right: 30%;
          font-size: 28px;
          font-weight: 900;
          color: #fff;
          background-color: #396ca3;
          line-height: 40px;
          border-radius: 10px;
        "
      >
        会务安排
      </div>
      <div style="padding-top: 20px; padding-left: 20%; padding-right: 20%">
        <van-row>
          <van-col span="5">
            <div style="height: 40px">
              <div style="width: 100%; height: 15px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 15px"></div>
            </div>
          </van-col>
          <van-col span="14">
            <div style="font-size: 24px; font-weight: 600; color: #396ca3; line-height: 40px">
              行程安排
            </div>
          </van-col>
          <van-col span="5">
            <div style="height: 40px">
              <div style="width: 100%; height: 15px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 15px"></div>
            </div>
          </van-col>
        </van-row>
      </div>
      <div style="padding: 20px 15%">
        <van-image width="100%" :src="huiwu"></van-image>
      </div>

      <div style="padding-top: 20px; padding-left: 15%; padding-right: 15%">
        <van-row>
          <van-col span="4">
            <div style="height: 40px">
              <div style="width: 100%; height: 15px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 15px"></div>
            </div>
          </van-col>
          <van-col span="16">
            <div style="font-size: 24px; font-weight: 600; color: #396ca3; line-height: 40px">
              参会人员名单
            </div>
          </van-col>
          <van-col span="4">
            <div style="height: 40px">
              <div style="width: 100%; height: 15px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 15px"></div>
            </div>
          </van-col>
        </van-row>
      </div>

      <!-- <div style="padding: 10px; font-size: 12px; color: #353738">
        <div style="background-color: #396ca3">
          <van-row>
            <van-col span="3">
              <div style="color: #fff; line-height: 30px">序号</div>
            </van-col>
            <van-col span="3">
              <div style="color: #fff; line-height: 30px">姓名</div>
            </van-col>
            <van-col span="18">
              <div style="color: #fff; line-height: 30px">单位名称、职务</div>
            </van-col>
          </van-row>
        </div>
        <div
          style="background-color: #fdfdff; line-height: 30px; font-size: 13px; font-weight: 500"
        >
          省考核组成员名单
        </div>
        <div style="background-color: #dae7eb">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">1</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">余向宏</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">组 长</div>
            </van-col>
            <van-col span="15">
              <div style="line-height: 30px; text-align: start">衢州市风貌办美镇组组长</div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #fdfdff">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">2</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">江慧强</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">成 员</div>
            </van-col>
            <van-col span="15">
              <div style="line-height: 30px; text-align: start">
                浙江省建筑设计研究院规划分院副院长
              </div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #dae7eb">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">3</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">陶双龙</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">成 员</div>
            </van-col>
            <van-col span="15">
              <div style="line-height: 30px; text-align: start">
                金华市义乌市美丽城镇办技术组组长
              </div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #fdfdff">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">4</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">曾亦军</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">成 员</div>
            </van-col>
            <van-col span="15">
              <div style="line-height: 30px; text-align: start">舟山市美镇办技术组组长</div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #dae7eb">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">5</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">杜瑞雪</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">联络员</div>
            </van-col>
            <van-col span="15">
              <div style="line-height: 30px; text-align: start">省风貌办美丽城镇组组员</div>
            </van-col>
          </van-row>
        </div>
        <div
          style="background-color: #fdfdff; line-height: 30px; font-size: 13px; font-weight: 500"
        >
          嘉兴市陪同人员名单
        </div>
        <div style="background-color: #dae7eb">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">1</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">沈 伟</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">嘉兴市住房和城乡建设局副局长</div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #fdfdff">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">2</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">施君源</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">嘉兴市风貌办综合组组长</div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #dae7eb">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">3</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">夏 明</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">嘉兴市风貌办技术组副组长</div>
            </van-col>
          </van-row>
        </div>
        <div
          style="background-color: #fdfdff; line-height: 30px; font-size: 13px; font-weight: 500"
        >
          海宁市陪同人员名单
        </div>
        <div style="background-color: #dae7eb">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">1</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">吴一平</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">海宁市风貌办主任、住建局局长</div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #fdfdff">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">2</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">吴忠立</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">海宁市风貌办综合组组长</div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #dae7eb">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">3</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">王建光</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">海宁市风貌办宣传督导组组长</div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #fdfdff">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">4</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">范晓波</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">海宁市风貌办城乡风貌组组长</div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #dae7eb">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">5</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">孙黎莎</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">海宁市风貌办美丽城镇组组长</div>
            </van-col>
          </van-row>
        </div>
        <div
          style="background-color: #fdfdff; line-height: 30px; font-size: 13px; font-weight: 500"
        >
          斜桥镇陪同人员名单
        </div>
        <div style="background-color: #dae7eb">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">1</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">王枫铭</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">斜桥镇党委书记</div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #fdfdff">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">2</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">朱洪海</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">斜桥镇党委副书记、镇长</div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #dae7eb">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">3</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">诸 鸣</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">斜桥镇党委副书记</div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #fdfdff">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">4</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">徐金元</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">斜桥镇党委委员</div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #dae7eb">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">5</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">沈林华</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">斜桥镇党委委员</div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #fdfdff">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">6</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">董一帆</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">斜桥镇党委委员</div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #dae7eb">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">7</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">朱微微</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">斜桥镇党委委员</div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #fdfdff">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">8</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">吴晓丹</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">斜桥镇人民政府副镇长</div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #dae7eb">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">9</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">沈海明</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">斜桥镇人民政府副镇长</div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #fdfdff">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">10</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">张 立</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">斜桥镇人民政府副镇长</div>
            </van-col>
          </van-row>
        </div>
        <div style="background-color: #dae7eb">
          <van-row>
            <van-col span="3">
              <div style="line-height: 30px">11</div>
            </van-col>
            <van-col span="3">
              <div style="line-height: 30px">陈益丹</div>
            </van-col>
            <van-col span="1"> </van-col>
            <van-col span="17">
              <div style="line-height: 30px; text-align: start">斜桥镇驻镇规划师</div>
            </van-col>
          </van-row>
        </div>
      </div> -->

      <div style="padding: 20px 10px">
        <van-image width="100%" :src="excel1"></van-image>
      </div>

      <div style="padding-top: 20px; padding-left: 5%; padding-right: 5%">
        <van-row>
          <van-col span="3">
            <div style="height: 40px">
              <div style="width: 100%; height: 15px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 15px"></div>
            </div>
          </van-col>
          <van-col span="18">
            <div style="font-size: 24px; font-weight: 600; color: #396ca3; line-height: 40px">
              检查分组建议安排表
            </div>
          </van-col>
          <van-col span="3">
            <div style="height: 40px">
              <div style="width: 100%; height: 15px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 15px"></div>
            </div>
          </van-col>
        </van-row>
      </div>

      <div style="padding: 20px 10px">
        <van-image width="100%" :src="excel2"></van-image>
      </div>
    </div>
  </div>
</template>
<script>
// import Vconsole from 'vconsole';
import picUrl from '../../assets/xieqiao/bg.jpg';
import kaohe from '../../assets/xieqiao/kaohe.png';
import huiwu from '../../assets/xieqiao/huiwu.png';
import excel1 from '../../assets/xieqiao/table1.jpg';
import excel2 from '../../assets/xieqiao/table2.jpg';

// new Vconsole();

export default {
  data() {
    return {
      picUrl,
      kaohe,
      huiwu,
      excel1,
      excel2,
    };
  },
  methods: {
    go(string) {
      this.$router.push({
        name: string,
      });
    },
  },
  mounted() {},
};
</script>
