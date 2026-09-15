const products = [
  {id:1,name:'Produto 01',category:'Destaques',description:'Apresentação especial do item. Substitua este texto pelos detalhes reais do catálogo.',image:'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=85'},
  {id:2,name:'Produto 02',category:'Coleção',description:'Descrição curta do produto, material, características ou informações importantes.',image:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85'},
  {id:3,name:'Produto 03',category:'Coleção',description:'Uma descrição elegante e objetiva para apresentar este item ao visitante.',image:'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85'},
  {id:4,name:'Produto 04',category:'Novidades',description:'Inclua aqui os detalhes que ajudam o cliente a conhecer melhor o produto.',image:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85'},
  {id:5,name:'Produto 05',category:'Coleção',description:'Espaço reservado para uma apresentação breve, clara e personalizada.',image:'https://images.unsplash.com/photo-1506629905607-d9f9c7b3e2f4?auto=format&fit=crop&w=900&q=85'},
  {id:6,name:'Produto 06',category:'Destaques',description:'Conte aqui o que torna este item especial e como entrar em contato para saber mais.',image:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85'}
];

const grid = document.querySelector('#catalog-grid');
const filters = document.querySelector('#filters');
const modal = document.querySelector('#modal');
const modalImage = document.querySelector('#modal-image');
const modalTitle = document.querySelector('#modal-title');
const modalCategory = document.querySelector('#modal-category');
const modalDescription = document.querySelector('#modal-description');
const closeModal = document.querySelector('#modal-close');

const categories = ['Todos', ...new Set(products.map(product => product.category))];
let activeCategory = 'Todos';

function renderFilters(){
  filters.innerHTML = categories.map(category => `
    <button class="filter ${category === activeCategory ? 'active' : ''}" data-category="${category}">${category}</button>
  `).join('');

  filters.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.category;
      renderFilters();
      renderProducts();
    });
  });
}

function renderProducts(){
  const visible = activeCategory === 'Todos'
    ? products
    : products.filter(product => product.category === activeCategory);

  grid.innerHTML = visible.map(product => `
    <article class="product-card" data-id="${product.id}" tabindex="0" aria-label="Ver ${product.name}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="product-tag">${product.category.toUpperCase()}</span>
      </div>
      <div class="product-copy">
        <div>
          <h3>${product.name}</h3>
          <p>Ver detalhes</p>
        </div>
        <span class="product-arrow">↗</span>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.product-card').forEach(card => {
    const open = () => openProduct(Number(card.dataset.id));
    card.addEventListener('click', open);
    card.addEventListener('keydown', event => {
      if(event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
    });
  });
}

function openProduct(id){
  const product = products.find(item => item.id === id);
  if(!product) return;
  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalTitle.textContent = product.name;
  modalCategory.textContent = product.category;
  modalDescription.textContent = product.description;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

function hideModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

closeModal.addEventListener('click', hideModal);
modal.addEventListener('click', event => { if(event.target === modal) hideModal(); });
document.addEventListener('keydown', event => { if(event.key === 'Escape') hideModal(); });

document.querySelector('#modal-contact').addEventListener('click', hideModal);
renderFilters();
renderProducts();
