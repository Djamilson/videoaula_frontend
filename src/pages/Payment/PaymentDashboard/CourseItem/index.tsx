import React, { useCallback, useEffect, useState } from 'react';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';

import api from '../../../../_services/api';
import { useAuth } from '../../../../hooks/auth';
import { CourseStock } from '../../../../hooks/cartCourse';
import { authRoutes } from '../../../../routes/Routes/AuthRoutes';
import IPerson from '../../../../types/person';
import { Container } from './styles';

export interface Course {
  id: string;
  name: string;
  price: number;
  priceFormatted: number;
  image: string;
  image_url: string;
}

export interface CourseItemProps {
  course: Course;
}

const CourseItem: React.FC<CourseStock> = (itemCourse: CourseStock) => {
  const history = useHistory();

  const { user } = useAuth();
  const addressId = user?.person?.address_id_main;
  const phoneId = user?.person?.phone_id_man;
  const personId = user?.person?.id;

  const [person, setPerson] = useState<IPerson>({} as IPerson);

  const loadPerson = useCallback(async () => {
    const { data } = await api.get(`persons/${personId}`);
    //fee: formatPrice(Number(data.fee)),
    // const meCourse = {}
    setPerson(data);
  }, [personId]);

  useEffect(() => {
    loadPerson();
  }, [loadPerson]);

  const handleNav = useCallback(
    (course_id: string) => {
      if (person.cpf === null || phoneId === null || addressId === null) {
        history.push(authRoutes.paymentDashboardInitPaymentPhoneAddress);
      } else {
        history.push(`/payments/dashboard/init-payment/${course_id}`);
      }
    },
    [history, phoneId, addressId, person],
  );

  return (
    <Container>
      <img
        src={itemCourse.itemCourse.course.image_url}
        alt={itemCourse.itemCourse.course.name}
      />
      <div>
        <section>
          <strong>Preparatório</strong>
          <span>{itemCourse.itemCourse.course.name}</span>
          <h2>{itemCourse.itemCourse.course.priceFormatted}</h2>
        </section>
        <button
          type="button"
          onClick={() => handleNav(itemCourse.itemCourse.course.id)}
        >
          <span>
            <RiMoneyDollarBoxLine />
          </span>
          <strong>Comprar</strong>
        </button>
      </div>
    </Container>
  );
};

export default CourseItem;
