import React from 'react'
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';

const ItemDetailWrapper = () => {
    const { category, itemId } = useParams();
    return <ItemDetail category={category} itemId={itemId} />;
  };

export default ItemDetailWrapper