import { useAuth } from '../../hooks/auth';

interface IRoleUser {
  name: string;
}

interface IrequiredRoles {
  role: string;
}

interface IProps {
  rolesUser: IRoleUser[];
  requiredRoles: IrequiredRoles[];
}

export const checkAuth = ({ rolesUser, requiredRoles }: IProps): boolean => {
  let hasRequiredRole = false;

  requiredRoles.forEach((item) => {
    rolesUser.forEach((roleUser) => {
      if (item.role === roleUser.name) {
        hasRequiredRole = true;
      }
    });
  });

  return hasRequiredRole;
};
