/* غالاش — CSS pixel-art food sprites rendered from text patterns */
(function () {
  const PAL = {
    K: '#1c1c1c', // outline
    B: '#E89A35', b: '#C2761F', L: '#F6C879', // bun
    Y: '#FFC62E', y: '#E59A0C', // cheese
    G: '#5FB23F', g: '#3C8A2A', // greens
    M: '#B07344', m: '#854F28', // mushroom
    R: '#DA1F26', r: '#A8141A', // red box
    W: '#ffffff',
    F: '#FFC62E', f: '#E59A0C', // fries
  };

  const SPRITES = {
    cheese: [
      '..KKKKKKKK..',
      '.KLLBBBBLLK.',
      'KBBBBBBBBBBK',
      'KbBBBBBBBBbK',
      'KYYYYYYYYYYK',
      'KyYYyYYyYYyK',
      '.KYbbbbbbYK.',
      '.KBBBBBBBBK.',
      '..KKKKKKKK..',
    ],
    veg: [
      '..KKKKKKKK..',
      '.KLLBBBBLLK.',
      'KBBBBBBBBBBK',
      'KbBBBBBBBBbK',
      'KGGGGGGGGGGK',
      'KRRRRRRRRRRK',
      '.KGbbbbbbGK.',
      '.KBBBBBBBBK.',
      '..KKKKKKKK..',
    ],
    mushroom: [
      '..KKKKKKKK..',
      '.KLLBBBBLLK.',
      'KBBBBBBBBBBK',
      'KbBBBBBBBBbK',
      'KMMMMMMMMMMK',
      'KmMMmMMmMMmK',
      '.KMbbbbbbMK.',
      '.KBBBBBBBBK.',
      '..KKKKKKKK..',
    ],
    cup: [
      'F.F.F..F.F.F',
      'FFfFFffFFfFF',
      '.RRRRRRRRRR.',
      '.RRRRRRRRRR.',
      '.RWWWWWWWWR.',
      '.RWKKKKKKWR.',
      '.RWWWWWWWWR.',
      '.RRRRRRRRRR.',
      '.RRRRRRRRRR.',
      '..RRRRRRRR..',
    ],
  };

  function renderSprite(el) {
    const key = el.getAttribute('data-sprite');
    const rows = SPRITES[key];
    if (!rows) return;
    const cols = rows[0].length;
    const px = parseInt(el.getAttribute('data-px') || '13', 10);
    el.style.display = 'grid';
    el.style.gridTemplateColumns = `repeat(${cols}, ${px}px)`;
    el.style.gridAutoRows = `${px}px`;
    el.style.width = cols * px + 'px';
    el.setAttribute('role', 'img');
    el.innerHTML = '';
    rows.forEach((row) => {
      for (const ch of row) {
        const cell = document.createElement('span');
        cell.style.width = px + 'px';
        cell.style.height = px + 'px';
        cell.style.display = 'block';
        if (PAL[ch]) cell.style.background = PAL[ch];
        el.appendChild(cell);
      }
    });
  }

  function renderAll(scope) {
    (scope || document).querySelectorAll('[data-sprite]').forEach(renderSprite);
  }

  window.GalashSprites = { renderAll, renderSprite, PAL, SPRITES };
  if (document.readyState !== 'loading') renderAll();
  else document.addEventListener('DOMContentLoaded', () => renderAll());
})();
