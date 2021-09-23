<template>
  <div id="app">
    <div class="container mt-5">
        <div class="row">
          <div class="order_header">
            <div class="title">
              <h4 class="green-bar"></h4>
              <h4>進行中</h4>
              
            </div>
          </div>
        <div  v-for="order in orders" :key="order.id">
          <div class="order_list" v-if="checkStatus(order)">
            <div class="icon" v-if="checkStatus(order)">
                <img src="https://static.oopocket.com/store/iconTreemall@3x.png">
              </div>
              
              <div class="status" v-if="checkStatus(order)">
                <span>{{order.status.type}}</span>
                <h6>預計出貨: {{order.date}}</h6>
              </div>
              <div class="content" v-if="checkStatus(order)">
                <p>{{order.name}}</p>
              </div>
              <i class="fas fa-chevron-right" v-if="checkStatus(order)"></i>
            </div>
        </div>
          <div class="order_footer" >
              <div class="title">
                <h4 class="green-bar"></h4>
                <h4>已完成</h4>

              </div>
            
          </div>
          <div class="list"  v-for="order in orders" :key="order.id">
            <div class="order_list" v-if="!checkStatus(order)">
              <div class="icon gray" v-if="!checkStatus(order)">
                  <img src="https://static.oopocket.com/store/iconTreemall@3x.png">
                </div>
                
                <div class="status gray" v-if="!checkStatus(order)">
                  <span>{{order.status.type}}</span>
                </div>
                <div class="content" v-if="!checkStatus(order)">
                  <p>{{order.name}}</p>
                </div>
                <i class="fas fa-chevron-right" v-if="!checkStatus(order)"></i>
              </div>
        </div>
        </div>
        
        
    </div>
</div>
</template>

<style>
  /* *{
  border: 1px solid #000;
} */
body{
    background-color: rgba(0, 0, 0,.2);
}
.container{
  position: relative;
  display: block;
  width: 700px;
  margin-bottom: 100px;
}

.order_header .title{
  display: inline-block;
  position: absolute;
  top: 10px;
}

.green-bar{
  height: 25px;
  width: 5px;
  background-color: #46b035;
}

.order_header{
    display: inline-block;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    height: 50px;
    background-color: #eaeaea;
    border-radius: 3px;
    padding-left: 10px;
    border: 1px solid #e6e6e6;
    border-radius: 0px; 
}
.order_header h4 {
  display: inline-block; 
  vertical-align: middle;
}

.list{
  display: inline-block;
  margin-bottom: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.order_list{
    display: inline-block;
    position: relative;
    width: 400px;
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    height: 120px;
    background-color: white;
    padding-left: 10px;
    border: 1px solid #e6e6e6;
    left: 50%;
    transform: translateX(-50%);
}

.icon{
  position: absolute;
  display: inline-block;
  top: 50%;
  transform: translateY(-50%)
}

.icon img{
    width: 80px;
    height: 80px;
    border-radius: 3px;
}

.status {
  display: inline-block;
  position: absolute;
  margin-top: 10px;
  left: 30%;
}

.order_list h6{
  display: inline-block;
  margin-left: 30px;
}

.content{
  position: absolute;
  width: 230px;
  line-height: 25px;
  left: 30%;
  top: 40%;
}

.order_list i {
  position: absolute;
  left: 92%;
  top: 40%;
  font-size: 30px;
  color: #a7a7a7;
}

.order_list span {
  color: #019d4d;
  font-weight: 400;
}

.order_footer{
    display: inline-block;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    height: 50px;
    background-color: #eaeaea;
    border-radius: 3px;
    padding-left: 10px;
    border: 1px solid #e6e6e6;
    border-radius: 0px; 
    position: relative;
}

.order_footer .title{
  display: inline-block;
  position: absolute;
  top: 10px;
}

.order_footer h4 {
  display: inline-block; 
  vertical-align: middle;
}
.gray{
  filter: grayscale(100%);
}
</style>

<script>
const api_url = 
    [
        {
            name: 'Livi優活 抽取式衛生紙(100抽x10包x10串/箱)',
            logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
            status: {
              code: 3,
              type: '已取消'
            },
            date: '107/6/12'
        },
        {
            name: 'BALMUDA The Toaster 百慕達烤麵包機-黑色',
            logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
            status: {
              code: 2,
              type: '已成立'
            },
            date: '108/7/21'
        },
        {
            name: '贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...',
            logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
            status: {
              code: 1,
              type: '處理中'
            },
            date: '108/6/2'
         },
         {
            name: 'Apple AirPds 2',
            logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
            status: {
              code: 4,
              type: '已送達'
            },
            date: '108/3/02'
        }
    ]

export default{
  el: "#app",
  data() {
    return{
      orders: api_url
    }
  },
  methods: {
    checkStatus(order){
      if(order.status.code == 1|| order.status.code == 2){
        return true
      } else {
        return false
      }
    }
  },
  watch: {
    filterOrder(){
      this.orders = this.orders.sort(function (a, b) {
      return new Date(a.date) < new Date(b.date)?1:-1
})
      return this.orders
    }
  }
}
</script>
