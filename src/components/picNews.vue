<template>
    <div v-for="(item,i) in picNews" :key="i" class="pic-news">
        <div class="pic-news1">
            <a href="#">
                <img :src="item.image_media_url" class="pic-news-img">
            </a>
            <p>
                {{item.title}}
            </p>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
        picNews:[],
    }
  },
  created () {
      fetch('https://www.excoino.com/api/v3/blog/posts-by-criteria?tags_exclude=1439&per_page=6')
      .then((responseText) => {
          if (responseText.status === 200) {
              return (responseText.json())
          } else {
              Promise.reject(`status is: ${responseText.status}`)
          }
          
      })
      .then((responseObject) => {
          this.picNews = responseObject;
      })
      .catch((err) => {
          console.log("error on fetching coin list : ", err);
      })
  },
}
</script>
<style>
.pic-news {
border: 1px solid gray;
border-radius: 1px;
width: 32%;
min-width: 200px;
margin-top: 30px;
margin-left: 15px;
box-shadow: 0 1px 3px 0 rgba(0,0,0,0.3),0 8px 9px 1px rgba(0,0,0,0.2)
}
.pic-news-img {
    border-radius: 1px;
    width: 100%;
    height: 100%;
}
.pic-news1 {
    text-align: center;
    margin-bottom: 50px;
}

</style>