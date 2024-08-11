<template>
    <div class="container">
        <div class="tab-container">
          <div class="tabheader">
            <div 
              v-for="(tab, index) in tabs" 
              :key="index" 
              :class="['tabheader__item', { 'tabheader__item_active': activeTab === index }]" 
              @click="selectTab(index)">
              {{ tab }}
            </div>
          </div>
      
          <div class="tabcontent-container">
            <div 
              v-for="(content, index) in tabContents" 
              :key="index" 
              :style="{ display: activeTab === index ? 'block' : 'none' }" 
              class="tabcontent">
              {{ content }}
            </div>
          </div>
        </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        activeTab: 0,
        tabs: ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'],
        tabContents: [
          'Content for Tab 1',
          'Content for Tab 2',
          'Content for Tab 3',
          'Content for Tab 4'
        ]
      };
    },
    methods: {
      selectTab(index) {
        this.activeTab = index;
      }
    }
  };
</script>
  
<style scoped>
    .container{
        max-width: 1450px;
        margin: 0 auto;
    }

    .tabheader__item {
      padding: 10px;
      cursor: pointer;
      display: inline-block;
    }

    .tabheader__item_active {
      font-weight: bold;
      border-bottom: 2px solid #007BFF;
    }

    .tabcontent-container {
      margin-top: 20px;
    }

    .tabcontent {
      padding: 10px;
      border: 1px solid #ccc;
    }
</style>
  


<!-- <template>
  <div class="container">

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style> -->