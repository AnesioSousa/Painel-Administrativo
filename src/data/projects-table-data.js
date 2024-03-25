import { faker } from '@faker-js/faker';

export const projectsTableData = [
  {
    img: "/img/logo-xd.svg",
    name: "Modificar a versão do Material XD",
    members: [
      { img: "/img/team-1.jpeg", name: "Romina Hadid" },
      { img: "/img/team-2.jpeg", name: "Ryan Tompson" },
      { img: "/img/team-3.jpeg", name: "Jessica Doe" },
      { img: "/img/team-4.jpeg", name: "Alexander Smith" },
    ],
    budget: "R$ 14.000",
    completion: 75,
  },
  {
    img: "/img/logo-atlassian.svg",
    name: "Adicionar Barra de Progresso",
    members: [
      { img: "/img/team-2.jpeg", name: "Ryan Tompson" },
      { img: "/img/team-4.jpeg", name: "Alexander Smith" },
    ],
    budget: "R$ 3.000",
    completion: 10,
  },
  {
    img: "/img/logo-slack.svg",
    name: "Consertar os Erros da Plataforma",
    members: [
      { img: "/img/team-3.jpeg", name: "Jessica Doe" },
      { img: "/img/team-1.jpeg", name: "Romina Hadid" },
    ],
    budget: "Não se aplica",
    completion: 100,
  },
  {
    img: "/img/logo-spotify.svg",
    name: "Disponibilizar a versão Mobile do App",
    members: [
      { img: "/img/team-4.jpeg", name: "Alexander Smith" },
      { img: "/img/team-3.jpeg", name: "Jessica Doe" },
      { img: "/img/team-2.jpeg", name: "Ryan Tompson" },
      { img: "/img/team-1.jpeg", name: "Romina Hadid" },
    ],
    budget: "R$ 20.500",
    completion: 100,
  },
  {
    img: "/img/logo-jira.svg",
    name: "Adicionar Nova Página de Orçamento",
    members: [{ img: "/img/team-4.jpeg", name: "Alexander Smith" }],
    budget: "R$ 500",
    completion: 25,
  },
  {
    img: "/img/logo-invision.svg",
    name: "Reprojetar a nova lojinha virtual",
    members: [
      { img: "/img/team-1.jpeg", name: "Romina Hadid" },
      { img: "/img/team-4.jpeg", name: "Alexander Smith" },
    ],
    budget: "$2,000",
    completion: 40,
  },
];

export default projectsTableData;
