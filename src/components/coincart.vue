<template>
    <div v-for="(item,i) in coins()" :key="i" class="coin-cart-0">
        <div class="coin-cart-one">
            <span class="cpoin-span0">
                <img :src="'https://excoino.com/' + item.logo_main" class="coin-img">
                <p class="support-p">
                    {{item.name_locale}}
                </p>
            </span>
            <span class="coin-span1">
                <p>
                    {{item.iso}}
                </p>
            </span>
        </div>
        <div class="coin-price">
            <p>
                {{item.price}} <i class="fas fa-dollar-sign"/>
            </p>
        </div>
        <button class="coin-btn">
            خرید/فروش
        </button>
    </div>
</template>
<script>
export default {
  methods: {
      coins () {
          return this.coicCart.filter(item => item.name !== 'Rial')
      }
  },
  created () {
      fetch('https://www.excoino.com/api/v3/core/currencies')
      .then((responseText) => {
          if (responseText.status === 200) {
              return (responseText.json())
          } else {
              Promise.reject(`status is: ${responseText.status}`)
          }
          
      })
      .then((responseObject) => {
          this.coicCart = responseObject;
      })
      .catch((err) => {
          console.log("error on fetching coin list : ", err);
      })
  },
  data () {
    return {
        coicCart:[],
    }
  },
    
}
</script>
<style>
.coin-cart-0 {
width: 24%;
padding: 8px 15px 15px 15px;
margin-bottom: 30px;
background-color: #eeeeee;
border-radius: 10px;
min-width: 200px;
margin-left: 12px;
}
.coin-img {
    height: 30px;
    width: 30px;
}
.coin-cart-one {
    
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
}
.coin-cart-one > p:last-child {
    margin-right: 140px;
}
.cpoin-span0 {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
}
.coin-price {
    display: flex;  
    justify-content: center;
    font-weight: bold;
    font-size: 25px;
    color: #2c3e50;
}
.coin-btn {
    transition: all ease .2s;
    width: 100%;
    height: 45px;
    background-color: #3798db;
    color: white;
    font-size: 18px;
    justify-items: center;
    border: none;
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.24),0 8px 9px 1px rgba(0,0,0,0.19);
}
.coin-btn:hover {
    transition: all ease .4s;
    transform: scale(1.02);
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.30),0 8px 9px 1px rgba(0,0,0,0.25);
}
.coin-btn:focus {
    outline: none;
}
</style>