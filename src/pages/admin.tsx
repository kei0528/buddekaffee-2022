import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
// import { ManageMenu } from 'src/components/sections/admin/ManageMenu';
import { ManageNews } from 'src/components/sections/admin/ManageNews';
import { BaseHeadline as Headline } from 'src/components/uis/BaseHeadline';
import { BaseSection as Section } from 'src/components/uis/BaseSection';
import { isLoggedInAtom } from 'src/store/auth.state';

const Admin = () => {
  const router = useRouter();
  const [isLoggedIn] = useAtom(isLoggedInAtom);
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  if (isLoggedIn) {
    return (
      <Section>
        <>
          <Headline label='Admin Dashboard' Element='h1' />
          <div className='grid gap-8 md:grid-cols-2'>
            <ManageNews />
            {/* <ManageMenu /> */}
            {/* <ManageOpeningHours /> */}
          </div>
        </>
      </Section>
    );
  } else {
    <></>;
  }
};

export default Admin;
