<template>
    <div class="news">
         <div class="news-header">
            <a href="#"><i class="fas fa-angle-left"/>موارد بیشتر </a>
            <h2>
                آخرین اخبار ارزهای دیجیتال
            </h2>
        </div>
            <hr>
        <div class="news-pic">
            <PicNews/>
        </div>
    </div>
</template>
<script>
import PicNews from './picNews'
export default {
    components: {
        PicNews,
    }
}
</script>
<style>
.news {
    margin-left:50px ;
    margin-right: 50px;
}
.news-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.news-header > h2 {
    display: flex;
    align-items: center;
    margin: 15px 7px 8px 0px;
    color: #726762;

}
.news-header > a {
    display: flex;
    align-items: center;
    margin: 22px 0 8px 7px;
    color: #3c97d0;
    font-weight: bold;
    font-size: 16px;
} 
.news-header > a:hover {
    color: #03144d  ;
}
.news-header > a > i {
    margin-top: 4px;
    margin-right: 3px;
}
.news-pic {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
}

</style>