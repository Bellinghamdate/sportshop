import { startPage, el } from './shop-page.js';
import { t, getLang } from './i18n.js';

startPage();
// Bảng quy ước của bộ sản phẩm mẫu: size VN theo nhãn EU.
const sizes = [
  [22.0, 35, 3.5], [22.7, 36, 4.5], [23.4, 37, 5], [24.1, 38, 6],
  [24.8, 39, 6.5], [25.5, 40, 7.5], [26.2, 41, 8], [26.9, 42, 9],
  [27.6, 43, 9.5], [28.3, 44, 10.5], [29.0, 45, 11.5]
];
let selected;
function render() {
  el('sizeRows').replaceChildren();
  for (const entry of sizes) {
    const [cm, eu, us] = entry;
    const row = el('sizeRows').insertRow();
    row.classList.toggle('selected', selected === entry);
    for (const n of [cm, eu, us, eu]) row.insertCell().textContent = n.toLocaleString(getLang());
  }
  el('sizeResult').textContent = selected ?
    t('size.result') + ' · VN ' + selected[1] + ' / US ' + selected[2] + ' / EU ' + selected[1] : '';
}

el('cm').addEventListener('input', () => { selected = null; render(); });
el('sizeForm').addEventListener('submit', e => {
  e.preventDefault();
  selected = sizes.find(([max]) => el('cm').valueAsNumber <= max);
  render();
});
window.addEventListener('langChange', render);
render();
