import React, { useCallback, useEffect, useState } from 'react';
import { FiInfo } from 'react-icons/fi';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Layout from '../_layouts/auth';
import {
  CourseList,
  OpenDetails,
  OpenOnWeekends,
  OpenButton,
  LinkGiveClasses,
} from './styles';

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
            Você! <br />
            Estou no erro, me lasquei.
          </OpenOnWeekends>
        </OpenDetails>
      </CourseList>
    </Layout>
  );
};

export default NotFound;
