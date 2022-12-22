import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { login } from 'src/services/authService';
import { isLoggedInAtom } from 'src/store/auth.state';

export const useLoginForm = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [wrongPass, setWrongPass] = useState(false);
  const [password, setPassword] = useState('');

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginResult = await login(password);
    if (loginResult.result === 'SUCCESS') {
      setIsLoggedIn(true);
      setWrongPass(false);
    } else {
      setWrongPass(true);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/admin');
    }
  }, [isLoggedIn, router]);

  return { inputOnChange, onSubmit, wrongPass };
};
