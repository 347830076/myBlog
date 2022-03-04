# vue3+element递归生成无限菜单组件

直接上代码

```vue
<!-- 父组件 -->
<template>
    <el-menu
        text-color="#262626"
        active-text-color="#FF5A5F"
        :default-active="defaultActive"
        router
        >
        <MenuList v-model:menuList="menus.showedMenus" />
    </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MenuList from './components/menu-list.vue'

const router = useRouter()
// 菜单数组
const menus = [
    {
      id: 1,
      title: '数据预览',
      icon: 'el-icon-pie-chart',
      path: '/layout/chart',
    },
    {
      id: 2,
      title: '用户列表',
      icon: 'el-icon-user',
      path: '/layout/user',
    },
    {
      id: 3,
      title: '题库列表',
      icon: 'el-icon-edit-outline',
      path: '/layout/question',
      children: [
        {
            id: 4,
            title: '企业列表',
            icon: 'el-icon-office-building',
            path: '/layout/business',
        },
        {
            id: 5,
            title: '学科列表',
            icon: 'el-icon-notebook-2',
            path: '/layout/subject',
        },
      ]
    },
  ]
// 获取当前路由路径
const defaultActive = ref(router.currentRoute._rawValue.path)
</script>
```

```vue
<!-- 子组件 menu-list -->

<template>
  <template v-for="item in menuList" :key="item.label">
    <el-sub-menu v-if="item.children" :index="item.path || item.label">
      <template #title>
        <icon v-if="item.icon" :type="item.icon" />
        <span>{{ item.label }}</span>
      </template>
      <MenuList v-model:menuList="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path || item.label">
      <template #title>
        <icon v-if="item.icon" :type="item.icon" />
        <span>{{ item.label }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup>
import { defineProps, defineAsyncComponent } from 'vue'
defineProps({
  menuList: {
    type: Array,
    require: true
  },
})

// 创建一个只有在需要时才会加载的异步组件。
// 引入自身组件，来做递归组件生成无限菜单
const MenuList = defineAsyncComponent({
  loader: () => import('@/views/layouts/user-center-layout/components/menu-list.vue'),
})
</script>

```