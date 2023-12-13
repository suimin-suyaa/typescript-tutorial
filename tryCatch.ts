try {
  let x: number;
  let y: number;
  if (x === 0) {
    throw new Error("0が入っています");
  }
  let avg: number = y / x;
  console.log("平均点" + avg);
} catch (e) {
  console.log(e.message);
}
