<template>
  <div class="friend-list">
    <div class="wrapper">
      <div class="friend_card" v-for="(friend, i) in friends" :key="i" >
        <div class="friend_image">
          <img class="friend_card_image" height="100px" width="100px" :src="friend.photo_100">
        </div>
        <div class="friend_description">
          <div class="friend_first_name">
            {{friend.first_name}}
          </div>
          <div class="friend_last_name">
            {{friend.last_name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Friend-list',
  data: () => {
    return {
      friends: [
        {first_name: "fff",
        last_name: "qwe"}
      ],
      token: "8c150feda568208b7377249d3508dd0e8b978d64d5c89bd77424bafd3d5e576b57237de6d75d5079c74db"
    }
  },
  mounted() {
      this.$jsonp(`https://api.vk.com/method/friends.search?count=5&fields=photo_100&access_token=${this.token}&v=5.52`,).then(json => {
        // Success.
        this.friends = json.response.items;
        console.log(this.friends);
      }).catch(err => {
        // Failed.
        console.log(err);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper{
    padding: 20px;
    display: grid;
    grid-template-columns: 1;
  }

  .friend_card_image{
    border-radius: 50%;
    margin-right: 5px;
  }

  .friend_card{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
  }

  .friend_card:nth-child(n+2){
    border-top: 1px solid #daebf2;
  }
</style>
