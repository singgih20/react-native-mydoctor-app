import {useState} from 'react';

export const useForm = initialValue => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (formType, params) => {
      return setValues({...values, [formType]: params});
    },
  ];
};
