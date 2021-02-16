enum UserRoles {
  roleSuperAdmin = 'bf256cfa-8b0d-4844-919f-70084869dd1f',
  roleAdmin = 'c2d083e9-3194-4251-b813-54fa7ae71a53',
  roleUser = '4545205c-c402-4260-a39f-e2a87026cbcf',
  roleStudent = '358f559a-8b66-49c5-94e8-2fafc9516d83',
  roleTeacher = 'cf283538-3231-4aaf-8e3b-d3127d86dd58',
}

const userRoles = {
  roleAdmins: [String(UserRoles.roleSuperAdmin), String(UserRoles.roleAdmin)],
  roleUsers: [String(UserRoles.roleUser)],
  roleStudent: [String(UserRoles.roleStudent)],
  roleTeacher: [String(UserRoles.roleTeacher)],
  roleAdminsRoleTeacher: [
    String(UserRoles.roleSuperAdmin),
    String(UserRoles.roleAdmin),
    String(UserRoles.roleTeacher),
  ],

  roleAdminRoleStudent: [
    String(UserRoles.roleSuperAdmin),
    String(UserRoles.roleAdmin),
    String(UserRoles.roleStudent),
  ],
  all: [
    String(UserRoles.roleSuperAdmin),
    String(UserRoles.roleAdmin),
    String(UserRoles.roleUser),
    String(UserRoles.roleStudent),
    String(UserRoles.roleTeacher),
  ],
};

export default userRoles;
