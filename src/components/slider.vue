<template>
    <div class="slider">
        <div class="slider-box">
            <div class="slider-box-input">
              <div class="slider-box-left">
                  <b>پرداخت میکنید</b>
                  <input class="slider-input">
              </div>
              <div class="slidr-box-right">
                <Dropdown/>
              </div>
            </div>
            <div class="slider-box-input">
              <div class="slider-box-left">
                <b>دریافت می کنید</b>
                <input class="slider-input">
              </div>
               <div class="slidr-box-right">
                 <Dropdown/>
              </div>
            </div>
            <button class="slider-box-btn">
              ثبت سفارش
            </button>
        </div>
        <div class="imageContainer" 
            v-for="(img, i) in images" 
            :key="i" :ref="`images-${i}`">
            <img :src="img" />
        </div>
    </div>
</template>
<script>
import Dropdown from './Dropdown'

export default {
  name: "Slider",
  components: {
    Dropdown,
  },
  data() {
    return {
      images: [
        "https://www.excoino.com/assets/slider/8ffb37b78d95dd10e28e33be765ed5e4.jpg",
        "https://www.excoino.com/assets/slider/4b3baea27f5e3ccbafe370b887405c30.jpg",
        "https://www.excoino.com/assets/slider/76a24113e53731214d1989957b59f974.jpg",
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.$refs[`images-${this.currentIndex}`].classList.add('active');  
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      
      this.$refs[`images-${this.currentIndex}`].classList.remove('active')

      if (this.currentIndex === 2) {
          this.currentIndex = 0;
      } else {
          this.currentIndex += 1;
      }

      this.$refs[`images-${this.currentIndex}`].classList.add('active')
    },
  },
};
</script>
<style>
.slider {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    position: relative;
    height: 372px;

}
.slider-box{
    position: absolute;
    display: flex;
    width: 500px;
    top: 51px;
    bottom: 51px;
    left: 90px;
    z-index: 1;
    flex-direction: column;
    justify-content: space-between;
}
.slider-box-input {
    display: flex;
    width: 500px;
    height: 65px;
    background-color: #ffff;
    border-radius: 6px;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.24),0 8px 9px 1px rgba(0,0,0,0.19);
    
}
.slider-box-input:first-child {
  z-index: 3;
}
.slider-box-input:last-child {
  z-index: 2;
}
.slider-box-btn {
    transition: all ease .2s;
    font-size: 19px;
    width: 500px;
    height: 65px;
    color: #fff;
    padding: 15px!important;
    background-color: #3798db;
    border-radius: 6px;
    border: 1px solid transparent;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.24),0 8px 9px 1px rgba(0,0,0,0.19);
}
.slider-box-btn:focus {
    outline: none;
}
.slider-box-btn:hover {
    transition: all ease .4s;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.30),0 8px 9px 1px rgba(0,0,0,0.25);
    cursor: pointer;
    transform: scale(1.02);
} 
.slider-box-left {
    display: flex;
    flex-direction: column;
    max-width:300px;
    height: 65px;
}
.slider-box-left > b {
  display: flex;
  flex-wrap: nowrap;
  font-size: 12px;
  color: #aeaeae;
  max-width: 80px;
  height: 20px;
  margin: 8px 0 0px 20px;
  padding: 0px;
  text-align: center;
}
.slidr-box-right {
  background-color: #ecf0f1;
  display: flex;
  flex-grow: 1;
  margin: 4px;
  border-radius: 6px;
  border: 1px solid rgb(219, 219, 219);

}
.slider-input {
  display: flex;
  margin: 0px 0px 4px 8px;
  border: none;
  font-size: 24px;
}
.slider-input:focus {
  outline: none;
}
.imageContainer {
    transition: all ease-in 0.2s;
    position: absolute;
    width: 100%;
    left: 100%;
}
.imageContainer.active {
    transition: all ease-in 0.35s;
    left: 0;
}
img {
  height:auto;
  width:100%;
}
</style>