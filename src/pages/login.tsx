import Head from 'next/head';
import { useState } from 'react';
import { LoginForm } from 'src/components/sections/login/LoginForm';

const Login = () => {
  return (
    <>
      <Head>
        <title>Budde Kaffee | Login</title>
      </Head>
      <LoginForm />
    </>
  );
};

export default Login;
