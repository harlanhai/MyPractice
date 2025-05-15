/**
 * 132. 时钟的时针和分针的角度
 */
function angleClock(time) {
  // 将时间分成时和分
  const [hour, minute] = time.split(':').map(Number);
  // 分针的位置
  const minuteAngle = minute * 6;
  // 时针位置
  const hourAngle = (hour % 12 + minute / 60) * 30;
  let angleBetween = Math.abs(hourAngle - minuteAngle);
  angleBetween = Math.min(angleBetween, 360 - angleBetween)
  return {
    minuteAngle,
    hourAngle,
    angleBetween
  }
}
console.log(angleClock('1:30'))
console.log(angleClock('11:11'))
console.log(angleClock('12:00'))
console.log(angleClock('19:19'))
/**
  钟表基础知识
    整个表盘是 360 度
  分针：
    一圈有 60 分钟，每分钟转动 6 度（360° / 60 = 6°）
  时针：
  一圈有 12 小时，每小时转动 30 度（360° / 12 = 30°）
  每分钟会移动 0.5 度（30° / 60 = 0.5°），因为时针随着分钟略微移动
  1. 分针角度（从12点方向开始顺时针）：
    minuteAngle = m * 6
  2. 时针角度：
    hourAngle = (h % 12) * 30 + m * 0.5
    % 12 是为了将24小时制转换成12小时制
    m * 0.5 是因为时针会随着分钟的变化而移动
  3. 角度差（两针夹角）：
    angleBetween = Math.abs(hourAngle - minuteAngle)
    angleBetween = Math.min(angleBetween, 360 - angleBetween)
 */