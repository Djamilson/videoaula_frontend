import React from 'react';
import { Switch } from 'react-router-dom';

import Courses from '../pages/Courses';
import AddDisciplines from '../pages/Courses/AddDisciplines';
import CourseDisciplines from '../pages/Courses/AddDisciplines/ListDisciplineCourse';
import EditCoursesImage from '../pages/Courses/EditImage';
import NewCourses from '../pages/Courses/NewCourse';
import Dashboard from '../pages/Dashboard';
import Disciplines from '../pages/Disciplines';
import NewDisciplines from '../pages/Disciplines/NewDiscipline';
import Home from '../pages/Home';
import Addresses from '../pages/MyAccount/Address';
import AddressForm from '../pages/MyAccount/Address/AddressForm';
import Avatar from '../pages/MyAccount/Avatar';
import Documents from '../pages/MyAccount/Documents';
import Orders from '../pages/MyAccount/Order';
import Passwords from '../pages/MyAccount/Password';
import Phones from '../pages/MyAccount/Phone';
import Profile from '../pages/MyAccount/Profile';
import OrderCourses from '../pages/Payment/OrderCourses';
import PaymentDashboard from '../pages/Payment/PaymentDashboard';
import InitPayment from '../pages/Payment/PaymentDashboard/InitPayment';
import DataForm from '../pages/Payment/PaymentDashboard/InitPayment/DataForm';
import MessagePayment from '../pages/Payment/PaymentDashboard/InitPayment/MessagePayment';
import SelectAddress from '../pages/Payment/SelectAddress';
import Study from '../pages/Study';
import Classes from '../pages/Study/Classes';
import ClassesForm from '../pages/Study/Classes/Form';
import DisciplineThemes from '../pages/Study/DisciplineThemes';
import ForgotPassword from '../pages/User/Login/ForgotPassword';
import ResetPassword from '../pages/User/Login/ResetPassword';
import SigIn from '../pages/User/Login/SignIn';
import SignUp from '../pages/User/SignUp';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} isPrivate />
    <Route path="/home" exact component={Home} />
    <Route path="/signin" exact component={SigIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot_password" component={ForgotPassword} />
    <Route path="/reset_password" component={ResetPassword} />
    <Route path="/dashboard" exact component={Dashboard} isPrivate />
    <Route path="/profile" exact component={Profile} isPrivate />
    <Route path="/documents" exact component={Documents} isPrivate />
    <Route path="/avatar" exact component={Avatar} isPrivate />
    <Route path="/study/:course_id" exact component={Study} isPrivate />
    <Route path="/disciplines" exact component={Disciplines} isPrivate />
    <Route path="/disciplines/new" exact component={NewDisciplines} isPrivate />
    <Route path="/addresses/new" exact component={AddressForm} isPrivate />
    <Route
      path="/addresses/edit/:addressId"
      exact
      component={AddressForm}
      isPrivate
    />
    <Route
      path="/payment/dashboard/init/payment/phone/address"
      exact
      component={DataForm}
      isPrivate
    />

    <Route
      exact
      path="/disciplines/:disciplineId/edit"
      component={NewDisciplines}
      isPrivate
    />
    <Route
      path="/add/discipline/course/:course_id"
      exact
      component={AddDisciplines}
      isPrivate
    />
    <Route
      path="/disciplines/themes/:courseDisciplineId"
      exact
      component={DisciplineThemes}
      isPrivate
    />
    <Route path="/classes/form" exact component={ClassesForm} isPrivate />
    <Route path="/classes" exact component={Classes} isPrivate />
    <Route path="/courses" exact component={Courses} isPrivate />
    <Route path="/courses/new" exact component={NewCourses} isPrivate />
    <Route
      exact
      path="/courses/:courseId/edit"
      component={NewCourses}
      isPrivate
    />
    <Route
      exact
      path="/courses/:courseId/edit/image"
      component={EditCoursesImage}
      isPrivate
    />
    <Route
      exact
      path="/courses/disciplines/:courseId"
      component={CourseDisciplines}
      isPrivate
    />
    <Route
      exact
      isPrivate
      path="/payments/dashboard/init-payment/finally/successes"
      component={MessagePayment}
    />
    <Route
      exact
      path="/payments/dashboard/init-payment/:courseId"
      component={InitPayment}
      isPrivate
    />
    <Route
      exact
      path="/payments/dashboards"
      component={PaymentDashboard}
      isPrivate
    />
    <Route
      path="/orders/courses/:order_id"
      exact
      component={OrderCourses}
      isPrivate
    />
    <Route path="/phones" exact component={Phones} isPrivate />
    <Route path="/addresses" exact component={Addresses} isPrivate />
    <Route path="/orders" exact component={Orders} isPrivate />
    <Route path="/passwords" exact component={Passwords} isPrivate />
    <Route path="/select_address" exact component={SelectAddress} isPrivate />
    <Route path="/address/new" exact component={AddressForm} isPrivate />
  </Switch>
);

export default Routes;
