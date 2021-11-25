import React, { useEffect } from 'react';
import useFormData from 'hooks/useFormData';


const Registro = () => {

    const{ form, formData, updateFormData} = useFormData();
    const submitForm = (e) => {
      e.preventdefault();
    }

  return (
    <>
      <form className="flex flex-col" onSubmit={submitForm} onChange={updateFormData} ref={form}>
        <input className="bg-gray-100 rounded-full py-4 m-4"></input>
        <input className="bg-gray-100 rounded-full py-4 m-4"></input>
        <input className="bg-gray-100 rounded-full py-4 m-4"></input>
        <button className="bg-red-400 rounded-full p-3 m-4">hola</button>
      </form>
    </>
  );
};

export default Registro;