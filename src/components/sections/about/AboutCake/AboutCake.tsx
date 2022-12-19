import Image from 'next/image';
import { BaseHeadline as Headline } from 'src/components/uis/BaseHeadline';
import { BaseParagraph as P } from 'src/components/uis/BaseParagraph';
import { BaseSection as Section } from 'src/components/uis/BaseSection';
import { NavArrow } from 'src/components/uis/NavArrow';
import { BaseAnchor as A } from 'src/components/uis/BaseAnchor';

export const AboutCake = () => {
  return (
    <Section outerClass='xl:pb-28' innerClass='md:flex md:gap-10 lg:gap-20 lg:items-center'>
      <>
        <div className='lg:w-1/2'>
          <Headline label='Unser Kuchen' />
          <P>
            <>
              Die Besonderheit des Cafés ist eine täglich wechselnde Auswahl selbstgebackener, veganer Kuchen von{' '}
              <A href='https://www.mansfieldpark.de/' target='_blank'>
                Mansfield Park
              </A>
              , eine Kuchenmanufaktur aus Berlin, die sich ausschließlich auf die Herstellung veganer Kuchen, sowie Hochzeits- und Geburtstagstorten spezialisiert hat.Frisch gebackene Croissants und hausgemachte Vollkornstullen bieten im BUDDE eine herzhafte Alternative zum süßen Kuchenprogramm.
            </>
          </P>
        </div>
        <Image className='max-w-md mx-auto my-10 object-cover rounded-md md:m-0 xl:min-h-[420px] lg:flex-grow md:max-w-[600px]' src='/images/Image_About-cake.webp' alt='' width={700} height={467} />
        <NavArrow label='Kuchen' />
      </>
    </Section>
  );
};
