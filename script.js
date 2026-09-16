const procedures=[
['Design de Sobrancelha','Sobrancelhas','R$ 50,00','assets/sobrancelhas.jpg','Protocolo personalizado com mapeamento para um resultado simétrico e harmônico.',['Design + Henna: R$ 65,00','Design + Coloração: R$ 65,00']],
['Brow Lamination','Sobrancelhas','R$ 135,00','assets/sobrancelhas.jpg','Indicada para sobrancelhas finas ou com fios bagunçados, buscando fios mais grossos ou alinhados.',['A cada 45 a 60 dias','Tempo médio: 2h']],
['Shadow','Micropigmentação','R$ 450,00','assets/shadow.jpg','Técnica com efeito sombreado e suave, seguindo o tom dos fios naturais.',['Retorno: R$ 180,00','Retoque: R$ 280,00','Teste alérgico: R$ 25,00']],
['Retorno','Micropigmentação','R$ 180,00','assets/shadow.jpg','Retorno da micropigmentação conforme avaliação.',['Agendamento conforme orientação profissional']],
['Retoque','Micropigmentação','R$ 280,00','assets/shadow.jpg','Retoque de micropigmentação mediante avaliação.',['Agendamento conforme avaliação']],
['Teste alérgico','Micropigmentação','R$ 25,00','assets/shadow.jpg','Teste alérgico para o procedimento de micropigmentação.',['Realizado antes do procedimento']],
['Super Fast','Cílios','R$ 150,00','assets/cilios.jpg','Preenchimento para quem ama naturalidade e está começando com extensão de cílios.',['Realizado a cada 30 dias','Tempo médio: 1h30 a 2h']],
['Super Fast Plus','Cílios','R$ 160,00','assets/cilios.jpg','Modelo sem manutenção com preenchimento de 50%, preservando a naturalidade.',['Realizado a cada 30 dias','Tempo médio: 2h']],
['Efeito Sirena','Cílios','R$ 160,00','assets/cilios.jpg','Preenche metade do olho, criando efeito de delineado gatinho e olhar alongado.',['Manutenção: R$ 115,00','A cada 15 a 20 dias']],
['Volume Brasileiro','Cílios','R$ 200,00','assets/cilios.jpg','Preenchimento médio que combina volume e naturalidade.',['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias']],
['Volume Europeu','Cílios','R$ 200,00','assets/cilios.jpg','Técnica de preenchimento médio para quem gosta de volume e naturalidade.',['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias']],
['Volume Americano','Cílios','R$ 200,00','assets/cilios.jpg','Indicado para quem gosta de cílios mais preenchidos e olhar marcante.',['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias']],
['Efeito Molhado','Cílios','R$ 200,00','assets/cilios.jpg','Técnica personalizada que pode ficar mais natural ou mais preenchida.',['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias']],
['Efeito Fox Eyes','Cílios','R$ 200,00','assets/cilios.jpg','Técnica para um olhar mais alongado, com preenchimento de 100% dos fios.',['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias']],
['Efeito Delineado','Cílios','R$ 230,00','assets/cilios.jpg','Técnica para naturalidade e leveza, criando aparência de delineado.',['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias']],
['Efeito Darling','Cílios','R$ 230,00','assets/cilios.jpg','Técnica personalizada com fios feitos manualmente durante o procedimento.',['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias']],
['Efeito Cisne','Cílios','R$ 230,00','assets/cilios.jpg','Técnica personalizada para olhar alongado e despojado.',['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias']],
['Efeito Wisp','Cílios','R$ 230,00','assets/cilios.jpg','Técnica personalizada para olhar marcante e despojado.',['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias']],
['Volume Russo','Cílios','R$ 230,00','assets/cilios.jpg','Técnica clássica para um olhar mais marcante e sofisticado.',['Manutenção: R$ 125,00 de 15 a 20 dias','Manutenção: R$ 145,00 de 21 a 30 dias']],
['Volume Diamante','Cílios','R$ 260,00','assets/diamante.jpg','Técnica sem manutenção com preenchimento de 100% dos fios saudáveis.',['Sem manutenção','Tempo médio: 2h30']],
['Cílios Inferiores','Cílios','R$ 100,00','assets/diamante.jpg','Aplicação nos cílios inferiores para um olhar mais marcante.',['Pode ser realizado a cada 20 a 30 dias','Tempo médio: 1h a 1h30']]
];

const grid=document.querySelector('#catalog-grid');
const filters=document.querySelector('#filters');
const modal=document.querySelector('#modal');
const modalImage=document.querySelector('#modal-image');
const modalTitle=document.querySelector('#modal-title');
const modalCategory=document.querySelector('#modal-category');
const modalPrice=document.querySelector('#modal-price');
const modalDescription=document.querySelector('#modal-description');
const modalMeta=document.querySelector('#modal-meta');
let active='Todos';

const safe=value=>String(value).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));

function renderFilters(){
  const categories=['Todos',...new Set(procedures.map(item=>item[1]))];
  filters.innerHTML=categories.map(category=>`<button class="filter ${category===active?'active':''}" type="button" data-filter="${safe(category)}">${safe(category)}</button>`).join('');
  filters.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{active=button.dataset.filter;renderFilters();renderCards()}));
}

function renderCards(){
  const list=active==='Todos'?procedures:procedures.filter(item=>item[1]===active);
  grid.innerHTML=list.map(item=>{const index=procedures.indexOf(item);return `<article class="product-card" tabindex="0" data-index="${index}"><div class="product-image"><img src="./${item[3]}" alt="${safe(item[0])}" loading="lazy"><span class="product-tag">${safe(item[1].toUpperCase())}</span></div><div class="product-copy"><div><h3>${safe(item[0])}</h3><p>${safe(item[2])}</p></div><span class="product-arrow">↗</span></div></article>`}).join('');
  grid.querySelectorAll('.product-card').forEach(card=>{const open=()=>showModal(Number(card.dataset.index));card.addEventListener('click',open);card.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();open()}})});
}

function showModal(index){
  const item=procedures[index];
  modalImage.innerHTML=`<img src="./${item[3]}" alt="${safe(item[0])}">`;
  modalCategory.textContent=item[1];
  modalTitle.textContent=item[0];
  modalPrice.textContent=item[2];
  modalDescription.textContent=item[4];
  modalMeta.innerHTML=item[5].map(value=>`<span>• ${safe(value)}</span>`).join('');
  modal.showModal();
  document.body.style.overflow='hidden';
}

function closeModal(){modal.close();document.body.style.overflow='';}

document.querySelector('#modal-close').addEventListener('click',closeModal);
modal.addEventListener('click',event=>{if(event.target===modal)closeModal()});
document.querySelectorAll('[data-filter]').forEach(link=>link.addEventListener('click',()=>{active=link.dataset.filter;renderFilters();renderCards()}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&modal.open)closeModal()});

document.querySelector('.search').addEventListener('click',()=>document.querySelector('#catalogo').scrollIntoView({behavior:'smooth'}));
renderFilters();
renderCards();
