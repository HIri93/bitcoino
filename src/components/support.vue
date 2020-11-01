<template>
    <div class="support-discription">
       <div class="discription">
           <div v-for="(item,i) in currecy" :key="i"  class="suppoort" >
                <img :src="item.icon">
                <p class="support-p">
                    {{item.title}}
                </p>
                <p class="support-ptow">
                    {{item.discription}}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
        currecy: [
            {
                icon:'https://www.excoino.com/static/img/3756ab5924dd2a27c01787d49391c3c6.png',
                title:'پشتیبانی آنلاین',
                discription:'کارشناسان پشتیبانی در تلگرام نیز آماده پاسخگویی و راهنمایی کاربران'

            },
            {
                icon:'https://www.excoino.com/static/img/d7ba736c1a9bf1f33fd5f5a34013bb0a.png',
                title:'امنیت خرید و فروش',
                discription:'بستری امن برای انجام معاملات خرید و فروش ارزها و اطمینان انجام تمام سفارشات'
            },
            {
                icon:'https://www.excoino.com/static/img/1f60d460fe650d1946c20bdd763ea32a.png',
                title:'تضمین قیمت مناسب',
                discription:'ارائه قیمت منصفانه و رقابتی جهت ایجاد رضایت کاربران با کارمزدی اندک در شبکه'
            },
            {
                icon:'https://www.excoino.com/static/img/212b3cbbb4cbfaa34a79eebc735b2a25.png',
                title:'رابط کاربری آسان',
                discription:'محیط کاربری ساده و روان برای سهولت در انجام سفارشات خرید و فروش و پیگیری'
            }
        ]
    }
  },
}
</script>
<style>
.support-discription {
    justify-items: center;
    background-color: white;
    height: 373px;

}
.discription {
    margin: 0 90.5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 100%;
}
.suppoort {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    height: 200px;
    width: 200px;
}
.suppoort > img {
    height: 108px;
    width: 104px;
}
.support-ptow {
    font-size: 11px;
    font-weight: normal;
    margin: 0;
    text-align: center;
    color: rgb(17, 17, 17);

}
.support-p {
    margin: 12px 0;
    color: rgb(44, 62, 80);
    text-align: center;
    font-size: 23px;
    white-space: nowrap;
    font-weight: bold;
}
</style>