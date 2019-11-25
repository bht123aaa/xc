<template>
  <!--编写页面静态部分，即view部分-->

  <!--相当于编写html的内容-->
  <div>
    <el-form :model="params">
      <!--查询表单-->
      <el-form :model="params">
        <el-select v-model="params.siteId" placeholder="请选择站点">
          <el-option
            v-for="item in siteList"
            :key="item.siteId"
            :label="item.siteName"
            :value="item.siteId">
          </el-option>
        </el-select>
        页面别名：<el-input v-model="params.pageAliase"  style="width: 100px"></el-input>
        <el-button type="primary" v-on:click="query"  size="small">查询</el-button>
      </el-form>
    <el-button type="primary" v-on:click="query" size="small">查询</el-button>
    </el-form>
    <el-table
      :data="list"
      stripe
      style="width: 100%">

      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="pageName" label="页面名称" width="200">
      </el-table-column>
      <el-table-column prop="pageAliase" label="别名" width="150">
      </el-table-column>
      <el-table-column prop="pageType" label="页面类型" width="100">
      </el-table-column>
      <el-table-column prop="pageWebPath" label="访问路径" width="280">
      </el-table-column>
      <el-table-column prop="pagePhysicalPath" label="物理路径" width="320">
      </el-table-column>
      <el-table-column prop="pageCreateTime" label="创建时间"  width="150">
      </el-table-column>
    </el-table>
    <el-pagination
      :page-size="this.params.size"
      layout="prev, pager, next"
      v-on:current-change="changePage"
      :total="total" :current-page="this.params.page" style="float:right;">
    </el-pagination>
  </div>
</template>
<script>
  //导入cms js方法 * 表示所有的方法
  import * as cmsApi from '../api/cms'

  export default {
    data() {
      return {
        siteList:[],//站点列表
        list: [],//页面数据
        total: 50,//总记录数
        params: {
          siteId:'',//站点id
          pageAliase:'',//页面别名
          page: 1,//当前页页码
          size: 10//每页显示个数

        }
      }
    },
    methods: {
      //分页查询 当点击分页的时候就会将点击的页数传到 page中
      changePage: function (page) {
        this.params.page=page;
        this.query()
      },
      //查询
      query: function () {
        cmsApi.page_list(this.params.page, this.params.size, this.params).then((res) => {
          this.list = res.queryResult.list;
          var list1 = res.queryResult.list;
          for (const l of list1) {
            console.log(JSON.stringify(l.siteId))
          }
          this.total = res.queryResult.total;
        })
      }
    },
    created() {
      //当 DOM  元素渲染完成前调用该方法
      this.query();
    },
    mounted(){
      //当 DOM  元素渲染完成后调用该方法
      //初始化站点列表
      this.siteList = [
        {
          siteId:'5a751fab6abb5044e0d19ea1',
          siteName:'门户主站'
        },
        {
          siteId:'102',
          siteName:'测试站'
        }
      ]
    }
  }
</script>

<style>
  /*编写页面样式，不是必须*/
</style>
