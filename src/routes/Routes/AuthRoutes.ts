interface IPros {
  dashboard: string;
  home: string;
  forgotPassword: string;
  signup: string;
  signin: string;
  resetPassword: string;
  error: string;

  profile: string;
  documents: string;
  avatar: string;
  studyCourse_id: string;
  disciplines: string;
  disciplinesNew: string;
  addressesNew: string;

  addressesEditAddressId: string;
  paymentDashboardInitPaymentPhoneAddress: string;

  disciplinesDisciplineIdEdit: string;
  addDisciplineCourseCourseId: string;
  disciplinesThemesCourseDisciplineId: string;
  classesForm: string;
  classes: string;
  courses: string;
  coursesNew: string;
  coursesCourseIdEdit: string;
  coursesCourseIdEditImage: string;
  coursesDisciplinesCourseId: string;
  paymentsDashboardInitPaymentFinallySuccesses: string;
  paymentsDashboardInitPaymentCourseId: string;
  paymentsDashboards: string;
  ordersCoursesOrder_id: string;

  phones: string;
  addresses: string;
  orders: string;
  passwords: string;
  selectAddress: string;
}

export const authRoutes = <IPros>{
  dashboard: '/dashboard',
  home: '/home',
  forgotPassword: '/forgot_password',
  resetPassword: '/reset_password',
  signup: '/signup',
  signin: '/signin',
  error: '/error',

  profile: '/profile',
  documents: 'documents',
  avatar: '/avatar',
  studyCourse_id: '/study/:course_id',
  disciplines: '/disciplines',
  disciplinesNew: '/disciplines/new',
  addressesNew: '/addresses/new',

  addressesEditAddressId: '/addresses/edit/:addressId',
  paymentDashboardInitPaymentPhoneAddress:
    '/payment/dashboard/init/payment/phone/address',

  disciplinesDisciplineIdEdit: '/disciplines/:disciplineId/edit',
  addDisciplineCourseCourseId: '/add/discipline/course/:course_id',
  disciplinesThemesCourseDisciplineId:
    '/disciplines/themes/:courseDisciplineId',
  classesForm: '/classes/form',
  classes: '/classes',
  courses: '/courses',
  coursesNew: '/courses/new',
  coursesCourseIdEdit: '/courses/:courseId/edit',
  coursesCourseIdEditImage: '/courses/:courseId/edit/image',
  coursesDisciplinesCourseId: '/courses/disciplines/:courseId',
  paymentsDashboardInitPaymentFinallySuccesses:
    '/payments/dashboard/init-payment/finally/successes',
  paymentsDashboardInitPaymentCourseId:
    '/payments/dashboard/init-payment/:courseId',
  paymentsDashboards: '/payments/dashboards',
  ordersCoursesOrder_id: '/orders/courses/:order_id',

  phones: '/phones',
  addresses: '/addresses',
  orders: '/orders',
  passwords: '/passwords',
  selectAddress: '/select_address',
};
