import React, { useEffect } from 'react';
import useFormData from 'hooks/useFormData';


const Registro = () => {

    const{ form, formData, updateFormData} = useFormData();

    const submitForm = (e) => {
      e.preventdefault();
    }

  return (
    <>
    <form onSubmit={submitForm} onChange={updateFormData} ref={form}>

      <button className="bg-red-400 p-3">hola</button>
    </form>
    </>
  );
};

export default Registro;