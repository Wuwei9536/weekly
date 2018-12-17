#### SPA ################################################################
																		
# 启动项目
start:
	npm run dev

# mock环境
mock:
	npm run dev  --mock

# 打包
build:
	npm run build

# 线上打包
jenkins:
	npm run jenkins

##########################################################################
#### SSR #################################################################

# ssr dev环境
ssr: 
	npm run server

# ssr 打包
ssr-build:
	npm run build:server

# ssr 初始化
ssr-init:
	cnpm i

##########################################################################
#### ROLLUP ##############################################################

# rollup 初始化
rollup-init:
	cnpm i -D \
	rollup@^0.66.6 \
	rollup-plugin-alias@^1.4.0 \
	rollup-plugin-buble@^0.19.4 \
	rollup-plugin-commonjs@^9.2.0 \
	rollup-plugin-filesize@^4.0.1 \
	rollup-plugin-node-globals@^1.4.0 \
	rollup-plugin-node-resolve@^3.4.0 \
	rollup-plugin-replace@^2.1.0 \
	rollup-plugin-uglify@^6.0.0

# rollup 打包
rollup:
	npm run build:lib

#########################################################################
#### WORKFLOW ###########################################################

# 创建页面
page:
	npm run copy page

# 创建组件
component:
	npm run copy component

# 打包报告
report:
	npm run build --report

#########################################################################