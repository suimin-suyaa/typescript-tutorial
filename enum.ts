enum DayOfWeek {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(DayOfWeek.Sun);

// 列挙型...複数の定数を一つにまとめる

// 配列にした場合
// DayOfWeek [Sun,Mon,The,Wed,Thu,Fri,Sat];
// console.log(DayOfWeek[2]);
// →配列の順番を覚えておく必要がある
// 列挙型を使用した場合、インデックスを指定せず呼び出すことが可能
// console.log(DayOfWeek.Sun);
// ※値を指定しない場合は自動で0から始まる連番が割当たる
