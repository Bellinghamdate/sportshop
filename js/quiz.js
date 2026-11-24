import { startPage, el, element, message } from './shop-page.js';
import { t } from './i18n.js';
import { renderCards } from './product-cards.js';

startPage('quiz');
const surfaces = {
  football: ['surfaceGrass','surfaceTurf','surfaceIndoor'], running: ['surfaceRoad','surfaceTrail','surfaceTrack'],
  badminton: ['surfaceIndoor','surfaceCourt'], gym: ['surfaceRubber','surfacePlatform']
};
// Thuộc tính tư vấn cho bộ mẫu; sản phẩm mới có thể bổ sung surfaces và fit trong Firestore.
const profiles = {
  'football-01': [['surfaceGrass'],'regular'], 'football-02': [['surfaceTurf'],'wide'], 'football-03': [['surfaceIndoor'],'narrow'],
  'running-01': [['surfaceRoad','surfaceTrack'],'regular'], 'running-02': [['surfaceTrail'],'wide'], 'running-03': [['surfaceRoad','surfaceTrack'],'narrow'],
  'badminton-01': [['surfaceIndoor','surfaceCourt'],'regular'], 'badminton-02': [['surfaceIndoor'],'narrow'], 'badminton-03': [['surfaceCourt'],'wide'],
  'gym-01': [['surfacePlatform'],'wide'], 'gym-02': [['surfaceRubber'],'regular'], 'gym-03': [['surfacePlatform','surfaceRubber'],'narrow']
};
const budgets = {low:1000000, mid:1500000, high:Infinity};
const answers = {sport:'',surface:'',fit:'',budget:''};
let products, matches, resultKey = '', revision = 0;
function questions() {
  const wrap = el('questions');
  wrap.replaceChildren();
  const choices = [Object.keys(surfaces),surfaces[answers.sport] || [],['regular','wide','narrow'],Object.keys(budgets)];
  Object.keys(answers).forEach((name,i) => {
    const label = element('label');
    label.append(element('span', t('quiz.q' + (i+1))));
    const select = element('select');
    select.name = name;
    select.required = true;
    select.disabled = name === 'surface' && !answers.sport;
    select.add(new Option(t('admin.choose'), ''));
    for (const v of choices[i]) select.add(new Option(t((name === 'sport' ? 'cat.' : 'quiz.') + v), v));
    select.value = answers[name];
    select.onchange = () => {
      answers[name] = select.value;
      matches = undefined;
      revision++;
      el('quizResult').hidden = true;
      if (name === 'sport') {
        answers.surface = '';
        questions();
        el('quizForm').elements.surface.focus();
      }
    };
    label.append(select);
    wrap.append(label);
  });
}

function renderMatches() {
  el('quizResult').hidden = false;
  if (resultKey) message(el('quizNote'), resultKey);
  else { el('quizNote').removeAttribute('data-i18n'); el('quizNote').textContent = ''; }
  renderCards(el('quizCards'), matches);
}
el('quizForm').addEventListener('submit', async event => {
  event.preventDefault();
  const turn = ++revision;
  try {
    const { getProducts } = await import('./catalog.js');
    products ??= await getProducts();
    if (turn !== revision) return;
    const max = budgets[answers.budget];
    const score = p => {
      const [surfaces, fit] = profiles[p.id] || [[], ''];
      return Number(p.price <= max)*8 + Number((p.surfaces || surfaces).includes(answers.surface))*4
        + Number((p.fit || fit) === answers.fit)*2;
    };
    const ranked = products.filter(p => p.category === answers.sport && p.inStock !== false && p.sizes?.length)
      .sort((a,b) => score(b)-score(a) || a.price-b.price);
    const affordable = ranked.filter(p => p.price <= max);
    matches = affordable.length >= 2 ? affordable.slice(0,3) : ranked.slice(0,2);
    resultKey = !matches.length ? 'quiz.none' : matches.some(p => p.price > max) ? 'quiz.more' : '';
  } catch {
    if (turn !== revision) return;
    matches = [];
    resultKey = 'products.load_error';
  }
  renderMatches();
  el('quizResult').focus();
});
window.addEventListener('langChange', () => { questions(); if (matches) renderMatches(); });
questions();
