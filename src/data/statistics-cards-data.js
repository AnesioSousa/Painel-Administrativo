import {
  BanknotesIcon,
  ChartBarIcon,
  UserPlusIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Renda Obtida Hoje",
    value: "R$ 53k",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "de crescimento em relação a semana passada",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Novos Usuários Hoje",
    value: "2.300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "de crescimento em relação ao último mês",
    },
  },
  {
    color: "gray",
    icon: UserPlusIcon,
    title: "Novos Clientes",
    value: "3.462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "do que ontem",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Vendas",
    value: "R$ 103.430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "do que ontem",
    },
  },
];

export default statisticsCardsData;
