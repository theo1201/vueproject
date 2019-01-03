<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120"></textarea>
        
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼：&nbsp; 用户：匿名用户
                </div>
                <div class="cmt-body">
                    锄禾日刀舞
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼：&nbsp; 用户：匿名用户
                </div>
                <div class="cmt-body">
                    锄禾日刀舞
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼：&nbsp; 用户：匿名用户
                </div>
                <div class="cmt-body">
                    锄禾日刀舞
                </div>
            </div>
        </div>

        <mt-button type="primary" size="large">发表评论</mt-button>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin: 10px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }

        }
    }
}


</style>
