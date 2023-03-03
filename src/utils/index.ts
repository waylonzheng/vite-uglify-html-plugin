export class Clear {
    htmlStr: string;
    constructor (str:string) {
        this.htmlStr = str;
    };
    clear(reg:RegExp) {
        if (!reg) {
            return this;
        }
        this.htmlStr = this.htmlStr.replace(reg, '');
        // 每次清除完毕后将this放回, 供下一次清除其他目标
        return this;
    };
    replace(reg:RegExp, text:string) {
        if (!reg) {
            return this;
        }
        this.htmlStr = this.htmlStr.replace(reg, text);
        // 每次清除完毕后将this放回, 供下一次清除其他目标
        return this;
    }
}