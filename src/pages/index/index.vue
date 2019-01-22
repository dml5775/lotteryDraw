<template>
    <div>
        <div class="AD-Banner">
            <img src="../../assets/img/ad01.jpg">
        </div>
            <div class="container">
                <div class="AC-Details">
                    <div>面朝书海，春暖花开！亲爱用户，只要订购包月包，即获得抽奖机会，即时开奖，100%中奖。订购前还赠送一次抽奖机会哦！ <a class="fr" href="rule.html">活动规则</a></div>
                </div>
                <div class="Lottery-Number">您还有{{AwardNum}}次抽奖机会!</div>
                <div class="Turnplate-Banner">
                    <div class="turnplate"> <img  :style="{transform:rotate_angle}" :class="rotate_transition" id="wheelcanvas" src="../../assets/img/turnplate.png"> <img class="pointer" @click="doLot" src="../../assets/img/turnplate-pointer.png?new"> </div>
                        <!--转盘代码 结束 -->
                    </div>
                </div>
                <div class="container01">
                    <div class="Explain">通过本页面订购以下包月包，即可获得1次免费抽奖机会，100%中奖。活动仅限电信用户。</div>
                    <!--包月start-->
                    <div class="Month-sum-bg"><img src="../../assets/img/container01_bg.png"></div>
                        <div class="Month-sum" v-for="(books,index) in MonthList" :key="index">
                            <div class="month-img"><img :src="books.bookPic"></div>
                                <div class="txt">
                                    <p><strong>{{books.bookName}}</strong></p>
                                    <p>价格：<span class="ftred">{{books.bookPrice}}元/月</span></p>
                                    <p>数量：{{books.bookNum}}本</p>
                                    <p class="info-txt">{{books.bookInfo}}</p>
                                    <div class="Month-btn">
                                        <div v-if="!isBaoYue[index].show" class="btn" @click="buyBaoYue(index)">立即订购</div>
                                        <div v-else class="ydy"></div>
                                    </div>
                                </div>
                            </div>
                            <!--包月end-->
                        </div>
                        <div class="jpgz">
                            <div class="jpgz1"><a href="rule.html" class="z_award">活动规则</a></div>
                            <div class="jpgz1"><a href="myAward.html">我的奖品</a></div>
                        </div>
                    </div>
</template>
<script>
export default {
    data() {
        return {
            rotate_angle: -1, //将要旋转的角度
            rand_circle: 8, //旋转多少圈                      
            rotate_transition: "rotate-transition1", //初始化选中的过度属性控制            
            click_flag: true, //是否可以旋转抽奖
            lotIndex: 0,
            AwardNum: 0,
            prizeList: [{
                    id: 7,
                    name: "2元电信话费"
                },
                {
                    id: 0,
                    name: "小米手机4"
                },
                {
                    id: 1,
                    name: "5元电信话费"
                },
                {
                    id: 2,
                    name: "电纸书"
                },
                {
                    id: 3,
                    name: "10元电信话费"
                },
                {
                    id: 4,
                    name: "爱国者耳机"
                },
                {
                    id: 5,
                    name: "5元体验阅点劵"
                },
                {
                    id: 6,
                    name: "充电宝"
                }
            ],
            MonthList: [{
                    bookID: '1',
                    bookName: '热门爽文',
                    bookPrice: 10,
                    bookNum: 60,
                    bookInfo: '这里有剑与魔法的较量，武侠与异能的比拼，撕开空间穿越异界，回朔时间重生过去，仙人与魔鬼，美色与阴谋。',
                    bookPic: require('../../assets/img/fm1.png')
                },
                {
                    bookID: '2',
                    bookName: '豪门盛宴',
                    bookPrice: 10,
                    bookNum: 80,
                    bookInfo: '看玛丽苏如何俘获霸道总裁成功攀上人生巅峰，傲娇小公举虐心遭遇惹人怜。各种霸道总裁爱上我的故事让你爱不释手。',
                    bookPic: require('../../assets/img/fm2.png')
                },
                {
                    bookID: '3',
                    bookName: '友诺精品包',
                    bookPrice: 10,
                    bookNum: 40,
                    bookInfo: '唯唯诺诺，超萌诙谐，中国首套完美诠释屌丝的职场人漫画书',
                    bookPic: require('../../assets/img/fm3.png')
                }
            ],
            isBaoYue: [{ show: false }, { show: false }, { show: false }]
        }
    },
    created() {
        this.rotate_angle = "rotate(" + this.rotate_angle + "deg)";
    },
    methods: {
        rndNum: function() {
            //随机获得奖品
            return Math.floor(Math.random() * 8)
        },
        doLot() {
            var _this = this;
            if (_this.AwardNum == 0) {
                alert("您没有抽奖机会，请包月抽奖~");
                return false
            }
            if (_this.click_flag) {
                _this.click_flag = false;
                _this.lotIndex = _this.rndNum();
                _this.AwardNum -= 1;
                _this.rotateAngle(_this.lotIndex);
            }

        },
        rotateAngle(item) {
            var _this = this;
            var angles = item * (360 / _this.prizeList.length) - (360 / (_this.prizeList.length * 2));
            if (angles < 270) {
                angles = 270 - angles;
            } else {
                angles = 360 - angles + 270;
            }
            angles = angles + _this.rand_circle * 360;
            _this.rotate_angle = "rotate(" + angles + "deg)";
            _this.rotate_transition = "rotate-transition1";
            setTimeout(function() {
                alert("您抽中了" + _this.prizeList[(item + 1) > _this.prizeList.length - 1 ? 0 : item + 1].name)
                _this.click_flag = true;
                _this.game_over();
            }, (_this.rand_circle - 1) * 1000); // 延时，保证转盘转完
        },
        game_over() {
            this.click_flag = true;
            this.rotate_transition = "rotate-transition2";
            this.rotate_angle = "rotate(" + 0 + "deg)";
        },
        buyBaoYue(index) {
            this.isBaoYue[index].show = true;
            this.AwardNum += 1;

        }
    }
}
</script>
<style lang="less">
* {
    margin: 0;
    padding: 0;
}

body,
ul,
ol,
li,
p,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
table,
td,
img,
div {
    margin: 0;
    padding: 0;
    border: 0;
}

body {
    background: #6c97d5;
    background-size: 100%;
    overflow-x: hidden;
    color: #696969;
    font-size: 36px;
    font-family: "Microsoft YaHei", "Helvetica";
}

ul,
ol {
    list-style-type: none;
}

select,
input,
img,
select {
    vertical-align: middle;
}

input {
    font-size: 1em;
}

a {
    text-decoration: none;
    color: #000;
}

a:hover {
    color: #000;
    text-decoration: none;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

.btn {
    background: #fabe00;
    border-radius: 8px;
    color: #000;
    font-size: 1em;
    height: 36px;
    line-height: 36px;
    text-align: center;
    cursor: pointer;
    padding: 0 10px;

    a {
        color: #fff;
    }
}


.container {
    padding: 5px 10px 10px 10px;
    margin: 0 auto;
    background: url(../../assets/img/turnplate_bg.png) no-repeat bottom;
    background-size: 100%;
}

.container01 {
    background: #9bbbe9;
    padding: 5px 10px 10px 10px;
    margin: 0 auto;
}

.container02 {
    padding: 5px 10px 10px 10px;
    margin: 0 auto;
}

#wheelcanvas {
    width: 100%;
    transform: rotate(0deg);
}
.rotate-transition1{
    transition:transform 6s ease-in-out;
}
.rotate-transition2{
    transition:transform 0s ease-in-out;
}
.AD-Banner {
    overflow: hidden;

    img {
        width: 100%;
    }
}

.AC-Details {
    font-size: 12px;
    line-height: 20px;
    width: 100%;
    height: 70px;
    color: #fff;

    div {
        padding: 15px;
    }

    a {
        color: #fabe00;
        text-decoration: underline;
    }
}



.layout {
    background: #fff;
    padding: 30px 10px 30px 10px;
    margin-top: -4%;
    margin-bottom: 10px;
}

.layout01 {
    background: #fff;
    padding: 30px 0;
    margin-top: -4%;
    margin-bottom: 10px;
}


.Lottery-Number {
    background: #e9545f;
    font-size: 20px;
    color: #fff;
    text-align: center;
    margin: 10px auto;
    line-height: 40px;
    width: 80%;
    border-radius: 20px;

    span {
        color: #fabe00;
        font-size: 1.25em;
        padding: 0 3px;
    }

}


.Turnplate-Banner {
    display: block;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
}

.Turnplate-Banner .turnplate {
    display: block;
    width: 100%;
    position: relative;
}
.Turnplate-Banner .turnplate img.pointer {
    position: absolute;
    width: 35.5%;
    height: 42.5%;
    left: 32.6%;
    top: 25%;
    cursor: pointer;
}

.Explain {
    background: url(../../assets/img/icon01.png) no-repeat;
    background-size: 27px;
    text-indent: 2.5em;
    font-size: 0.9em;
    line-height: 24px;
    color: #1a437f;
    margin-bottom: 10px;
}


.Month-sum {
    background: #fff;
    display: -webkit-box;
    padding: 30px 10px 10px 10px;
    margin-top: -4%;
    font-size: 0.9em;
}

.Month-sum strong {
    font-size: 1.25em;
}

.Month-sum div {
    -webkit-box-flex: 1;
}

.Month-sum .month-img {
    width: 40%;
}

.Month-sum .month-img img {
    width: 96%;
}

.Month-sum .txt {
    width: 70%;
    line-height: 26px;
    position: relative;
}

.Month-sum-bg img {
    width: 100%;
}

.Month-btn {
    right: 0px;
    top: 5px;
    position: absolute;
    width: 45%;
}

.Month-btn .ydy {
    background: url(../../assets/img/ydy.png) no-repeat;
    background-size: 100%;
    height: 80px;
}

.info-txt {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
}

.jpgz {
    background: #4e7aba;
    display: -webkit-box;
    height: 60px;
}

.jpgz1 {
    -webkit-box-flex: 1;
    height: 40px;
    margin-top: 10px;
}

.jpgz1 a {
    display: block;
    height: 100%;
    width: 100%;
    text-align: center;
    font-size: 1.25em;
    line-height: 40px;
    color: #fff;
}
</style>