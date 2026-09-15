const procedures = [
  {id:1,name:'Design de Sobrancelha',category:'Sobrancelhas',price:'R$ 50,00',description:'Protocolo personalizado com mapeamento da sobrancelha para um resultado simétrico e harmônico com o rosto. O catálogo informa que o procedimento não tem como objetivo afinar a sobrancelha.',meta:['Com henna: R$ 65,00','Com coloração: R$ 65,00']},
  {id:2,name:'Brow Lamination',category:'Sobrancelhas',price:'R$ 135,00',description:'Indicada para sobrancelhas finas ou com fios bagunçados, buscando um lifting no olhar e fios mais grossos ou alinhados.',meta:['Realização: a cada 45 a 60 dias','Tempo médio: 2h','Inclui design e aplicação de henna ou coloração opcional']},
  {id:3,name:'Micropigmentação Shadow',category:'Micropigmentação',price:'R$ 450,00',description:'Técnica de micropigmentação com efeito sombreado e suave, seguindo o tom dos fios naturais para um resultado leve e harmônico.',meta:['Retorno de 30 a 60 dias: R$ 180,00','Retoque de 6 meses a 2 anos: R$ 280,00, mediante avaliação','Teste alérgico: R$ 25,00','Até 12× sem juros no cartão']},
  {id:4,name:'Super Fast',category:'Cílios',price:'R$ 150,00',description:'Preenchimento indicado para quem ama naturalidade e está começando a usar extensão de cílios. É apresentado no catálogo como uma técnica sem manutenção.',meta:['Realizado a cada 30 dias','Tempo médio: 1h30 a 2h']},
  {id:5,name:'Super Fast Plus',category:'Cílios',price:'R$ 160,00',description:'Modelo sem manutenção com preenchimento de 50%, pensado para um resultado médio sem perder a naturalidade.',meta:['Realizado a cada 30 dias','Tempo médio: 2h']},
  {id:6,name:'Efeito Sirena',category:'Cílios',price:'R$ 160,00',description:'Técnica que preenche apenas metade do olho, criando efeito de delineado gatinho e um olhar mais alongado.',meta:['Manutenção: R$ 115,00 a cada 15 a 20 dias','Tempo médio: 2h']},
  {id:7,name:'Volume Brasileiro',category:'Cílios',price:'R$ 200,00',description:'Clássico dos cílios, com preenchimento médio para combinar volume e naturalidade.',meta:['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias','Tempo médio: 2h']},
  {id:8,name:'Volume Europeu',category:'Cílios',price:'R$ 200,00',description:'Técnica de preenchimento médio, indicada para quem gosta de volume e naturalidade.',meta:['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias','Tempo médio: 2h']},
  {id:9,name:'Volume Americano',category:'Cílios',price:'R$ 200,00',description:'Indicado para quem gosta de cílios mais preenchidos e um olhar mais marcante.',meta:['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias','Tempo médio: 2h']},
  {id:10,name:'Efeito Molhado',category:'Cílios',price:'R$ 200,00',description:'Técnica que traz um olhar natural e leve. O preenchimento é personalizado, podendo ficar mais natural ou mais preenchido.',meta:['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias','Tempo médio: 2h']},
  {id:11,name:'Efeito Fox Eyes',category:'Cílios',price:'R$ 200,00',description:'Técnica que deixa o olhar mais alongado. O catálogo descreve preenchimento de 100% dos fios, com resultado leve e impactante.',meta:['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias','Tempo médio: 2h']},
  {id:12,name:'Efeito Delineado',category:'Cílios',price:'R$ 230,00',description:'Técnica para quem busca naturalidade e leveza, criando a aparência de um delineado no olhar.',meta:['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias','Tempo médio: 2h']},
  {id:13,name:'Efeito Darling',category:'Cílios',price:'R$ 230,00',description:'Técnica personalizada, com fios feitos manualmente durante o procedimento, para um olhar mais despojado e único.',meta:['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias','Tempo máximo: 2h30']},
  {id:14,name:'Efeito Cisne',category:'Cílios',price:'R$ 230,00',description:'Técnica personalizada para um olhar mais alongado e despojado, com fios criados manualmente durante o procedimento.',meta:['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias','Tempo médio: 2h30']},
  {id:15,name:'Efeito Wisp',category:'Cílios',price:'R$ 230,00',description:'Técnica personalizada que busca um olhar mais marcante e despojado, com fios trabalhados manualmente.',meta:['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias','Tempo médio: 2h30']},
  {id:16,name:'Volume Russo',category:'Cílios',price:'R$ 230,00',description:'Técnica clássica para quem busca um olhar mais marcante e sofisticado.',meta:['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias','Tempo médio: 2h30']},
  {id:17,name:'Volume Diamante',category:'Cílios',price:'R$ 260,00',description:'Técnica sem manutenção com preenchimento de 100% dos fios saudáveis, indicada para quem gosta de bastante volume e durabilidade.',meta:['Sem manutenção','Tempo médio: 2h30']},
  {id:18,name:'Cílios Inferiores',category:'Cílios',price:'R$ 100,00',description:'Aplicação nos cílios inferiores, indicada para quem gosta de um olhar mais marcante.',meta:['Sem manutenção','Pode ser realizado a cada 20 a 30 dias','Tempo médio: 1h a 1h30']}
];

const grid = document.querySelector('#catalog-grid');
const filters = document.querySelector('#filters');
const modal = document.querySelector('#modal');
const modalVisual = document.querySelector('#modal-visual');
const modalTitle = document.querySelector('#modal-title');
const modalCategory = document.querySelector('#modal-category');
const modalPrice = document.querySelector('#modal-price');
const modalDescription = document.querySelector('#modal-description');
const modalMeta = document.querySelector('#modal-meta');
const closeModal = document.querySelector('#modal-close');
const categories = ['Todos', ...new Set(procedures.map(item => item.category))];
let activeCategory = 'Todos';

const escapeHTML = value => String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[char]));
const visualFor = item => `<div class="visual-inner"><span>YM</span><small>${escapeHTML(item.category)}</small><strong>${escapeHTML(item.name)}</strong></div>`;

function renderFilters(){
  filters.innerHTML = categories.map(category => `<button class="filter ${category === activeCategory ? 'active' : ''}" data-category="${escapeHTML(category)}">${escapeHTML(category)}</button>`).join('');
  filters.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { activeCategory = button.dataset.category; renderFilters(); renderProducts(); }));
}

function renderProducts(){
  const visible = activeCategory === 'Todos' ? procedures : procedures.filter(item => item.category === activeCategory);
  grid.innerHTML = visible.map(item => `
    <article class="product-card" data-id="${item.id}" tabindex="0" aria-label="Ver ${escapeHTML(item.name)}">
      <div class="product-image procedure-visual">${visualFor(item)}<span class="product-tag">${escapeHTML(item.category.toUpperCase())}</span></div>
      <div class="product-copy"><div><h3>${escapeHTML(item.name)}</h3><p>${escapeHTML(item.price)}</p></div><span class="product-arrow">↗</span></div>
    </article>`).join('');
  grid.querySelectorAll('.product-card').forEach(card => {
    const open = () => openProcedure(Number(card.dataset.id));
    card.addEventListener('click', open);
    card.addEventListener('keydown', event => { if(event.key === 'Enter' || event.key === ' '){ event.preventDefault(); open(); } });
  });
}

function openProcedure(id){
  const item = procedures.find(entry => entry.id === id);
  if(!item) return;
  modalVisual.innerHTML = visualFor(item);
  modalTitle.textContent = item.name;
  modalCategory.textContent = item.category;
  modalPrice.textContent = item.price;
  modalDescription.textContent = item.description;
  modalMeta.innerHTML = item.meta.map(text => `<span>• ${escapeHTML(text)}</span>`).join('');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function hideModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; }
closeModal.addEventListener('click', hideModal);
modal.addEventListener('click', event => { if(event.target === modal) hideModal(); });
document.addEventListener('keydown', event => { if(event.key === 'Escape') hideModal(); });
renderFilters();
renderProducts();
