const perguntas = [[
    // Plantio
    {
        enunciado: "Qual é o primeiro passo ao iniciar o plantio de uma nova cultura?",
        alternativas: [
            {
                texto: "Preparar o solo com arado e grade.",
                afirmacao: "O preparo adequado do solo garantiu uma boa estrutura para o plantio. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Aplicar fertilizante antes da preparação do solo.",
                afirmacao: "Aplicar fertilizante sem preparar o solo primeiro não é eficaz. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Qual técnica você utiliza para garantir uma boa germinação das sementes?",
        alternativas: [
            {
                texto: "Fazer uma semeadura direta no solo.",
                afirmacao: "A semeadura direta foi bem executada, resultando em uma germinação uniforme. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Colocar as sementes em um viveiro antes do plantio.",
                afirmacao: "Utilizar um viveiro pode ser eficaz, mas não é a técnica mais comum. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Qual método você utiliza para irrigar a plantação?",
        alternativas: [
            {
                texto: "Irrigação por gotejamento.",
                afirmacao: "A irrigação por gotejamento é eficiente e economiza água. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Irrigação por aspersão.",
                afirmacao: "A irrigação por aspersão pode ser menos eficiente em áreas grandes. Pontuação moderada.",
                pontos: 0
            }            
        ]
    },
    {
        enunciado: "Qual é a sua abordagem para o controle de pragas?",
        alternativas: [
            {
                texto: "Utilizar métodos de controle biológico.",
                afirmacao: "O controle biológico é uma abordagem sustentável e eficaz. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Aplicar pesticidas químicos.",
                afirmacao: "Os pesticidas químicos podem ser eficazes, mas têm impactos ambientais negativos. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Quando é o melhor momento para colher a sua cultura?",
        alternativas: [
            {
                texto: "Quando a maioria dos grãos ou frutos estão maduros.",
                afirmacao: "Colher no momento certo garante a qualidade e a quantidade. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Quando alguns grãos ou frutos ainda estão verdes.",
                afirmacao: "Colher antes da maturação completa pode resultar em menor qualidade. Pontuação moderada.",
                pontos: 0
            }
        ]
    }], [
    // Colheita
    {
        enunciado: "Qual é a sua primeira ação ao iniciar a colheita de uma safra?",
        alternativas: [
            {
                texto: "Verificar a maturação dos produtos.",
                afirmacao: "Verificar a maturação é crucial para uma colheita de qualidade. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Começar a colheita sem inspeção.",
                afirmacao: "Iniciar a colheita sem verificar pode resultar em perda de qualidade. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Qual técnica você usa para a colheita de grãos?",
        alternativas: [
            {
                texto: "Utilizar uma colhedora combinada.",
                afirmacao: "A colhedora combinada é eficiente para a colheita de grandes áreas. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Colher manualmente.",
                afirmacao: "A colheita manual pode ser mais trabalhosa e menos eficiente. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Como você armazena os grãos após a colheita?",
        alternativas: [
            {
                texto: "Armazenar em silos bem ventilados.",
                afirmacao: "Armazenar em silos ventilados evita problemas com umidade e deterioração. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Armazenar em sacos ao ar livre.",
                afirmacao: "Armazenar ao ar livre pode expor os grãos a condições climáticas adversas. Pontuação moderada.",
                pontos: 0
            }            
        ]
    },
    {
        enunciado: "Qual é a sua abordagem para a limpeza pós-colheita?",
        alternativas: [
            {
                texto: "Limpar e desinfetar todos os equipamentos.",
                afirmacao: "A limpeza e desinfecção garantem a qualidade e a durabilidade dos equipamentos. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Limpar apenas os equipamentos mais sujos.",
                afirmacao: "Limpar apenas alguns equipamentos pode deixar resíduos e afetar a próxima colheita. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Como você gerencia o resíduo da colheita?",
        alternativas: [
            {
                texto: "Utiliza os resíduos como adubo ou compostagem.",
                afirmacao: "Utilizar resíduos como adubo é uma prática sustentável e melhora a saúde do solo. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Descarta os resíduos sem reaproveitamento.",
                afirmacao: "Descartar resíduos pode ser menos sustentável e perder oportunidades de reciclagem. Pontuação moderada.",
                pontos: 0
            }
        ]
    }], [ 
    // Irrigação
    {
        enunciado: "Qual método você utiliza para irrigar uma plantação?",
        alternativas: [
            {
                texto: "Irrigação por gotejamento.",
                afirmacao: "A irrigação por gotejamento é eficiente e reduz o desperdício de água. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Irrigação por aspersão.",
                afirmacao: "A irrigação por aspersão pode ser menos precisa em áreas específicas. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Como você ajusta a quantidade de água para diferentes culturas?",
        alternativas: [
            {
                texto: "Ajusta com base nas necessidades específicas de cada cultura.",
                afirmacao: "Ajustar a água conforme as necessidades é crucial para o crescimento saudável das culturas. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Aplica uma quantidade fixa de água para todas as culturas.",
                afirmacao: "Aplicar uma quantidade fixa pode não atender às necessidades específicas de cada cultura. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Como você lida com problemas de drenagem em áreas irrigadas?",
        alternativas: [
            {
                texto: "Instala sistemas de drenagem adequados.",
                afirmacao: "Sistemas de drenagem adequados evitam o acúmulo de água e problemas de raízes. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Ignora problemas de drenagem.",
                afirmacao: "Ignorar drenagem pode levar a problemas de alagamento e deterioração das plantas. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Qual é a sua abordagem para monitorar a eficiência da irrigação?",
        alternativas: [
            {
                texto: "Usa sensores e medidores de umidade do solo.",
                afirmacao: "Sensores e medidores ajudam a monitorar e ajustar a irrigação de maneira eficiente. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Verifica a eficiência com base na aparência das plantas.",
                afirmacao: "Verificar apenas a aparência pode ser menos preciso do que usar tecnologia adequada. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Qual é a sua estratégia para economizar água durante a irrigação?",
        alternativas: [
            {
                texto: "Adota práticas de irrigação de precisão e uso eficiente.",
                afirmacao: "Práticas de irrigação de precisão são eficazes para economizar água e melhorar a produtividade. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Irriga em horários aleatórios sem controle.",
                afirmacao: "Irrigar sem controle pode resultar em desperdício de água e ineficiência. Pontuação moderada.",
                pontos: 0
            }
        ]
    }], ]
    // Adubação
   enunciado : "Qual é o primeiro passo na plantação?"