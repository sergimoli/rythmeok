import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import "./RegisterPage.scss"

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();

  // const user = {
  //     name: 'Abel',
  //     username: 'abelcabezaroman',
  //     email: 'contacto@abelcabezaroman.com',
  //     password: 'ABCedf123'
  // }

  const onSubmit = (formData) => {
    API.post("register", formData).then((res) => {
      console.log("Register user");
    });
  };

  return (
    <form className="b-form" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label className='b-form__label' htmlFor="name">Name</label>
      <input className='b-form__input'
        id="name"
        defaultValue="Torcuato"
        {...register("name", { required: true })}
      />

      {/*<input name="role" id="role" defaultValue="admin"*/}
      {/*       ref={register({ required: true })}/>*/}

      <label className='b-form__label' htmlFor="email">Email</label>
      <input className='b-form__input'
        id="email"
        defaultValue="testingmail@upgradehub.com"
        {...register("email", {
          required: true,
          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        })}
      />

      {/*<label htmlFor="username">Username</label>*/}
      {/*<input name="username" id="username" defaultValue="abelcabezaroman"*/}
      {/*       ref={register({ required: true, minLength: 4 })}/>*/}

      {/* include validation with required or other standard HTML validation rules */}
      <label className='b-form__label' htmlFor="password">Password</label>
      <input className='b-form__input'
        name="password"
        id="password"
        type="password"
        defaultValue="Abcedf123"
        {...register("password", {
          required: true,
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        })}
      />
      {/* errors will return when field validation fails  */}
      {/*{errors.exampleRequired && <span>This field is required</span>}*/}

      <input className='b-form__registerinput' type="submit" value="Register" />
    </form>
  );
}
