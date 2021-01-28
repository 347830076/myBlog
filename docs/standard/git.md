# Git 操作规范

## 新建分支开发需求

修复线上 bug 或开发新功能时都要从 `master` 新建分支，版本发布用 `feature/*`，修复线上问题用 `hotfix/*`，如：

> `feature/baofenpei-v2`  
> `hotfix/quota-edit`

### 创建新分支的命令

```bash
# 在本地创建新分支
git checkout -b <分支名>
# 第一次提交到远程分支，需要跟远程分支关联起来
git push -u origin <分支名>
# 执行过上一条命令后，以后在新分支就可以直接通过 `git push` 提交代码了
```

## 转测时提 pr

具体步骤：

1. 进入 Gitlab 项目页面
2. 点击左侧 Merge Requests 菜单
3. 点击 New merge request 按钮发起合并请求
4. 选择 Source branch（源分支）与 Target branch（目标分支，即 master）
5. Compare branches and continue，比较分支内容并继续
6. 填写相关信息并提交

## 合并分支后删除

管理员合并分支后应该及时将已合并的分支删除

## 每次 commit 前要 review 自己的代码

每次提交 commit 前，需通过可视化界面（如 Sourcetree 或 VScode 的 SOURCE CONTROL）检查本次改动

## 语义化的 commit 信息

提交 commit 信息时，需要表达清楚本次改动的内容，无需 `fix:` 和 `feat:` 等前缀，如：

> `git commit -m "修复订单列表样式问题"`
