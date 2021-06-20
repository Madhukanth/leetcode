/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
const videoStitching = function (clips, T) {
  if (T === 0) return 0;

  clips.sort(([aStart], [bStart]) => aStart - bStart);

  var res = 0;
  var curr = 0;
  var temp = 0;

  for (const [start, end] of clips) {
    if (start > curr) {
      res++;
      curr = temp;
    }

    if (start <= curr && end > temp) {
      temp = end;

      if (end >= T) return res + 1;
    }
  }

  return -1;
};
