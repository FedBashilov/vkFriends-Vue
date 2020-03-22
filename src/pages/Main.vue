<template>
  <div class="main">
    <div class="page_title">
      ВОвконтакте
    </div>
    <AppCurrentUser></AppCurrentUser>
    <div class="friend_list_wrapper">
      <div class="friends_list_title">
        Мои друзья
      </div>
      <AppFriendList></AppFriendList>
    </div>
  </div>
</template>


<script>
import AppFriendList from './../components/Friend-list'
import AppCurrentUser from './../components/Current-user'

export default {
  name: 'Main',
  components: {
    AppFriendList,
    AppCurrentUser
  },
  beforeCreate(){
    let reg = new RegExp("access_token=(.*)&expires_in", "g");
    let urlMatch = reg.exec(this.$route.fullPath);
    if( urlMatch ){
      let urlToken = urlMatch[1];
      localStorage.setItem("access_token", urlToken);
      this.$router.push("main");
    }

    if( !localStorage.getItem("access_token") ){
      console.log("no token");
      this.$router.push("authorization");
    }
  }
}
</script>


<style scoped>
  .page_title{
    text-align: center;
    background: #4a76a8;
    color: #fff;
    padding: 8px 0;
    font-size: 1.3em;
  }

  .friends_list_title{
    padding-left: 10px;
    padding-top: 10px;
    font-size: 1.15em;
  }

  .friend_list_wrapper{
    width: 80%;
    margin-left: 10%;
    border: 1px solid #daebf2;
    background-color: #fff;
  }
</style>
