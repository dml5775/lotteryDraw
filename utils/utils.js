module.exports={
	pages:{
		index:{
			//page人入口
			entry:'src/index/index.js',
			//模板来源
			template:'src/index/index.html',
			//在dist/index.html的输出
			filename:'index.html',
			//当使用title选项时,
			//template看的title标签需要是<title><%=htmlWebpackPlugin.options.title%></title>
			title:'Index Page',
			//在这个页面中包含的块，默认情况下会包含
			//提取出来的通用chunk和vendor chunk
			chunks:['chunk-vendors','chunk-common','index']
		},
		//当使用只有入口的字符串格式时，
		//模板会被推导为'public/subpage.html'
		//并且如果找不到的话，就回退到'public/index.html'
		//输出文件名会被推导为'subpage.html'
		subpage:'src/subpage/main.js'
	}
}