const cards = [
    {src: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        titulo : 'Bolo de chocolate', 
        descricao : 'Bolo de chocolate delicioso e fácil de fazer, perfeito para qualquer ocasião.'
    },

    {src: 'https://images.unsplash.com/photo-1709429790175-b02bb1b19207?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        titulo : 'Lasanha de carne', 
        descricao : 'Lasanha de carne saborosa e fácil de preparar, perfeita para um jantar em família.'
    },

    {src: 'https://images.unsplash.com/photo-1658431618300-a69b07fb5782?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        titulo : 'Salada de frutas', 
        descricao : 'Salada de frutas fresca e colorida, perfeita para um lanche saudável ou sobremesa.'
    },

    {src: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        titulo : 'Pizza de pepperoni', 
        descricao : 'Pizza de pepperoni crocante e saborosa, perfeita para uma noite de filme ou reunião com amigos.'
    },

    {src: 'https://images.unsplash.com/photo-1702728109878-c61a98d80491?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        titulo : 'Pudim de leite condensado', 
        descricao : 'Pudim de leite condensado cremoso e delicioso, perfeito para uma sobremesa clássica e irresistível.'
    },

    {src: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        titulo : 'Macarrão à bolonhesa', 
        descricao : 'Macarrão à bolonhesa saboroso e fácil de preparar, perfeito para um almoço em família ou jantar rápido.'
    }
]


const container = document.querySelector('.container-cards');

const cardsHTML = cards.map(card => {
    return `
        <li class="card">
            <img src="${card.src}" alt="${card.titulo}">  
            <h2>${card.titulo}</h2>
            <p class="card-desc">${card.descricao}</p>
            <button class="card-btn">Ver receita</button>  
        </li>
    `
}).join('');

container.innerHTML = cardsHTML;