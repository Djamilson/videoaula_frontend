enum UserRoles {
  roleSuperAdmin = 'role-super-admin',
  roleAdmin = 'role-admin',
  roleUser = 'role-user',
  roleStudent = 'role-student',
  roleTeacher = 'role-teacher',
}

export const userRoles = {
  roleAdmins: [String(UserRoles.roleSuperAdmin), String(UserRoles.roleAdmin)],
  roleUsers: [String(UserRoles.roleUser)],
  roleStudent: [String(UserRoles.roleStudent)],
  roleTeacher: [String(UserRoles.roleTeacher)],
  all: [
    String(UserRoles.roleSuperAdmin),
    String(UserRoles.roleAdmin),
    String(UserRoles.roleUser),
    String(UserRoles.roleStudent),
    String(UserRoles.roleTeacher),
  ],
};
