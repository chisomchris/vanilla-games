const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let isDevelopment = true;

const myConfig =  {
  mode : 'development',

  entry : {
    'main' : './src/main.js',
  },

  devtool : 'inline-source-map',
  devServer : {
    static : './dist'
  },

  resolve : {
    extensions : ['.js', '.scss', '.css'],
    fallback : {
      "fs": false,
      "child_process": false
    }
  },

  plugins : [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename : isDevelopment ? '[id].css' : '[id].[hash].css'
    }),
    new NodePolyfillPlugin(),
    new HtmlWebpackPlugin({
      title: 'Vanilla Games',
      template : './src/index.html',
      chunks : [ 'main' ]
    })
  ],
  
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : '[name].bundle_[chunkhash].js',
    clean : true
  },

  // optmization : {
  //   runtimeChunk : 'single'
  // },

  module : {
    rules : [
    { test : /\.m?js$/,
      exclude : /node_modules/,
      use : {
        loader: 'babel-loader',
        options: {
          presets : [
            ['@babel/preset-env', {targets : 'defaults'}]
          ]
        }
      }
    },
    {
      test : /\.css$/i,
      use : [
        { loader : 'style-loader'},
        { 
          loader: 'css-loader', 
          options: { 
            sourceMap : isDevelopment 
          }
        }
      ]
    },            
    {
      test : /\.scss$/i,
      exclude: /\.module.scss$/i,
    use: [
    { loader: isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader }, 
    { loader: 'css-loader', options: { 
      sourceMap : isDevelopment }
    }, 
    { loader: 'resolve-url-loader' ,
     options: { sourceMap : isDevelopment }
    },
    { loader: 'sass-loader', options: { 
      implementation: require.resolve('sass'),
      sourceMap : isDevelopment }
    }]
    },
    {
      test : /\.module\.scss$/i,
    use: [
    { loader: isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader }, 
    { loader: 'css-loader', options: { 
      modules: true,
      sourceMap : isDevelopment }
    },
    { loader: 'resolve-url-loader', 
    options: { sourceMap : isDevelopment }
    }, 
    { loader: 'sass-loader', options: { 
      implementation: require.resolve('sass'),
      sourceMap : isDevelopment }
    }]
    },
    {test : /\.(png|svg|jpeg|jpg|gif)$/i,
    type: 'asset/resource',
    generator: {
      publicPath: 'assets/images/',
      outputPath : 'assets/images'
    }
    },
    {test : /\.ico$/i,
    type: 'asset/resource',
    generator: {
      publicPath: '/',
      outputPath : ''
    }
    }
  ]
  }
}

if(myConfig?.mode === 'development'){
  isDevelopment = true
} else {
  isDevelopment = false
}

module.exports = myConfig