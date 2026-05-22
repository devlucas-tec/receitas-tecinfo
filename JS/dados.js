// fonte única de dados de todas as receitas
const receitas = [
    {
        slug: 'bolo-de-chocolate',
        src: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=1024&auto=format&fit=crop',
        titulo: 'Bolo de chocolate',
        descricao: 'Bolo de chocolate delicioso e fácil de fazer, perfeito para qualquer ocasião.',
        tempo: '50 min',
        porcoes: '10 fatias',
        dificuldade: 'Fácil',
        ingredientes: [
            '3 ovos',
            '2 xícaras de farinha de trigo',
            '1 e 1/2 xícara de açúcar',
            '1 xícara de leite',
            '1/2 xícara de óleo',
            '1/2 xícara de chocolate em pó',
            '1 colher de sopa de fermento em pó'
        ],
        preparo: [
            'Preaqueça o forno a 180 °C e unte uma forma com manteiga e farinha.',
            'No liquidificador, bata os ovos, o leite, o óleo e o açúcar por 3 minutos.',
            'Transfira para uma tigela e adicione a farinha e o chocolate em pó, misturando bem.',
            'Por último, acrescente o fermento e misture delicadamente.',
            'Despeje na forma e asse por 35 a 40 minutos, ou até o palito sair limpo.',
            'Deixe esfriar antes de desenformar e coberture com ganache se desejar.'
        ]
    },
    {
        slug: 'lasanha-de-carne',
        src: 'https://images.unsplash.com/photo-1709429790175-b02bb1b19207?q=80&w=1332&auto=format&fit=crop',
        titulo: 'Lasanha de carne',
        descricao: 'Lasanha de carne saborosa e fácil de preparar, perfeita para um jantar em família.',
        tempo: '1h 20 min',
        porcoes: '8 porções',
        dificuldade: 'Médio',
        ingredientes: [
            '500 g de massa de lasanha pré-cozida',
            '500 g de carne moída',
            '1 lata de molho de tomate',
            '1 cebola picada',
            '3 dentes de alho picados',
            '500 g de molho bechamel',
            '200 g de queijo mussarela ralado',
            'Sal, pimenta e orégano a gosto'
        ],
        preparo: [
            'Refogue a cebola e o alho no azeite até dourarem.',
            'Adicione a carne moída e cozinhe até perder a cor rosada.',
            'Tempere com sal, pimenta e orégano, e adicione o molho de tomate. Cozinhe por 10 minutos.',
            'Em um refratário, alterne camadas de massa, molho de carne, bechamel e mussarela.',
            'Finalize com bechamel e bastante queijo por cima.',
            'Cubra com papel alumínio e asse a 200 °C por 30 minutos. Retire o papel e asse mais 15 minutos.'
        ]
    },
    {
        slug: 'salada-de-frutas',
        src: 'https://images.unsplash.com/photo-1658431618300-a69b07fb5782?q=80&w=687&auto=format&fit=crop',
        titulo: 'Salada de frutas',
        descricao: 'Salada de frutas fresca e colorida, perfeita para um lanche saudável ou sobremesa.',
        tempo: '15 min',
        porcoes: '4 porções',
        dificuldade: 'Fácil',
        ingredientes: [
            '1 manga picada',
            '1 xícara de morangos fatiados',
            '1 banana em rodelas',
            '1 xícara de uvas sem sementes',
            '1 kiwi picado',
            '200 ml de suco de laranja natural',
            '1 colher de sopa de mel',
            'Hortelã fresca a gosto'
        ],
        preparo: [
            'Lave bem todas as frutas antes de cortar.',
            'Pique as frutas em pedaços de tamanho similar e coloque em uma tigela grande.',
            'Misture o suco de laranja com o mel e despeje sobre as frutas.',
            'Mexa delicadamente para não amassar.',
            'Leve à geladeira por pelo menos 15 minutos antes de servir.',
            'Decore com folhas de hortelã na hora de servir.'
        ]
    },
    {
        slug: 'pizza-de-pepperoni',
        src: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=880&auto=format&fit=crop',
        titulo: 'Pizza de pepperoni',
        descricao: 'Pizza de pepperoni crocante e saborosa, perfeita para uma noite de filme ou reunião com amigos.',
        tempo: '45 min',
        porcoes: '8 fatias',
        dificuldade: 'Médio',
        ingredientes: [
            '1 disco de massa de pizza (30 cm)',
            '200 ml de molho de tomate',
            '200 g de mussarela fatiada',
            '150 g de pepperoni fatiado',
            '1 colher de chá de orégano',
            '1 fio de azeite',
            'Pimenta calabresa a gosto'
        ],
        preparo: [
            'Preaqueça o forno a 220 °C por pelo menos 20 minutos.',
            'Espalhe o molho de tomate sobre a massa, deixando 1 cm de borda livre.',
            'Distribua a mussarela por cima do molho.',
            'Cubra com as fatias de pepperoni uniformemente.',
            'Finalize com orégano, pimenta calabresa e um fio de azeite.',
            'Asse por 15 a 20 minutos, ou até a borda dourar e o queijo borbulhar.'
        ]
    },
    {
        slug: 'pudim-de-leite-condensado',
        src: 'https://images.unsplash.com/photo-1702728109878-c61a98d80491?q=80&w=1170&auto=format&fit=crop',
        titulo: 'Pudim de leite condensado',
        descricao: 'Pudim de leite condensado cremoso e delicioso, perfeito para uma sobremesa clássica e irresistível.',
        tempo: '1h 10 min',
        porcoes: '10 fatias',
        dificuldade: 'Fácil',
        ingredientes: [
            '1 lata de leite condensado (395 g)',
            '2 latas de leite (use a lata do condensado como medida)',
            '3 ovos inteiros',
            '1 xícara de açúcar (para a calda)',
            '1/2 xícara de água (para a calda)'
        ],
        preparo: [
            'Prepare a calda: derreta o açúcar em fogo médio até caramelizar, adicione a água com cuidado e mexa até dissolver. Despeje na forma de pudim.',
            'No liquidificador, bata o leite condensado, o leite e os ovos por 2 minutos.',
            'Despeje a mistura na forma caramelizada.',
            'Cubra com papel alumínio e leve ao forno em banho-maria a 180 °C por 1 hora.',
            'Verifique com um palito — deve sair limpo.',
            'Deixe esfriar completamente antes de levar à geladeira por no mínimo 4 horas. Desenforme frio.'
        ]
    },
    {
        slug: 'macarrao-a-bolonhesa',
        src: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=692&auto=format&fit=crop',
        titulo: 'Macarrão à bolonhesa',
        descricao: 'Macarrão à bolonhesa saboroso e fácil de preparar, perfeito para um almoço em família ou jantar rápido.',
        tempo: '40 min',
        porcoes: '4 porções',
        dificuldade: 'Fácil',
        ingredientes: [
            '400 g de macarrão espaguete',
            '400 g de carne moída',
            '1 lata de tomate pelado',
            '1 cebola picada',
            '3 dentes de alho picados',
            '2 colheres de sopa de azeite',
            'Sal, pimenta, louro e orégano a gosto',
            'Parmesão ralado para servir'
        ],
        preparo: [
            'Cozinhe o macarrão em água salgada conforme as instruções da embalagem. Reserve.',
            'Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourarem.',
            'Adicione a carne moída e cozinhe até secar toda a água.',
            'Acrescente o tomate pelado amassado, a folha de louro e tempere com sal, pimenta e orégano.',
            'Cozinhe em fogo baixo por 20 minutos, mexendo ocasionalmente.',
            'Sirva o molho sobre o macarrão escorrido e finalize com parmesão ralado.'
        ]
    },
    {
        slug: 'hamburguer-caseiro',
        src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        titulo: 'Hambúrguer caseiro',
        descricao: 'Hambúrguer caseiro suculento e saboroso, perfeito para um almoço ou jantar descontraído.',
        tempo: '30 min',
        porcoes: '1 unidade',
        dificuldade: 'Médio',
        ingredientes: [
            '150 g de carne moída',
            '1 pão de hambúrguer',
            '1 fatia de queijo cheddar',
            'Folhas de alface',
            '1 rodela de tomate',
            '1 colher de sopa de maionese',
            'Sal e pimenta a gosto'
        ],
        preparo: [
            'Tempere a carne moída com sal e pimenta, e molde em formato de hambúrguer.',
            'Aqueça uma frigideira em fogo médio e cozinhe o hambúrguer por 3-4 minutos de cada lado, ou até atingir o ponto desejado.',
            'Nos últimos minutos de cozimento, coloque a fatia de queijo cheddar sobre o hambúrguer para derreter.',
            'Toste levemente o pão na mesma frigideira.',
            'Monte o hambúrguer: passe maionese no pão, adicione a alface, o tomate e o hambúrguer com queijo.',
            'Sirva imediatamente.'
        ]
    },
    {
        slug: 'churros',
        src: 'https://images.unsplash.com/photo-1624371414361-e670edf4898d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        titulo: 'Churros',
        descricao: 'Churros crocantes por fora e macios por dentro, perfeitos para um lanche ou sobremesa deliciosa.',
        tempo: '25 min',
        porcoes: '10 unidades',
        dificuldade: 'Médio',
        ingredientes: [
            '1 xícara de água',
            '2 colheres de sopa de açúcar',
            '1/2 colher de chá de sal',
            '2 colheres de sopa de óleo',
            '1 xícara de farinha de trigo',
            'Óleo para fritar',
            'Açúcar e canela para polvilhar',
            'Doce de leite para acompanhar'
        ],
        preparo: [
            'Em uma panela, misture a água, o açúcar, o sal e o óleo. Leve ao fogo até ferver.',
            'Retire do fogo e adicione a farinha de trigo de uma só vez, mexendo vigorosamente até formar uma massa homogênea.',
            'Deixe a massa esfriar por alguns minutos.',
            'Coloque a massa em um saco de confeitar com bico estrela e forme os churros diretamente no óleo quente (180 °C).',
            'Frite até dourar, cerca de 2-3 minutos de cada lado.',
            'Retire os churros com uma escumadeira e escorra em papel toalha.',
            'Polvilhe com açúcar e canela, e sirva com doce de leite.'
            
        ]
    }
];