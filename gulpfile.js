var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./build/webpack.client.config.js");


//use nginx,tomcat or other server
gulp.task("webpack",function(callback){
	webpack(webpackConfig,function(err,stats){
		if(err){
        	throw new gutil.PluginError("webpack-dev-server", err);
        }
        gutil.log("[webpack]", stats.toString({
            colors:true
        }));
	})
})

//use webpack-dev-server
gulp.task("webpack-dev-server", function(callback) {

    new webpackDevServer(webpack(webpackConfig), {
        hot: true,
        stats: { colors: true },
        historyApiFallback: {  index: 'index.html' }
    }).listen(8080, "localhost", function(err) {
        if(err){
            throw new gutil.PluginError("webpack-dev-server", err);
        }
        gutil.log("[webpack-dev-server]", "http://localhost:8080");
    });
});




