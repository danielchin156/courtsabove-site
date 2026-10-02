// Eternal Word chord chart data and transposition helpers (shared by the page and its script).
export const SONG = [{"name":"Verse 1","note":"","lines":[[{"c":"4","t":"Who else but you deserve my "},{"c":"6m","t":"song?"}],[{"c":"4","t":"For you alone "},{"c":"6m","t":"I’ll always "},{"c":"5","t":"sing"}],[{"c":"4","t":"None can match your "},{"c":"6m","t":"faithfulness"}],[{"c":"","t":"Your "},{"c":"4","t":"Glory "},{"c":"5","t":"or Your "},{"c":"6m","t":"Love"}],[{"c":"","t":"With a "},{"c":"4","t":"thousand voices "},{"c":"1","t":"and the sound "},{"c":"5","t":"of strings"}]]},{"name":"Verse 2","note":"","lines":[[{"c":"4","t":"Lift up your heart and sing His "},{"c":"6m","t":"praise"}],[{"c":"4","t":"For He alone "},{"c":"6m","t":"commands "},{"c":"5","t":"my soul"}],[{"c":"4","t":"With righteousness "},{"c":"6m","t":"and Justice"}],[{"c":"","t":"From "},{"c":"4","t":"Heaven "},{"c":"5","t":"he came "},{"c":"6m","t":"down"}],[{"c":"","t":"To "},{"c":"4","t":"bring his "},{"c":"1","t":"kingdom here on "},{"c":"5","t":"earth"}]]},{"name":"Chorus","note":"","lines":[[{"c":"4","t":"Praise the Word of "},{"c":"1","t":"God,"}],[{"c":"","t":"through him "},{"c":"5","t":"heavens were "},{"c":"6m","t":"made"}],[{"c":"","t":"Oh "},{"c":"4","t":"look up to the "},{"c":"1","t":"sky"}],[{"c":"","t":"and see his "},{"c":"5","t":"glory "},{"c":"6m","t":"displayed"}],[{"c":"4","t":"For as He "},{"c":"1","t":"rose, my "},{"c":"4","t":"salvation "},{"c":"5","t":"se"},{"c":"6m","t":"cured"}],[{"c":"4","t":"Oh Jesus Christ, I’ll "},{"c":"5","t":"trust in your "},{"c":"1","t":"name"}]]},{"name":"Verse 3","note":"","lines":[[{"c":"4","t":"Lay down your life, Our King has "},{"c":"6m","t":"come"}],[{"c":"","t":"For "},{"c":"4","t":"only He could "},{"c":"6m","t":"bear that "},{"c":"5","t":"Cross"}],[{"c":"4","t":"He died for our "},{"c":"6m","t":"redemption"}],[{"c":"4","t":"For a "},{"c":"5","t":"moment "},{"c":"6m","t":"light went dark"}],[{"c":"","t":"Sing "},{"c":"4","t":"Hallelujah "},{"c":"1","t":"He is "},{"c":"5","t":"alive"}]]},{"name":"Chorus","note":"Repeat chorus","lines":[]},{"name":"Bridge","note":"×2","lines":[[{"c":"4","t":"The righteous one That "},{"c":"6m","t":"death couldn’t "},{"c":"5","t":"hold"}],[{"c":"4","t":"With loving kindness "},{"c":"6m","t":"he chose my "},{"c":"5","t":"soul"}],[{"c":"4","t":"The first and last, The "},{"c":"6m","t":"eternal "},{"c":"4","t":"Word "},{"c":"5","t":" "},{"c":"6m","t":""}],[{"c":"4","t":"The great I AM who "},{"c":"5","t":"conquered "},{"c":"1","t":"the world"}]]},{"name":"Chorus","note":"Repeat chorus","lines":[]},{"name":"Bridge 2","note":"×2","lines":[[{"c":"4","t":"The righteous one That "},{"c":"6m","t":"death couldn’t "},{"c":"5","t":"hold"}],[{"c":"4","t":"With loving kindness "},{"c":"6m","t":"he chose my "},{"c":"5","t":"soul"}],[{"c":"4","t":"My first and last, My "},{"c":"6m","t":"eternal "},{"c":"4","t":"Word "},{"c":"5","t":" "},{"c":"6m","t":""}],[{"c":"4","t":"My great I AM who "},{"c":"5","t":"conquered "},{"c":"1","t":"the world"}]]}];
export const ORIGINAL_KEY = 'Eb';
export const KEYS = ['C','Db','D','Eb','E','F','F#','G','Ab','A','Bb','B'];
export const SCALES = {C:['C','D','E','F','G','A','B'],Db:['Db','Eb','F','Gb','Ab','Bb','C'],D:['D','E','F#','G','A','B','C#'],Eb:['Eb','F','G','Ab','Bb','C','D'],E:['E','F#','G#','A','B','C#','D#'],F:['F','G','A','Bb','C','D','E'],'F#':['F#','G#','A#','B','C#','D#','E#'],G:['G','A','B','C','D','E','F#'],Ab:['Ab','Bb','C','Db','Eb','F','G'],A:['A','B','C#','D','E','F#','G#'],Bb:['Bb','C','D','Eb','F','G','A'],B:['B','C#','D#','E','F#','G#','A#']};
export const pretty = (n) => n.replace(/b/g, '\u266d').replace(/#/g, '\u266f');
export const chordFor = (deg, key, numbers) => {
if (!deg) return '\u00a0';
const m = /^(\d)(m?)$/.exec(deg);
if (!m) return deg;
if (numbers) return m[1] + m[2];
return pretty(SCALES[key][Number(m[1]) - 1]) + m[2];
};
export const FAMILY = {C:['C',0],Db:['C',1],D:['D',0],Eb:['C',3],E:['D',2],F:['D',3],'F#':['D',4],G:['G',0],Ab:['G',1],A:['G',2],Bb:['G',3],B:['G',4]};
export const FAM_SHAPES = {C:{C:'1',F:'4maj7|sus2',Am:'6m7',G:'56|(add4)'},G:{G:'1',C:'4|add9',D:'5|sus4',Em:'6m7'},D:{D:'1',G:'4',A:'5|sus4',Bm:'6m7'}};
export const soundName = (spec, key) => spec.split('/').map((part) => {
const m = /^(\d)(.*)$/.exec(part);
return pretty(SCALES[key][Number(m[1]) - 1]) + m[2];
}).join('/');

const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function keyLabel(k) {
  return pretty(k) + (k === ORIGINAL_KEY ? ' (Original)' : '');
}

export function stateFor(key, numbers) {
  const fam = FAMILY[key][0];
  const capo = FAMILY[key][1];
  const snd = {}, sndx = {};
  Object.keys(FAM_SHAPES).forEach((F) => {
    Object.keys(FAM_SHAPES[F]).forEach((k) => {
      const p = FAM_SHAPES[F][k].split('|');
      snd[F + '_' + k] = soundName(p[0], key);
      sndx[F + '_' + k] = p[1] || '';
    });
  });
  return {
    fam, capo, snd, sndx,
    shapeLabel: fam + '-shape chords',
    guitarHeading: 'Guitar Chords · ' + pretty(key) + ' Major · ' + (capo === 0 ? 'No capo' : 'Capo ' + capo),
    sheetHtml: renderSheet(key, numbers),
  };
}

export function renderSheet(key, numbers) {
  return SONG.map((sec) =>
    '<div class="csec"><p class="csec-h">' + esc(sec.name) + ' <span>' + esc(sec.note) + '</span></p>' +
    sec.lines.map((ln) => '<div class="cline">' + ln.map((sg) =>
      '<span class="cseg"><span class="cch">' + esc(chordFor(sg.c, key, numbers)) + '</span><span class="cly">' +
      esc(sg.t === '' ? ' ' : sg.t) + '</span></span>').join('') + '</div>').join('') +
    '</div>').join('');
}
