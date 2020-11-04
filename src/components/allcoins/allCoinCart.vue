<template>
    <div class="all-coin-cart">
        <div class="heder-coin-cart">
            <h1>
            قیمت لحظه ای بیت کوین و ارزهای برتر
            </h1>
        </div>
        <div>
            <table class="coin-table">
                <thead>
                    <th>
                        <td>رتبه</td>
                        <td>نام ارز</td>
                        <td class="m">نماد</td>
                        <td>قیمت دلاری</td>
                        <td>قیمت فروش ما(ریال)</td>
                        <td>قیمت خرید ما (ریال)</td>
                        <td>حجم بازار(دلار)</td>
                        <td class="n">رشد روزانه</td>
                    </th>
                </thead>
                <tbody class="coin-cart body">
                    <Bodycoins/>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import Bodycoins from './bodycoins'
export default {
    components: {
        Bodycoins,
    }
    
}
</script>
<style>
.all-coin-cart {
    margin: 30px 100px 0 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #444444;
}
.coin-table {
    font-size: 14px;
    border-collapse: collapse;
    width: 100%;
}
td, th {
    direction: rtl;
    padding: 10px 15px 5px 20px;
    text-align: center;
    margin: 0;
    display: flex;
    justify-content: space-between;
}
td {
    display: flex;
    flex-wrap: nowrap;
}
td:first-child {
    width: 50px;
}
th {
    font-size: 12px;
}
.m { 
    margin-right: 40px;
}
.n {
    direction: ltr;
}
</style>