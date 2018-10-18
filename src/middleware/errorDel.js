/**
 * Created by zhouli on 18/10/18
 */
export default function errorDel() {
    return ((err, ctx) => {
        console.log("错误处理函数：");
        console.log(err);
        console.log(ctx);
    })
}
