<template>
    <div v-for="(item,i) in allCoin" :key="i" class="body-t">
        <tr>
            <td>{{i+1}}</td>
            <td>
                <img :src="item.logo" class="coin-body-img">
                    {{item.name_en}}
            </td>
            <td class="m">{{item.symbol}}</td>
            <td>{{item.price}}</td>
            <td>{{item.price_sell}}</td>
            <td>{{item.price_buy}}</td>
            <td>{{item.market_cap}}</td>
            <td class="n">{{item.daily_change_percent}}</td>
        </tr>
    </div>
</template>
<script>
export default {
  data () {
    return {
        allCoin:[]
    }
  },
    created () {
      fetch('https://www.excoino.com/api/v3/core/top-cryptos')
      .then((responseText) => {
          if (responseText.status === 200) {
              return (responseText.json())
          } else {
              Promise.reject(`status is: ${responseText.status}`)
          }
          
      })
      .then((responseObject) => {
          this.allCoin = responseObject;
      })
      .catch((err) => {
          console.log("error on fetching coin list : ", err);
      })
  },
  
    
}
</script>
<style>
td, tr {
    direction: rtl;
    padding: 10px 15px 5px 20px;
    text-align: center;
    margin-left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.coin-body-img {
    width: 30px;
    height: 30px;
}
td:first-child {
    width: 50px;
}
.body-t {
    background-color: #eeeeee;
    border-radius: 10px;
    width: 100%;
    margin: 5px 0 10px 0;
}
.m { 
    margin-right: 40px;
}
.n {
    direction: ltr;
}
</style>