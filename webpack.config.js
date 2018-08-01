//webpack3.0 config

//__dirname은 현재 소스가 위치한 경로를 반환하는 node의 전역변수
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool :'eval-source-map', //개발작업시 사용 디버깅 하도록 소스맵 설정
	//devtool :'source-map', //실무빌드시 사용 소스맵을 버려서 용량 대폭줄임
	devServer : {   //자동으로 브라우저 새로고침해줌
		contentBase: __dirname + '/public', //기본적으로 루트파일을 서비스하지만 다른폴더 설정시 사용
		port : 7788,  // 포트설정
		historyApiFallback : true,  // HTML5 히스토리 API를 이용하는 앱개발시 유용 true로 설정하면 모든 요청이 곧바로 /로 라우팅됨.
		inline: true,  // 페이지가 변경시 새로고침.
		hot: true //페이지가 변경시 새로고침 핫리로딩
	},
	entry : { //웹팩이 파일을 읽어들이기 엔트리 파일설정
		app: [__dirname + '/src/main.js', __dirname + '/src/contactsApp/ContactsApp.js' /*, __dirname +
		 '/app/main2.js'*/]
		// entry가 여러파일일경우 app: ['main.js','main2.js']
	},
	output : {
		path: __dirname + '/public', //결과 파일이 저장될 경로
		filename: '[name]_bundle.js',
		// [name]이 entry에서 준 키값 app랑 매치된다. 이경우 app_bundle.js파일로 생성된다.
		publicPath:'/' //파일들이 위치할 서버상의 경로
	},
	module : {
		rules : [
			{
				test : /\.jsx?$/, //해당 정규식에 부합하는 파일을 선택한다.(여기선 js나 jsx)
				loader : 'babel-loader', // loader에 지정한 로더가 컴파일을 한다. 여기선 babel-loader
				options : { //babel-loader에 대한 option
					presets: [
						['env',	{modules: false}], //사용하는 ecmascript버젼에 맞는 polyfill을 넣어줌 modules:false는 트리쉐이킹 설정,
						'react', //react 사용시에설치
						'stage-0' //
					]
				},
				// include : [], // 해당 loader가 반드시 compile해야할 경로
				exclude : ['/node_modules'], //해당 loader가 컴파일할때 제외할 경로
			},	{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader', //플러그인이 실패시 style-loader 작동
					use: 'css-loader' // css-loader를 통과한후 extract해서 파일 추출함.
				})
			}
		]

	},
	resolve : {
		modules: ['node_modules'], //디렉토리의 node_modules를 인식할 수 있다.
		extensions: ['.js', '.json', '.jsx', '.css'	] //해당 확장자들은 웹팩3에서 내부적으로 처리함.
	},
	plugins : [ //부가 기능으로 번들링할때 여러가지 플러그인 설정
		new webpack.HotModuleReplacementPlugin(),
		new webpack.LoaderOptionsPlugin({ //로더들에게 옵션을 넣어줌
			minimize: true,
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({ //js압축 난독화
			//sourceMap : true, //soruceMap 생성
			comments: false, // remove comments
			compress: {
				unused: true,
				dead_code: true, // big one--strip code that will never execute
				warnings: false, // good for prod apps so users can't peek behind curtain
				drop_debugger: true,
				conditionals: true,
				evaluate: true,
				drop_console: true, // strips console statements
				sequences: true,
				booleans: true,
			}
		}),
		new ExtractTextPlugin({
			filename:'app.css'
		}),

	]
};


