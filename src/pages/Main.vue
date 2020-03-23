<template>
  <div class="main">
    <div class="header">
      <div class="page_title">
        ВОвконтакте
      </div>
      <div class="logout" @click="logout()">
        Выйти
      </div>
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
  methods: {
    logout(){
      localStorage.removeItem("access_token");
      this.$router.push("authorization");
    }
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
      this.$router.push("authorization");
    }
  }
}
</script>


<style scoped>
  .header{
    position: relative;
    background: #4a76a8;
    color: #fff;
    padding: 8px 0;
  }

  .page_title{
    text-align: center;
    font-size: 1.3em;
  }

  .logout{
    position: absolute;
    right: 0px;
    top: 0px;
    cursor: pointer;
    font-size: 0.9em;
    padding: 10px;
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
