import express from 'express'
import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import config from './webpack.config'

const app = express()
const compile = webpack(config)

app.use(devMiddleware(compile))
app.use(hotMiddleware(compile))

app.listen(4000, () => console.log('app is running at 4000....'))