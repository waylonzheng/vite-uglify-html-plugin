import ts from 'rollup-plugin-typescript2'
import path from 'path'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import repacle from 'rollup-plugin-replace'
import { fileURLToPath } from 'url'
const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)
 
const isDev = () => {
    return process.env.NODE_ENV === 'development'
}
export default {
    input: "./src/index.ts",
    output: {
        file: path.resolve(__dirnameNew, './lib/index.js'),
        format: "esm",
        name: 'index',
        sourcemap: true
    },
 
    plugins: [
        ts(),
        terser({
            compress: {
                drop_console: !isDev()
            }
        }),
        repacle({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        resolve(['.js', '.ts']),
        isDev() && livereload(),
        isDev() && serve({
            open: true,
            openPage: "/public/index.html"
        })
    ]
}