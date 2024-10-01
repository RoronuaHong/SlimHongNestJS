// 函数式中间件
export function Logger(req, res, next) {
  console.log(`函数式中间件`);
  next();
}
