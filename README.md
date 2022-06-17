# Simple Resume with Vue

使用Vue 3和Tailwind CSS做一個簡單的履歷表應用。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## File Structure

|-src/  
|-|-main.js #建立Vue實例  
|-|-App.vue #起始資料抓取、主要元件的引入點，表單提交及有效性狀態管理  
|-|-Components/ #存放各元件  
|-|-|-GeneralInfo #姓名、電話、Email的區塊  
|-|-|-EducationInfo #學歷的區塊  
|-|-|-JobInfo #工作狀況的區塊  
|-|-|-InfoCard #提供以上三個元件一個外框架  
|-|-|-InfoBlock #在元件中做為輸入及標籤的組合  
|-|-utils/ #狀態管理的js檔案  
|-|-|-dataHandler #處理與localStorage的溝通