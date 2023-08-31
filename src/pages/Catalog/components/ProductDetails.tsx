import InputField from '../../../components/fields/InputField';
import FormContainer from '../../../components/form/FormContainer';
import FormSection from '../../../components/form/FormSection';

const ProductDetails = (): JSX.Element => {
    const fieldname = (name: string): string => "products." + name;
    return (
        <FormContainer>
            <FormSection>
                <InputField name={fieldname('productCode')} label='Product Code' required={true} />
            </FormSection>
            <FormSection>
                <InputField name={fieldname('productName')} label='Product Name' required={true} />
            </FormSection>
            <FormSection>
                <InputField name={fieldname('productCode')} label='Product Category' />
            </FormSection>
            <FormSection>
                <InputField name={fieldname('productCode')} label='Product Code' />
            </FormSection>
        </FormContainer>
    )
}

export default ProductDetails