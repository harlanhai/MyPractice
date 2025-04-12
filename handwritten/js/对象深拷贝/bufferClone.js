const allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
function cloneBuffer(buffer, isDeep){
  if(!isDeep){
    return buffer.slice();
  }else{
    const length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new Buffer.constructor(length);
    return result;
  }
}
const buf = Buffer.from("laoyuan");
const buf2 = cloneBuffer(buf, true);
// const buf2 = buf;
buf2.write('nodejs');
buf2.write('222');

console.log("buf: ", buf.toString('utf-8'));
console.log("buf2: ", buf2.toString('utf-8'));