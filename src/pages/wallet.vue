<template>
    <div>
        <div class="wallet-header">
            <div class="wallet-header-left">
                <!-- <a href = "#"><Image/></a> -->
                <router-link to="/Home"><Image/></router-link>
                <button class = "btn1">
                    ثبت نام
                     <i class="fa fa-user-plus"></i>
                </button>
                <button   button class = "btn1">
                    ورود
                    <i class="fa fa-lock"></i>
                </button>
            </div>
            <div class="wallet-header-right">
                 <router-link to="/home">صفحه اصلی</router-link>
                <a href = "#">وبلاگ</a>
                <a href = "#">آموزش ها</a>
                <a href = "#">تحلیل</a>
                <!-- <a href="#" class="orange-tag">کیف پول امن</a> -->
                <router-link to="/wallet" class="orange-tag">کیف پول امن</router-link>
            </div>
        </div>
        <div class="wallet-text">
            <WalletText/>
        </div>
    </div>
</template>
<script>
import Image from '../components/Image'
import WalletText from '../components/wallet/walletText'
export default {
    components: {
        Image,
        WalletText,
    }
}
</script>
<style>
.wallet-header {
    display: flex;
    justify-content: space-between;
    border: 1px solid rgb(232, 232, 232);
    box-shadow: 1px 2px 3px rgb(235, 235, 235);
}
.wallet-header-left {
    height: 80px;
    display: flex;
    align-items: center ;
}
.wallet-header-left > button {
    align-items: center;
    background-color: #3798db;
    color: white;
    padding: 8px;
    margin-left:20px;
    height: 40px;
    border: 0;
    cursor: pointer;
    border-radius: 4px;
    min-width: 100px;
    font-size: 15px;
}
.btn1:hover {
    transition: all ease .2s;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.24),0 8px 9px 1px rgba(0,0,0,0.19);
    color: orange;
}
.btn1:active , .btn1:focus{
    outline: none;
}
.btn1:active {
    background-color: #217dbb;
    color:green;
}
.wallet-header-right {
    min-width: 200px;
    height: 80px;
    display: flex;
    flex-direction: row-reverse;
}
.wallet-header-right > a {
    color: #848484;
    height: 61px;
    display: flex;
    align-items: center;
    padding: 5px 24px;
    font-size: 14px;
    text-align: center;
}
.wallet-header-right > a.orange-tag {
    color: #ffb000;
    border-bottom: 3px solid #ffb000;
}
.wallet-header-right > a:hover {
    color: #ffb000;
    border-bottom: 3px solid #ffb000;
}
.wallet-text {
    margin: 0 115px 0 115px;    
}
</style>