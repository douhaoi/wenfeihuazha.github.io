(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{369:function(t,s,a){"use strict";a.r(s);var r=a(42),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"关于-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-typescript"}},[t._v("#")]),t._v(" 关于 TypeScript")]),t._v(" "),a("h2",{attrs:{id:"关于强类型与弱类型-对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于强类型与弱类型-对比"}},[t._v("#")]),t._v(" 关于强类型与弱类型(对比)")]),t._v(" "),a("ul",[a("li",[t._v("强类型")])]),t._v(" "),a("blockquote",[a("p",[t._v("语言层面限制函数的实参类型必须与形参类型相同"),a("br"),t._v("\n优势")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("错误更早暴露")]),t._v(" "),a("li",[t._v("代码更智能")]),t._v(" "),a("li",[t._v("重构更牢靠")]),t._v(" "),a("li",[t._v("减少不必要的类型判断")])])])]),t._v(" "),a("ul",[a("li",[t._v("弱类型")])]),t._v(" "),a("blockquote",[a("p",[t._v("允许任意的数据隐式类型转换")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("变量允许随时改变的特点,不是强弱类型的差异")])])]),t._v(" "),a("h2",{attrs:{id:"静态类型与动态类型-对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态类型与动态类型-对比"}},[t._v("#")]),t._v(" 静态类型与动态类型(对比)")]),t._v(" "),a("ul",[a("li",[t._v("静态类型")])]),t._v(" "),a("blockquote",[a("p",[t._v("一个变量声明时他的类型就是明确的"),a("br"),t._v("\n在声明过后不允许被修改")])]),t._v(" "),a("ul",[a("li",[t._v("动态类型")])]),t._v(" "),a("blockquote",[a("p",[t._v("在运行阶段明确变量类型"),a("br"),t._v("\n且变量类型随时可以改变"),a("br"),t._v(" "),a("strong",[t._v("变量是没有类型的,变量当中存放的值是有类型的")])])]),t._v(" "),a("h2",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ul",[a("li",[t._v("语言本身多了很多概念(学习成本增加)")])]),t._v(" "),a("blockquote",[a("p",[t._v("但是 TypeScript 属于[渐进式] 就算不知道新语法也可以用原来 JavaScript 的方式去写")])]),t._v(" "),a("ul",[a("li",[t._v("项目初期,TypeScript 会增加一些成本")])]),t._v(" "),a("blockquote",[a("p",[t._v("相对于大型项目 "),a("strong",[t._v("利大于弊")])])]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("yarn add typescript --dev")])]),t._v(" "),a("li",[a("p",[t._v("yarn tsc xxx.ts")])])]),t._v(" "),a("blockquote",[a("p",[t._v("会生成同名 js 可以直接使用")])]),t._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("ul",[a("li",[t._v("yarn tsc --init")])]),t._v(" "),a("p",[t._v("在项目下会多出 tsconfig.json 文件")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("target 输出的js会按照哪个标准的es 默认值 es5")]),t._v(" "),a("li",[t._v("module 输出的代码根据什么方式模块化")]),t._v(" "),a("li",[t._v("outDir 输出js所在的文件夹")]),t._v(" "),a("li",[t._v("rooDir ts源代码所在文件夹")]),t._v(" "),a("li",[t._v("spirceMap 开启源代码映射")]),t._v(" "),a("li",[t._v("strict 是否开启严格模式")]),t._v(" "),a("li",[t._v("lib 指定使用的标准库(默认标准库为 DOM )")]),t._v(" "),a("li",[t._v("...")])])]),t._v(" "),a("h2",{attrs:{id:"原始类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原始类型"}},[t._v("#")]),t._v(" 原始类型")]),t._v(" "),a("ul",[a("li",[t._v("string : 只能存放字符串")]),t._v(" "),a("li",[t._v("number : 只能存放数字")]),t._v(" "),a("li",[t._v("boolean : 只能存放布尔值")])]),t._v(" "),a("blockquote",[a("p",[t._v("string | number | boolean 在非严格模式可以为空(null)")])]),t._v(" "),a("ul",[a("li",[t._v("viod : 可以是 null 和 undefined 严格模式下只能是 undefined")]),t._v(" "),a("li",[t._v("null : null")]),t._v(" "),a("li",[t._v("undefined : undefined")]),t._v(" "),a("li",[t._v("symbol : Symbol()")])]),t._v(" "),a("blockquote",[a("p",[t._v("symbol 在 target 设置为 es5 时,会报错")])]),t._v(" "),a("h2",{attrs:{id:"显示中文错误消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示中文错误消息"}},[t._v("#")]),t._v(" 显示中文错误消息")]),t._v(" "),a("p",[t._v("yarn tsc --locale zh-CN")]),t._v(" "),a("blockquote",[a("p",[t._v("不建议使用,不利于查找相关资料")])]),t._v(" "),a("h2",{attrs:{id:"object-类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-类型"}},[t._v("#")]),t._v(" Object 类型")]),t._v(" "),a("ul",[a("li",[t._v("泛指所有的非原始对象类型(如数组,函数)")])]),t._v(" "),a("h2",{attrs:{id:"enum-枚举"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enum-枚举"}},[t._v("#")]),t._v(" enum 枚举")]),t._v(" "),a("ul",[a("li",[t._v("转换为js后会生成双向键值对,不会被编译删除")]),t._v(" "),a("li",[t._v("如果加声明前加入 const 编译后会被移除 只保留值")])]),t._v(" "),a("h2",{attrs:{id:"函数类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数类型"}},[t._v("#")]),t._v(" 函数类型")]),t._v(" "),a("ul",[a("li",[t._v("参数前加 ? 可以转为可选参数")])]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fun1'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fun2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fun2'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("blockquote",[a("p",[t._v("具体特性可以回顾 掘金 "),a("strong",[t._v("阿宝哥")]),t._v(" 的两篇文章"),a("br")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/6844904182843965453",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.2W字 | 了不起的 TypeScript 入门教程"),a("OutboundLink")],1),t._v(" "),a("br")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/6872111128135073806",target:"_blank",rel:"noopener noreferrer"}},[t._v("一份不可多得的 TS 学习指南（1.8W字"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);