import { useLoginForm } from './LoginForm.state';

export const LoginForm = () => {
  const { inputOnChange, onSubmit, wrongPass } = useLoginForm();

  return (
    <form className='p-10 border border-text-black rounded-xl mx-auto w-fit mt-20 shadow-xl' onSubmit={onSubmit}>
      <label className='flex flex-col gap-5'>
        Enter Password
        <input className='border border-text-black px-2 py-3 rounded text-center min-w-[260px]' type='password' onChange={inputOnChange} />
        {wrongPass && <span className='text-red-600'>Oops! Wrong Password!</span>}
      </label>
      <button className='w-full px-5 py-2 border border-text-black mt-5 rounded bg-sky-blue text-white font-bold hover:brightness-125' type='submit'>
        Enter
      </button>
    </form>
  );
};
