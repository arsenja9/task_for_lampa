import React from 'react';
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from "./schemaForAddForm";
import {CustomFormProps} from "./types";


const AddForm: React.FC = () => {
    const {handleSubmit, control, formState: {errors}} = useForm<CustomFormProps>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: CustomFormProps) => {
        console.log(data);
    };

    return (
        <form className='cart__form' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <Controller
                    name='name'
                    control={control}
                    defaultValue=''
                    render={({field}) => <input {...field} />}
                />
                {errors.name && <span>{errors.name.message}</span>}

            </div>
            <div>
                <label htmlFor="surname">Surname</label>
                <Controller
                    name='surname'
                    control={control}
                    defaultValue=''
                    render={({field}) => <input {...field} />}
                />
                {errors.surname && <span>{errors.surname.message}</span>}
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <Controller
                    name='address'
                    control={control}
                    defaultValue=''
                    render={({field}) => <input {...field} />}
                />
                {errors.address && <span>{errors.address.message}</span>}

            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <Controller
                    name='phone'
                    control={control}
                    defaultValue=''
                    render={({field}) => <input {...field} />}
                />
                {errors.phone && <span>{errors.phone.message}</span>}
            </div>

            <button type='submit' className="button pay-btn">
                <p className='cart__form-btn'>Оплатить сейчас</p>
            </button>
        </form>
    );
};

export default AddForm;