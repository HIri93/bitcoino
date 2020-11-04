<template>
    <div>
       <Header/>
       <AllCoinsCart/>
    </div>
</template>
<script>
import Header from '../components/header'
import AllCoinsCart from '../components/allcoins/allCoinCart'
export default {
  methods: {
  },
    name: 'Allcoins',
    components: {
         Header,
         AllCoinsCart,
    }  
}
</script>