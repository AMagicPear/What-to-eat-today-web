# 今天吃什么
这是一个使用Vue3+Ionic构建的，专门为我妹妹写的用来帮助决定今天吃什么的Web应用。
现在包括的功能如下：
- [x]  可保存多个食物，并分别设置其早上、中午、晚上时间段的权重，点击“今天吃什么”按钮，系统将根据当前时间段各个食物的权重随机选择一项。
- [x] 每种食物在被连续选择两次后的下一次不会再次被选择。
- [ ] 会优先选择近30次选择内从未被选中的食物。

项目预览见：
[今天吃什么](https://amagicpear.github.io/What-to-eat-today-web/)
![示意图](./readme-assets/截屏2024-10-27%2014.33.30.png)

## dev
安装依赖：
```
npm install
```
安装 Ionic-cli：
```
npm install @ionic/cli -g
```
要在网页上调试该应用，运行：
```zsh
npm run dev
```
在 [http://localhost:8100](http://localhost:8100) 可查看应用。  

在安卓设备上实时调试：
```
npm run dev-a
```
## build
### 为移动设备构建
```
npm run build
ionic cap build
```
### 为桌面端构建
为桌面端构建时，可使用Tauri:
```
npm run build-tauri
```
### 构建GitHub Pages时
由于GitHub Pages需要路由到仓库名，所以我设置了一个环境变量，在为GitHub Pages构建时需要设置这个`VITE_BASE_PATH`环境变量到`/What-to-eat-today-web`以获得正确的路由。
```
export VITE_BASE_PATH=/What-to-eat-today-web && npm run build
```