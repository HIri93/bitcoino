<template>
    <div class="digitalcoin">
        <div class="digitalcoin-header">
            <router-link to="/allcoins"><i class="fas fa-angle-left"/> لیست کامل ارزها</router-link>
            <h2>
                قیمت لحظه ای ارزهای دیجیتال
            </h2>
        </div>
        <hr>
        <div class="coin-cart">
            <Coincart />
        </div>

    </div>
</template>
<script>
import Coincart from './coincart'
export default {
    components: {
        Coincart,
    }
    
}
</script>
<style>
.digitalcoin {
    margin-left:50px ;
    margin-right: 50px;
}
.digitalcoin-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.digitalcoin-header > h2 {
    display: flex;
    align-items: center;
    margin: 15px 7px 8px 0px;
    color: #726762;

}
.digitalcoin-header > a {
    align-items: center;
    margin: 22px 0 8px 7px;
    color: #3c97d0;
    font-weight: bold;
    font-size: 16px;

} 
.digitalcoin-header > a:hover {
    color: #03144d  ;
}
.coin-cart {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    border-radius: 15px;
}
</style>