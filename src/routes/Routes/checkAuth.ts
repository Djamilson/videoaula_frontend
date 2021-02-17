interface IProps {
  rolesUser: string[];
  requiredRoles: string[] | undefined;
}

export const checkAuth = ({ rolesUser, requiredRoles }: IProps): boolean => {
  let hasRequiredRole = false;
  console.log('===>>>', rolesUser, requiredRoles);

  requiredRoles?.forEach((role) => {
    const x = rolesUser?.some((item) => item === role);
    if (x) {
      hasRequiredRole = true;
    }
  });

  return hasRequiredRole;
};