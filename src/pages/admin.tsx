import { ManageNews } from 'src/components/sections/admin/ManageNews';
import { ManageOpeningHours } from 'src/components/sections/admin/ManageOpeningHours';
import { BaseHeadline as Headline } from 'src/components/uis/BaseHeadline';
import { BaseSection as Section } from 'src/components/uis/BaseSection';

const Admin = () => {
  return (
    <Section>
      <>
        <Headline label='Admin Dashboard' Element='h1' />
        <div className='grid gap-8 md:grid-cols-2'>
          <ManageNews />
          {/* <ManageOpeningHours /> */}
        </div>
      </>
    </Section>
  );
};

export default Admin;
