import React from 'react';
import { FiInfo } from 'react-icons/fi';

import Layout from '../_layouts/auth';
import { CourseList, OpenDetails, OpenOnWeekends } from './styles';

interface ICourse {
  id: string;
  course_id: string;
  subtotal: string;
  order_id: string;
  price: string;
  quantity: number;
  created_at: string;
  updated_at: string;
  course: {
    id: string;
    name: string;
    price: string;
    stock: number;
    image: string;
    created_at: string;
    updated_at: string;
    image_url: string;
  };
}

export interface CourseStock {
  itemCourse: {
    stock: number;
    course: ICourse;
  };
}

const NotFound: React.FC = () => {
  return (
    <Layout>
      <CourseList>
        <OpenDetails>
          <OpenOnWeekends>
            <FiInfo size={32} color="#F003" />
            Atenção! <br />
            Você não tem acesso a essa página solicitada, se lascou!!!!.
          </OpenOnWeekends>
        </OpenDetails>
      </CourseList>
    </Layout>
  );
};

export default NotFound;
