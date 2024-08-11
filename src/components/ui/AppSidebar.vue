<template>
    <div class="sidebar" v-if="sidebar">
      <div class="sidebar-content">
        <ul>
            <li @click="close"><img src="../../assets/close.svg" alt=""></li>
            <li><router-link class="noDecoration" to="/">Home</router-link> </li>
            <li><router-link class="noDecoration" to="/collection">Collection</router-link> </li>
            <li><router-link class="noDecoration" to="/about">About us</router-link> </li>
            <li><router-link class="noDecoration" to="/contact">Contact</router-link> </li>
        </ul>
      </div>
    </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
  export default {
    setup(){
      const store = useStore()
      const sidebar = computed(()=>store.state.sidebar)

      return{
        sidebar,
        close : ()=>{
          store.commit('removeSidebar')
        }
      }

    }

  }
</script>

<style scoped>
    .sidebar{
      position: fixed;
      width: 300px;
      right: 0;
      top: 0;
      bottom: 0;
      background: #f9f6f6;
      z-index: 100;
      padding: .5rem;
      backdrop-filter: blur(10px);
      box-shadow: -10px 0 10px rgba(0, 0, 0, 0.2);
    }
    .sidebar-content{
      text-align: center;
    }
    .sidebar-content ul{
      list-style: none;
    }
    .sidebar-content ul li img{
      cursor: pointer;
    }
    .sidebar-content ul li .noDecoration{
      text-decoration: none;
      color: #4a4747;
      line-height: 55px;
      font-size: 18px;
    }
    .sidebar-content ul li .noDecoration:hover{
      text-decoration: none;
      color: #e41111;
      font-size: 20px;
    }

    @media (max-width: 451px) {
        .sidebar{
            width: 450px;
            max-width: 90%;
        }
    }
</style>