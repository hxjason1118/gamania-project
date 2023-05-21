export default function (total = 10) {
  let data = [];
  for (var i = 0; i <= total; i++) {
    data.push({
      label: i,
      value: Math.floor(Math.random() * (100 - 0)) + 0,
    });
  }
  return data;
}
