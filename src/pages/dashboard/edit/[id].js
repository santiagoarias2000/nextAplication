import FormProduct from '@components/FormProduct';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '@services/api';
import Alert from '@common/Alert';
import useAlert from '@hooks/useAlert';

export default function Edit() {
  const [product, setProduct] = useState({});
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { alert, setAlert, toggleAlert } = useAlert();

  //?
  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;
    async function getProduct() {
      const response = await axios.get(endPoints.products.oneProduct(id));
      setProduct(response.data);
    }
    getProduct();
    //console.log(id);
  }, [router?.isReady]);
  //?
  return (
    <>
      <Alert alert={alert} handleClose={toggleAlert} />
      <FormProduct setOpen={setOpen} setAlert={setAlert} product={product} />
    </>
  );
}
