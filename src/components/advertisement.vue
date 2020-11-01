<template>
    <div class="adv">
        <a href="#">
        <img src="https://www.excoino.com/static/img/e435f67dd4bf36390dc53add0335664b.png"/>
        <div class="adv-text">
            <h2>
                اپلیکیشن اکسکوینو
            </h2>
            <p>
                از طریق اپلیکیشن اکسکوینو در هرجایی خرید و فروش کنید
            </p>
        </div>
        <div class="adv-icon">
            <h2>
                دانلود اپلیکیشن اندروید
            </h2>
            <i class="fa fa-download" aria-hidden="true"></i>
        </div>
        </a>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.adv {
    display: flex;
    margin-left:50px ;
    margin-right: 50px;
    height: 150px;
    
    }
.adv > a {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    border-radius: 10px;
    width: 100%;
    z-index: 0;
    align-items: space-between;
}
.adv-text {
    direction: rtl;
    position: absolute;
    width: 450px;
    height: 85px;
    z-index: 1;
    margin-right: 50px;
    color: white;
}
.adv-icon {
    display: flex;
    align-items: center;
    color: white;
    font-size: 15px;
    position: absolute;
    background-color: #d5a64a;
    width: 240px;
    height: 60px;
    z-index: 1;
    margin-right: 960px;
    border-radius: 32px;
    border: 2px solid white;
    
}
.adv-icon >h2 {
    margin-right: 2px;
}

</style>