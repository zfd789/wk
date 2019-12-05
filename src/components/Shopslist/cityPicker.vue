<!--  -->
<template>
  <div>
    <!-- <span> 省：</span> -->
    <el-select v-model="formData.province" placeholder="选择省" @change="cityData">
      <el-option v-for="item in provinceList" :key="item.id" :label="item.name" :value="item.id"></el-option>
    </el-select>
    <!-- <span> 市：</span> -->
    <el-select v-model="formData.city" @change="districtData" placeholder="选择市">
      <el-option v-for="item in cityList" :key="item.id" :label="item.name" :value="item.id"></el-option>
    </el-select>
    <!-- <span> 区：</span> -->
    <el-select v-model="formData.area" placeholder="选择区">
      <el-option v-for="item in districtList" :key="item.id" :label="item.name" :value="item.id"></el-option>
    </el-select>
  </div>
</template>

<script>
import APICity from "../../api/city";

export default {
  name: "CityPicker",
  data() {
    return {
      formData: {},
      provinceList: [], //省
      cityList: [], //市
      districtList: [] //区
    };
  },
  methods: {
    getNodes(val) {
      console.log;
      let idArea;
      let sizeArea;
      if (!val) {
        idArea = null;
        sizeArea = 0;
      } else if (val.length === 1) {
        idArea = val[0];
        sizeArea = val.length; // 3:一级 4:二级 6:三级
      } else if (val.length === 2) {
        idArea = val[1];
        sizeArea = val.length; // 3:一级 4:二级 6:三级
      }

      APICity.province_list().then(res => {
        if (res.code == 0) {
          let items = res.data;
          if (sizeArea == 0) {
            this.cascaderData = items.map((value, i) => {
              return {
                id: value.id,
                name: value.name,
                cities: []
              };
            });
            console.log(this.cascaderData);
          } else if (sizeArea === 1) {
            APICity.city_list(idArea).then(res => {
              let citydatas = res.data;
              this.cascaderData.map((value, i) => {
                console.log(!value.cities.length);

                value.cities = citydatas.map((value, i) => {
                  return {
                    id: value.id,
                    name: value.name,
                    cities: []
                  };
                });
              });
            });
          } else if (sizeArea == 2) {
            APICity.city_list(idArea).then(res => {
              let citydata = res.data;
              this.cascaderData.map((value, i) => {
                value.cities = citydata.map((value, i) => {
                  return {
                    id: value.id,
                    name: value.name
                  };
                });
              });
            });
          }
        }
      });
    },
    // 获取省列表
    provinceData() {
      APICity.getProvince().then(res => {
        this.provinceList = res.data;
      });
    },
    // 获取市
    cityData(province) {
      const id = this.formData.province;
     this.$emit("province_id", id);
      console.log(id)
      APICity.city_list(id).then(res => {
        this.cityList = res.data;
      });
      this.b = this.formData.province;
    },
    // 获取区
    districtData() {
      const id = this.formData.city;
      APICity.District_list(id).then(res => {
        this.districtList = res.data;
      });
    }
  },
  mounted() {
    this.provinceData();
  }
};
</script>
<style lang='scss' scoped>
.el-select{
  width: 160px;
  margin: 10px;
}
</style>