module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname+'/static/js',
        filename: "bundle.js"
    },
    module:{
        loaders:[
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
            ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }

}
