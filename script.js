// Tema claro/escuro com persistência
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme') || 'light';
  if(saved === 'dark') root.setAttribute('data-theme','dark');

  function toggleTheme(){
    const isDark = root.getAttribute('data-theme') === 'dark';
    if(isDark){
      root.removeAttribute('data-theme');
      localStorage.setItem('theme','light');
      setToggleButtons(false);
    } else {
      root.setAttribute('data-theme','dark');
      localStorage.setItem('theme','dark');
      setToggleButtons(true);
    }
  }
  function setToggleButtons(state){
    document.querySelectorAll('#theme-toggle, #theme-toggle-2, #theme-toggle-3').forEach(btn=>{
      if(btn) btn.setAttribute('aria-pressed', state);
    });
  }
  // attach to all toggle buttons
  document.querySelectorAll('#theme-toggle, #theme-toggle-2, #theme-toggle-3').forEach(btn=>{
    if(btn) btn.addEventListener('click', toggleTheme);
  });
  setToggleButtons(saved === 'dark');
})();

// Filtro de personalidades (bônus)
(function(){
  const select = document.getElementById('area-filter');
  if(!select) return;
  const list = document.getElementById('personalities-list');
  select.addEventListener('change', (e)=>{
    const val = e.target.value;
    const cards = list.querySelectorAll('.person-card');
    cards.forEach(card=>{
      if(val === 'all' || card.dataset.area === val){
        card.style.display = '';
        card.setAttribute('tabindex', '0');
      } else {
        card.style.display = 'none';
        card.setAttribute('tabindex', '-1');
      }
    });
  });
})();
