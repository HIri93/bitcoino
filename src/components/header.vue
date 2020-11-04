<template>
<div class="navbar-container">
    <!-- left side of header -->
    <div class="navbar">
        <!-- <a id= icon href = "#"><Image/></a> -->
        <router-link to="/Home"><Image/></router-link>
        <button class = "btn1">
            ثبت نام
            <i class="fa fa-user-plus"></i>
        </button>
        <button class = "btn1">
            ورود
            <i class="fa fa-lock"></i>
        </button>
    </div>

    <!-- right side of header -->
    <div class="navbar-right">
        <router-link to="/home">صفحه اصلی</router-link>
        <router-link to="/allcoins">قیمت ارزها</router-link>
        <a href = "#">دانشنامه</a>
        <a href = "#">وبلاگ</a>
        <!-- <a href="#" class="orange-tag">کیف پول امن</a> -->
        <router-link to="/wallet" class="orange-tag">کیف پول امن</router-link>
        <a href="#" class="blue-tag">درگاه پرداخت رمزارز<img src="https://www.excoino.com/static/img/f801afe104db1de048b65087aaebb688.png"></a>
    </div>
</div>
    
</template>

<script>
import Image from './Image'

export default {
    components: {
        Image,
    }
}
</script>

<style>
.navbar-container {
    display: flex;
    justify-content: space-between;
    border: 1px solid rgb(232, 232, 232);
    box-shadow: 1px 2px 3px rgb(235, 235, 235);
}
.navbar {
    height: 80px;
    display: flex;
    align-items: center ;
    
}
.navbar-right {
    min-width: 200px;
    height: 80px;
    display: flex;
    flex-direction: row-reverse;
}
.navbar-right > a {
    height: 61px;
    display: flex;
    align-items: center;
    padding: 5px 24px;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
}
.navbar-right > a.orange-tag {
    color: #f7972b;
}
.navbar-right > a.blue-tag {
    color: #2e3191;
}
.navbar-right > a.blue-tag > img {
    width: 25px;
    height: 27.68px;
    margin: 0px;
}

.navbar > button {
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
a {
    align-items: center;
    text-decoration: none;
    color: black;
}
</style>
