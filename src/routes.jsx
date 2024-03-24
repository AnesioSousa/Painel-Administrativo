import { SignIn, SignUp } from "@/pages/auth";
import { Home, Notifications, Profile, Tables } from "@/pages/dashboard";
import {
  HomeIcon,
  InformationCircleIcon,
  RectangleStackIcon,
  ServerStackIcon,
  TableCellsIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "painel administrativo",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "perfil",
        path: "/perfil",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tabelas",
        path: "/tabelas",
        element: <Tables />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notificações",
        path: "/notificacoes",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "Veja as páginas de autenticação de usuário:",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "Login",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "Cadastre-se",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
