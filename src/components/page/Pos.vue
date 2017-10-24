<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="Order">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop='goodsName' label='Items'></el-table-column>
              <el-table-column prop='count' label='Qty' width="70"></el-table-column>
              <el-table-column prop='price' label='Price' width="70"></el-table-column>
              <el-table-column label='Add' width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="delSingleGoods(scope.row)">Delete</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">Add</el-button>

                </template>
              </el-table-column>


            </el-table>
            <div class="totalDiv">
              <small>Qty:</small>
              {{totalCount}} &nbsp;&nbsp;&nbsp;&nbsp;
              <small>Amount：</small>
              {{totalMoney}} $
            </div>

            <div class="div-btn">

              <el-button type="danger" @click="delAllItems">Delete</el-button>
              <el-button type="success" @click="checkOut">Check</el-button>

            </div>
          </el-tab-pane>


          <el-tab-pane label="Pending">
            Pending
          </el-tab-pane>
          <el-tab-pane label="Take away">
            Take away
          </el-tab-pane>


        </el-tabs>
      </el-col>


      <el-col :span="17">
        <div class="best-sellers">
          <div class="item-title">
            Best Sellerss
          </div>
          <div class="item-list">
            <ul>
              <li v-for="goods in bestSellers" @click='addOrderList(goods)'>
                <span>{{goods.goodsName}}</span>
                <span class="item-price">${{goods.price}}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="item-type">

          <el-tabs>
            <el-tab-pane label="Burger">

              <div>
                <ul class="cookList">

                  <li v-for="goods in type0Goods" @click='addOrderList(goods)'>
                    <span class="foodImg"><img :src='goods.goodsImg'
                                               width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">${{goods.price}}</span>
                  </li>

                </ul>

              </div>

            </el-tab-pane>
            <el-tab-pane label="Drink">
              <ul class="cookList">

                <li v-for="goods in type1Goods" @click='addOrderList(goods)'>
                    <span class="foodImg"><img :src='goods.goodsImg'
                                               width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">${{goods.price}}</span>
                </li>

              </ul>

            </el-tab-pane>
            <el-tab-pane label="Snacks & Sides">
              <ul class="cookList">

                <li v-for="goods in type2Goods" @click='addOrderList(goods)'>
                    <span class="foodImg"><img :src='goods.goodsImg'
                                               width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">${{goods.price}}</span>
                </li>

              </ul>

            </el-tab-pane>
            <el-tab-pane label="Sweet Treats">
              <ul class="cookList">

                <li v-for="goods in type3Goods" @click='addOrderList(goods)'>
                    <span class="foodImg"><img :src='goods.goodsImg'
                                               width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">${{goods.price}}</span>
                </li>

              </ul>

            </el-tab-pane>

          </el-tabs>

        </div>


      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ElTabPane from '../../../node_modules/element-ui/packages/tabs/src/tab-pane.vue'
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button.vue'
  import axios from 'axios'

  export default {
    components: {
      ElButton,
      ElTabPane
    },
    name: 'pos',

    data () {
      return {
        tableData: [],

        bestSellers: [],

        type0Goods: [],
        type1Goods: [],
        type2Goods: [],
        type3Goods: [],
        totalMoney: 0,
        totalCount: 0
      }
    },

    created: function () {
      axios.get('http://jspang.com/DemoApi/oftenGoods.php')
        .then(response => {
          // console.log(response)
          this.bestSellers = response.data
        })

      axios.get('http://jspang.com/DemoApi/typeGoods.php')
        .then(response => {
          // console.log(reponse)
          this.type0Goods = response.data[0]
          this.type1Goods = response.data[1]
          this.type2Goods = response.data[2]
          this.type3Goods = response.data[3]
        })
    },

    mounted: function () {
      var orderHeight = document.body.clientHeight
      document.getElementById('order-list').style.height = orderHeight + 'px'
    },

    methods: {
      addOrderList (goods) {
        this.totalMoney = 0
        this.totalCount = 0

        // whether item is already in the list
        let inList = false
        for (let i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].goodsId === goods.goodsId) {
            inList = true
          }
        }
        // handle different conditions
        if (inList) {
          // change the items' number
          let arr = this.tableData.filter(a => a.goodsId === goods.goodsId)
          arr[0].count++
        } else {
          let newGoods = {goodsId: goods.goodsId, goodsName: goods.goodsName, price: goods.price, count: 1}
          this.tableData.push(newGoods)
        }
        this.getAllMoney()
        // get the total qty and amount
        this.tableData.forEach((element) => {
          this.totalCount += element.count
          this.totalMoney = this.totalMoney + (element.price * element.count)
        })
      },
      // delete single item
      delSingleGoods (goods) {
        this.tableData = this.tableData.filter(a => a.goodsId !== goods.goodsId)
        this.getAllMoney()
      },
      // delete all items
      delAllItems () {
        this.tableData = []
        this.totalCount = 0
        this.totalMoney = 0
      },
      // Simulate checkout

      checkOut () {
        if (this.totalCount !== 0) {
          this.tableData = []
          this.totalCount = 0
          this.totalMoney = 0
          this.$message({
            message: 'Thank you for your business!',
            type: 'success'
          })
        } else {
          this.$message.error('No item in list')
        }
      },

      // figure out qty and balance
      getAllMoney () {
        this.totalCount = 0
        this.totalMoney = 0

        if (this.tableData) {
          this.tableData.forEach((element) => {
            this.totalCount += element.count
            this.totalMoney = this.totalMoney + (element.price * element.count)
          })
        }
      }

    }

  }
</script>


<style scoped>
  .pos-order {
    background-color: #F9FAFC;
    border-right: 1px solid #C0CCDA;
  }

  .div-btn {
    margin-top: 10px;
    margin-outside: 20px;
  }

  .item-title {
    height: 20px;
    border-bottom: 1px solid #D3dce6;
    background-color: #F9FAFC;
    padding: 10px;
    text-align: left;
  }

  .item-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #E5E9F2;
    padding: 10px;
    margin: 10px;
    background-color: #FFF;
  }

  .item-price {
    color: #58B7FF
  }

  .item-type {
    clear: both

  }

  .cookList li {
    list-style: none;
    width: 23%;
    border: 1px solid #E5E9F2;
    height: auot;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 2px;
    cursor: pointer;

  }

  .cookList li span {

    display: block;
    float: left;
  }

  .foodImg {
    width: 40%;
  }

  .foodName {
    font-size: 16px;
    padding-left: 10px;
    color: brown;

  }

  .foodPrice {
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
  }

  .best-sellers li {
    cursor: pointer;
  }

  .totalDiv {
    background-color: #fff;
    padding: 10px;
    border-bottom: 1px solid #D3dce6;
  }
</style>
