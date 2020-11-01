<template>
  <div>
    <Header />
    <Slider />
    <Support />
    <Advertisement />
    <Digitalcoin />
    <News/>
    <Finish/>
  </div>
</template>

<script>
import Header from '../components/header'
import Slider from '../components/slider'
import Support from '../components/support'
import Advertisement from '../components/advertisement'
import Digitalcoin from '../components/digitalcoin'
import News from '../components/news'
import Finish from '../components/finish'
export default {
  name: 'App',
  components: {
    Header,
    Slider,
    Support,
    Advertisement,
    Digitalcoin,
    News,
    Finish
}
}
</script>

<style>
html,body {
  margin: 0px;
}
</style>
