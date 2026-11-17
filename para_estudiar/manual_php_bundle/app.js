
const search = document.getElementById('search');
const topics = [...document.querySelectorAll('.topic')];
const sections = [...document.querySelectorAll('.manual-section')];

search.addEventListener('input', () => {
  const q = search.value.trim().toLocaleLowerCase('es');
  topics.forEach(topic => {
    topic.classList.toggle('hidden', q && !topic.innerText.toLocaleLowerCase('es').includes(q));
  });
  sections.forEach(section => {
    if (section.id === 'esquema') return;
    const visible = [...section.querySelectorAll('.topic')].some(t => !t.classList.contains('hidden'));
    section.classList.toggle('hidden', !!q && !visible);
  });
});

document.getElementById('expandAll').addEventListener('click', () => {
  document.querySelectorAll('.topic').forEach(t => {
    t.style.display = 'block';
    t.classList.remove('hidden');
  });
  search.value = '';
  sections.forEach(s => s.classList.remove('hidden'));
});
document.getElementById('collapseAll').addEventListener('click', () => {
  document.querySelectorAll('.topic').forEach(t => t.classList.add('hidden'));
  sections.forEach(s => s.classList.remove('hidden'));
  search.value = '';
});
