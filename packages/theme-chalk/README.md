# sass是一种样式表达语言，已编译为css,它允许您使用变量、嵌套规则、mixins、函数等
在scss中，语句用分号分隔，如果该语句使用块，则这些规则是可选的
# 通用声明
+ 变量声明，例如$color:'#121212'
+ 流控制规则，例如@if 和 @each
+ @error, @warn, @debug
# css语句
+ 样式规则，h1{}
+ css规则，@media,@font-face
+ mixin使用 @include
+ @at-root
# 顶级声明 这些语句只能在样式表的顶层使用，或者嵌套在css语句的顶层
+ 加载模块@use
+ 导入 @import
+ 使用mixin定义 @mixin
+ 使用函数定义 @function
# 其他声明
+ 像这样的属性声明width: 100px 只能在样式规则和某些css规则中使用
+ @extend规则只能在样式规则中使用
# 表达式
+ 每一个表达式产生一个值，任何有效的css属性值也是sass表达式，但是sass表达式比纯css值强大的多。它们座位参数传递给mixin和函数，
用于@if规则控制流，并使用算术进行操作
+ 值!important，被解析为无引号的字符串