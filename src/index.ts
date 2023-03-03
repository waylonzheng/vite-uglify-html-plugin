import { Clear } from "./utils/index";
const uglifyHtmlPlugin = () => {
    return {
        name: 'uglifyHtmlPlugin', // 必须的，将会在 warning 和 error 中显示
        transformIndexHtml(html: string) {
            const replaceObj = new Clear(html);
            // 构建者模式
            replaceObj.clear(/[\r\n]*/g).clear(/<!--[\w\W\r\n]*?-->/gmi);
            return replaceObj.htmlStr;
        },
    };
};
export default uglifyHtmlPlugin;
