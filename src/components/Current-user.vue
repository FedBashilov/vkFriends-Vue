<template>
  <div class="user_card">
      <div class="user_image">
        <img class="user_card_image" height="100px" width="100px"  :src="user.photo_100">
      </div>
      <div class="user_description">
        <div class="user_first_name">
          {{user.first_name}}
        </div>
        <div class="user_last_name">
          {{user.last_name}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Current-user',
  data: () => {
    return {
      user: {},
      token: localStorage.getItem("access_token")
    }
  },
  mounted() {
      this.$jsonp(`https://api.vk.com/method/users.get?fields=photo_100&access_token=${this.token}&v=5.52`,).then(json => {
        // Success.
        if( json.response ){
          this.user = json.response[0];
        }
      }).catch(err => {
        // Failed.
        console.log(err);
      })
  }
}
</script>


<style scoped>
  .user_card_image{
    border-radius: 50%;
    margin-right: 5px;
  }

  .user_card{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
  }

</style>
