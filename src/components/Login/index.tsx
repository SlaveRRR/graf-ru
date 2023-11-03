
import React,{FC, useContext, useState} from 'react'
import { BackLink, SocialAuthLinks } from '../shared'

import {useForm,SubmitHandler} from 'react-hook-form'
import cn from 'classnames';
import { ctx } from '../../context/contextProvider';
import { Logo } from '../UI';
import {Link,useNavigate} from 'react-router-dom'


import styles from './index.module.scss';

type FormData = {
    username:string;
    password:string;
}

const Login : FC = () => {
    const [visible,setVisible] = useState(false);
    const navigate = useNavigate();
    const {loader:[isActive,setActive]} = useContext(ctx);

    const {handleSubmit,reset,register,formState:{errors,dirtyFields}} = useForm<FormData>({
        mode:"onChange"
    });

    const handler: SubmitHandler<FormData> = async (data) => {
        // имитация api
        const delay = (ms:number) : Promise<void> => new Promise((res,rej) => setTimeout(() => res(),ms))
        setActive(true)
        await delay(3000)
        
        setActive(false)
        console.log(data)
      
        
       alert('Вы вошли')
        return navigate(`/`);
    }
  return (
    <section className={styles['login']}>
    <div className={cn(styles["login__container"], "container")}>
        <BackLink mixClass={[styles['login__backLink']]} />
        <Logo mixClass={[styles['login__logo']]} />


        <h2 className={styles['login__head']}>Вход</h2>
        <p className={styles['login__with-social']}>через соцсети</p>
        <SocialAuthLinks mixClass={[styles['login__social']]} />
        <p className={styles['login__or']}>или</p>

        <form onSubmit={handleSubmit(handler)}>
            <fieldset className={styles['login__fieldset']}>
                <legend className='visuallyhidden'>Пользовательские данные</legend>
                <label className={styles['login__label']} htmlFor="username">Никнейм или почта</label>
                <input {...register('username', {
                    required: true,
                    minLength: {
                        value: 7,
                        message: "Минимальная длина 7 символов"
                    }
                })} className={cn(styles['login__input'], {
                    [styles['login__input--error']]: errors?.username,
                    [styles['login__input--success']]: dirtyFields?.username && !errors?.username,
                })} type="text" placeholder='Введите никнейм или e-mail' />
                 <label className={styles['login__label']} htmlFor="pass">Пароль</label>
                                {Boolean(errors?.password) && <p className={styles['login__error']}>{errors?.password?.message}</p>}
                                <div className={styles["login__password-container"]}>
                                <input {...register('password', {
                                    required: 'Обязательное поле!',
                                    minLength: {
                                        value: 6,
                                        message: 'Минимум 6 символов!'
                                    },
                                    maxLength: {
                                        value: 12,
                                        message: 'Максимум 12 символов!'
                                    }
                                })} className={cn(styles['login__input'], {

                                    [styles['login__input--error']]: errors?.password,
                                    [styles['login__input--success']]: dirtyFields?.password && !errors?.password,

                                })} type={visible ? "text" : "password"} placeholder='Придумайте пароль' />
                                <button type='button' onPointerDown={() => setVisible(!visible)} className={styles['login__visibility']}>
                                    {
                                        !visible ?
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>
                                    }
                                    </button>
                                </div>
             
            </fieldset>
            <input className={styles['login__signin-btn']} type="submit" value="Войти" />
        </form>
        <p className={styles['login__signin']}>Еще нет аккаунта? <Link className={styles['login__link']} to={'/'}>Зарегистриуйтесь</Link></p>
    </div>
</section>
  )
}

export default Login