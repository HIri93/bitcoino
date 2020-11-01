<template>
    <div class="drop-down" @click="clickShow">
        <img :src="selected.icon" />
        <p>{{selected.title}}</p>
        <i class="fa fa-caret-down" />
        <div class="drop" v-if="show" >
            <div v-for="(item, i) in excludeList()" :key="i" class="drop-item-select" @click="() => selectCurrency(item)">
                <img :src="item.icon" />
                <p>{{item.title}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  created () {
      this.selected = this.currencyList[0];
  },
    data (){
        return {
            currencyList: [
                {
                    icon: 'https://www.excoino.com/static/img/dc17a2daec2309ce12c67ac09b560ef4.png',
                    title: 'Bitcoin'
                },
                {
                    icon: 'https://www.excoino.com/static/img/1b19398ad2d337197f0a5f8fb5cd4b31.png',
                    title: 'Etter'
                },
                {
                    icon: 'https://www.excoino.com/static/img/384d9f98f12d1bcfa0a1fbfe6bfb71c4.png',
                    title: 'cardano'
                },
                {
                    icon: 'https://www.excoino.com/static/img/6e3d3a5816c232dbfbb863dd358d476d.png',
                    title: 'monro'
                },
            ],
            selected: {},
            show: false,
        }
    },
    methods:{
        selectCurrency (selectedItem) { 
            this.selected = selectedItem
        },
        excludeList () { 
            return this.currencyList.filter( item => item.title !== this.selected.title)
        },
        clickShow() {
            this.show = !this.show;
        }
    }
}
</script>
<style>
.drop-down {
    z-index: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #314254;
    height: 100%;
    width: 100%;
    padding: 0 8px;
    cursor: pointer;
}
.drop-down > img, .drop-item-select > img {
    height: 40px;
    width: 40px;
}
.drop-down > p, .drop-item-select > p {
    user-select: none;
}
.drop {
    position: absolute;
    top: 100%;
    width: 100%;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    right: 0;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 150px;
    direction: rtl;
}
.drop-item-select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100%
}
.drop-item-select > img {
    margin: 0 16px;
}
.drop-item-select > p {
    padding-left: 10px;
}
.drop-item-select:hover {
    background-color: #bfc2c5;
}

</style>