const utils=require('./utils/utils');
module.exports = {
   //baseUrl: './',  // 配置基本url
   publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
   // 输出文件目录
   outputDir: 'lucky',
   pages:{
   	index:{
   		entry:'src/pages/index/index.js',
   		template:'src/pages/index/index.html',
   		filename:'index.html',
   	},
   	rule:{
   		entry:'src/pages/rule/rule.js',
   		template:'src/pages/rule/rule.html',
   		filename:'rule.html',
   	},
   	myAward:{
   		entry:'src/pages/myAward/myAward.js',
   		template:'src/pages/myAward/myAward.html',
   		filename:'myAward.html',
   	}
   },
   css: {   	      
          loaderOptions: {
            css: {},
            postcss: {
              plugins: [
                require('autoprefixer'),                               
                require('postcss-px2rem')({
                  remUnit: 37.5
                })
             ]
           }
         }
     }
}