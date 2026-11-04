function encode(text) {
  let out = '';
  let i = 0;
  while (i < text.length) {
    let run = 1;
    while (text[i + run] === text[i]) run++;
    out += (run > 1 ? run : '') + text[i];
    i += run;
  }
  return out;
}

function decode(text) {
  return text.replace(/(\d+)(\D)/g, (_, count, ch) => ch.repeat(Number(count)));
}
