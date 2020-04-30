<template>
  <div>
      <headerAsideMenu/>
      <div class="school-container">
        <div class="up-part" @click="check" :style="{background:`url(${base + 'school-up-bg.png'})`}">
            <!-- <a class="check-btn" href="javascript:;" @click="check"></a> -->
        </div>
        <div class="down-part" :style="{background:`url(${base + 'school-down-bg.png'})`}">
            <div class="up-item-box" v-for="(item, index) in upItemList" :key="'up-'+index" :style="{left: item.left}">
                {{item.text}}
            </div>
            <div class="center-box" :style="{background:`url(${base + 'school-littleBox.png'})`}">
                <span>亚 卓 学 院</span>
            </div>
            <div class="down-item-box" v-for="(item, index) in downItemList" :key="'down-'+index" :style="{left: item.left}">
                {{item.text}}
            </div>
        </div>
      </div>
      <backTop/>
      <tail/>
  </div>
</template>

<script>
export default {
    data () {
        return {
            upItemList: [
                {
                    text: '优 秀 教 师',
                    left: '24%'
                },
                {
                    text: '原 创 分 享',
                    left: '36%'
                },
                {
                    text: '专 家 名 师',
                    left: '52%'
                },
                {
                    text: '论 坛',
                    left: '64%'
                },
                {
                    text: '积 分 商 城',
                    left: '75%'
                }
            ],
            downItemList: [
                {
                    text: '特 色 学 校',
                    left: '19%'
                },
                {
                    text: '社 区',
                    left: '30%'
                },
                {
                    text: '案 例 精 选',
                    left: '58%'
                },
                {
                    text: '产 品 教 程',
                    left: '70%'
                }
            ]
        }
    },
    methods: {
        check () {
            alert('敬请期待')
        }
    }
}
</script>

<style scoped lang="less">
.school-container{
    .up-part{
        position: relative;
        height: 600px;
        // background-image: url(http://182.148.48.236:54321/source/images/school-up-bg.png);
        background-size: 100% 100%!important;
        cursor: pointer;
        // .check-btn{
        //     display: block;
        //     width: 9%;
        //     height: 7%;
        //     position: absolute;
        //     top: 74%;
        //     left: 34%;
        // }
    }
    .down-part{
        position: relative;
        width: 100%;
        height: 549px;
        background-size: 100% 100%!important;
        .up-item-box, .center-box, .down-item-box{
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(255,255,255,1);
            cursor: pointer;
        }
        .up-item-box, .down-item-box{
            position: absolute;
            width: 98px;
            height: 40px;
            background:linear-gradient(180deg,rgba(80,183,235,1),rgba(0,122,183,1));
            border-radius:6px;
            font-size: 14px;
            line-height: 40px;
            text-align: center;
        }
        .up-item-box{
            top: 232px;
            left: 200px;
            &:hover{
                transform: scale(1.2);
                opacity: .9;
                &::before{
                    bottom: -32px;
                }
            }
            &::after{
                content: '';
                position: absolute;
                bottom: -11.3px;
                left: 0;
                right: 0;
                margin: auto;
                display: block;
                width: 0;
                height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 13px solid rgba(0,122,183,1);
            }
            &::before{
                content: '';
                position: absolute;
                width:10px;
                height:10px;
                background:linear-gradient(90deg,rgba(77,181,233,1),rgba(4,125,185,1));
                border-radius:50%;
                bottom: -40px;
                left: 50%;
                transform: translateX(-50%);
            }
        }
        .center-box{
            position: absolute;
            top: 0;;
            right: 6%;
            bottom: -58px;
            left: 0;
            margin: auto;
            width: 160px;
            height: 64px;
            // background-image: url(http://182.148.48.236:54321/source/images/school-littleBox.png);
            background-size: 100% 100%!important;
            background-repeat:no-repeat;
            text-align: center;
            &:hover{
                transform: scale(1.2);
                opacity: .9;
            }
            span{
                font-size:28px;
                line-height: 64px;
            }
        }
        .down-item-box{
            top: 352px;
            left: 500px;
            &:hover{
                transform: scale(1.2);
                opacity: .9;
                &::before{
                    bottom: 69px;
                }
            }
            &::after{
                content: '';
                position: absolute;
                top: -11.3px;
                left: 0;
                right: 0;
                margin: auto;
                display: block;
                width: 0;
                height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-bottom: 13px solid rgba(80,183,235,1);
            }
            &::before{
                content: '';
                position: absolute;
                width:10px;
                height:10px;
                background:linear-gradient(90deg,rgba(77,181,233,1),rgba(4,125,185,1));
                border-radius:50%;
                bottom: 80px;
                left: 50%;
                transform: translateX(-50%);
            }
        }
        @media screen and (max-width: 1680px) {
            .up-item-box, .down-item-box{
                position: absolute;
                width: 80px;
                height: 32px;
                background:linear-gradient(180deg,rgba(80,183,235,1),rgba(0,122,183,1));
                border-radius:4px;
                font-size: 12px;
                line-height: 32px;
                text-align: center;
            }
             .up-item-box{
                 top: 240px;
             }
             .down-item-box{
                 top: 361px;
             }
            .center-box{
                width: 120px;
                height: 48px;
                span{
                    width:161px;
                    font-size:18px;
                    line-height: 48px;
                }
            }
        }
    }
}
</style>