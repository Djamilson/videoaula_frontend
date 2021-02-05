import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { NavigationLink, Navigation, MenuLI } from './styles';

interface IProps {
  handleToggleMenu(): void;
  typeUser: boolean;
}

interface IMenu {
  label: string;
  path: string;
  selected: boolean;
  typerUser: boolean;
}

const MeNavigation: React.FC<IProps> = ({ handleToggleMenu, typeUser }) => {
  const location = useLocation();

  const [serealizableList, setSerealizableList] = useState<IMenu[]>(() => {
    return [] as IMenu[];
  });

  //para aparece para os alunos fica typerUser: false,
  const m = useMemo(() => {
    const INITIAL_STATE = [
      {
        label: 'DashBoard',
        path: '/',
        selected: true,
        typerUser: true,
      },
      {
        label: 'Cursos',
        path: '/courses',
        selected: true,
        typerUser: !typeUser,
      },
      {
        label: 'Disciplinas',
        path: '/disciplines',
        selected: false,
        typerUser: !typeUser,
      },
      {
        label: 'Aulas',
        path: '/classes/form',
        selected: false,
        typerUser: !typeUser,
      },
      {
        label: 'Compras',
        path: '/payments/dashboards',
        selected: false,
        typerUser: typeUser,
      },
    ];
    return INITIAL_STATE.filter((item: IMenu) => item.typerUser);
  }, [typeUser]);

  const load = useCallback(() => {
    function handlerIsActive(link: string) {
      if (location.pathname.localeCompare('/dashboard') === 0) {
        return !location.pathname.indexOf(link);
      }

      if (location.pathname.length < 2 && link.length < 2) {
        return !location.pathname.indexOf(link);
      }

      if (location.pathname.length > 1 && link.length > 1) {
        return !location.pathname.indexOf(link);
      }

      return Boolean(false);
    }

    setSerealizableList(
      m.map((menu: IMenu) => {
        return { ...menu, selected: handlerIsActive(menu.path) };
      }),
    );
  }, [m, location]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <Navigation>
      {serealizableList.map((menu: IMenu) => {
        return (
          <MenuLI key={menu.path}>
            <NavigationLink
              to={menu.path}
              aria-label={menu.label}
              onClick={handleToggleMenu}
              selected={menu.selected}
            >
              {menu.label}
            </NavigationLink>
          </MenuLI>
        );
      })}
    </Navigation>
  );
};

export default MeNavigation;
