import { Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import Accordion from '../../components/accordion/Accordion';
import Header from '../../components/header/Header';
import ProductDetails from './components/ProductDetails';

const validationSchema = yup.object().shape({
  products: yup.object().shape({
    productCode: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    productName: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  })
});
const CatalogCreate = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header title={"Catalog Create"} />
      <Formik
        initialValues={{
          products: {
            productCode: '',
            productName: ''
          }
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ values }) => {
          console.log(values)
          return (
            <Form>
              <Accordion label='Product Information' isDefaultOpen={true}>
                <ProductDetails />
              </Accordion>
              <Accordion label='SKUs Information'>
                <ProductDetails />
              </Accordion>
            </Form>
          );
        }}
      </Formik>
    </React.Fragment>

  )
}

export default CatalogCreate