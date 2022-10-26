# 实战经验

## antd 

### Antd中Select组件中的defaultValue问题

想要动态设置 defaultValue 的值，需要设置一个key

```tsx
<Select
    placeholder="请选择学历"
    allowClear
    defaultValue={educationLevelDefaultValue}
    key={educationLevelDefaultValue}
    >
    {
        educationLevelOptions.map(item => {
            return <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
        })
    }
</Select>
```