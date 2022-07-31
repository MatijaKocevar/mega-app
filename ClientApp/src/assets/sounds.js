import a from './sounds/a.wav';
import b from './sounds/b.wav';
import b_flat from './sounds/b_flat.wav';
import c from './sounds/c.wav';
import c_sharp from './sounds/c_sharp.wav';
import d from './sounds/d.wav';
import e from './sounds/e.wav';
import e_flat from './sounds/e_flat.wav';
import f from './sounds/f.wav';
import f_sharp from './sounds/f_sharp.wav';
import g from './sounds/g.wav';
import g_sharp from './sounds/g_sharp.wav';

const Sounds = [ a, b_flat, b, c, c_sharp, d, e_flat, e, f, f_sharp, g_sharp, g ].map(sound => new Audio(sound));

export default Sounds;
