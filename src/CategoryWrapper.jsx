import React from 'react'
import { useParams } from 'react-router';
import Category from './Category';

const CategoryWrapper = () => {
    const { category } = useParams();
    return <Category category={category} />;
  };
  

export default CategoryWrapper