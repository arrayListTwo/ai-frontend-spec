# API 规则

本章定义 AI 在处理前端 API 相关编码时的规则。

## API 文件结构

```
src/api/
├── user.ts          # 用户管理接口
├── role.ts          # 角色管理接口
├── menu.ts          # 菜单管理接口
├── dict.ts          # 字典管理接口
├── config.ts        # 系统配置接口
└── monitor.ts       # 监控管理接口
```

## API 编写规范

```typescript
import request from '@/utils/request'
import type { UserVO, UserForm, UserQuery } from '@/api/types/user'

/**
 * 查询用户列表
 * @param query 查询参数
 * @returns 用户列表
 */
export function listUser(query: UserQuery) {
  return request({
    url: '/system/user/list',
    method: 'get',
    params: query
  })
}

/**
 * 查询用户详情
 * @param userId 用户ID
 * @returns 用户详情
 */
export function getUser(userId: string | number) {
  return request({
    url: `/system/user/${userId}`,
    method: 'get'
  })
}

/**
 * 新增用户
 * @param data 用户表单数据
 * @returns 操作结果
 */
export function addUser(data: UserForm) {
  return request({
    url: '/system/user',
    method: 'post',
    data: data
  })
}

/**
 * 修改用户
 * @param data 用户表单数据
 * @returns 操作结果
 */
export function updateUser(data: UserForm) {
  return request({
    url: '/system/user',
    method: 'put',
    data: data
  })
}

/**
 * 删除用户
 * @param userIds 用户ID字符串（逗号分隔）
 * @returns 操作结果
 */
export function delUser(userIds: string) {
  return request({
    url: `/system/user/${userIds}`,
    method: 'delete'
  })
}
```

## API 规则要点

1. **必须使用** RuoYi-Vue3 的 `request` 工具函数
2. **必须定义** TypeScript 类型（接口参数和返回值）
3. **必须添加** JSDoc 注释
4. **URL 遵循** RESTful 风格
5. **错误处理** 在组件层统一处理，不在 API 层处理
6. **文件下载** 使用 `download` 工具函数
7. **文件上传** 使用 `upload` 工具函数

## RuoYi-Vue3 API 约定

| 操作 | Method | URL 模式 |
|------|--------|----------|
| 列表查询 | GET | `/xxx/list` |
| 详情查询 | GET | `/xxx/{id}` |
| 新增 | POST | `/xxx` |
| 修改 | PUT | `/xxx` |
| 删除 | DELETE | `/xxx/{ids}` |
| 导出 | POST | `/xxx/export` |
| 导入 | POST | `/xxx/importData` |
