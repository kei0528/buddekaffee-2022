import s from './AboutCoffee.module.scss';
import { BaseSection as Section } from 'src/components/uis/BaseSection';
import { BaseHeadline as Headline } from 'src/components/uis/BaseHeadline';
import { BaseParagraph as P } from 'src/components/uis/BaseParagraph';
import Image from 'next/image';
import { NavArrow } from 'src/components/uis/NavArrow';
import { BaseAnchor as A } from 'src/components/uis/BaseAnchor';

export const AboutCoffee = () => {
  return (
    <Section outerClass={s.about_coffee} innerClass='py-20 lg:py-32'>
      <>
        <Headline label='Über uns' />
        <div>
          <P className='mb-4'>Im BUDDE wird Kaffee nach den Prinzipien der Specialty-Coffee-Zubereitung angeboten. Unsere Kaffeebohnen werden in einer Mahlkönig 43s Ladenmühle gemahlen und in einer Kees van der Westen „Spirit“ Espressomaschine zubereitet.</P>
          <P>Die Bohnen, die für einen Espressobezug benötigt werden, werden vor dem Mahlen abgewogen, ebenso jeder Espressobezug, nachdem er als „Shot“ in der Tasse landet. Mahlgrad, TDS-Wert, Extraktionsverhältnis, Brühdruck und Brühtemperatur werden regelmäßig ermittelt. Das Wasser wird gefiltert bevor es die Espressomaschine durchläuft. Der Siebträger, das Sieb und die Brühgruppe werden vor jedem Espressobezug gereinigt. So wird eine Kontinuität im Bezug auf Stärke und Geschmack des Kaffees erreicht.</P>
        </div>
        <div className='md:mt-10 xl:flex xl:gap-20 xl:mt-20'>
          <Image className='w-full max-w-md mx-auto my-10 rounded-md block md:my-0 md:float-left md:h-fit md:mr-10 md:w-1/2 md:mb-10 xl:h-auto object-cover xl:w-auto xl:max-w-xl xl:m-0 xl:flex-grow' src='/images/Image_About-coffee.webp' alt='' width={700} height={875} />
          <div className='xl:w-1/2'>
            <P className='mb-4'>
              <>
                Bis August 2020 wurden unsere Kaffeebohnen ausschließlich von Berliner Kaffeeröstereien bezogen, die sich auf die Röstung von Specialty Coffee spezialisiert haben. Höchste Kaffeequalität und die Rückverfolgung der Produktionskette bis zur Farm, von der der Kaffee stammt, ist so gewährleistet. Es gibt keine Gütesiegel, die oft einen fairen Handel suggerieren, aber eigentlich großen Kaffeeunternehmen nur helfen, profitabel zu sein. Die von uns ausgewählten Röstereien stehen für direkten Kontakt zu den Farmern in der Welt, verbunden mit absoluter Transparenz
                der Handels- und Produktionskette.{' '}
                <A href='https://fjord-coffee.de/' target='_blank'>
                  Fjord
                </A>
                ,{' '}
                <A href='https://nano-kaffee.de/' target='_blank'>
                  Nano Kaffee
                </A>
                ,{' '}
                <A href='https://www.fiveelephant.com/' target='_blank'>
                  Five Elephant
                </A>
                ,
                <A href='https://vote-coffee.com/' target='_blank'>
                  Vote
                </A>
                ,{' '}
                <A href='https://bonanzacoffee.de/' target='_blank'>
                  Bonanza
                </A>{' '}
                sind Röstereien, die uns regelmäßig mit Kaffeebohnen belieferten. Seit 2021 rösten wir in Kooperation mit{' '}
                <A href='https://olor-coffee.com/' target='_blank'>
                  Olor Coffee Roastery
                </A>{' '}
                unseren eigenen Kaffee, der exklusiv im BUDDE KAFFEE erworben und verkostet werden kann. Unsere Erfahrung mit den besten Röstern der Stadt dient uns als Leitlinie in unserer eigenen Rösterei.
              </>
            </P>
            <P>Unsere eigenen Single Origins und Blends sind in 250g, 350g und 1000g Packungen bei uns erhältlich. Für Milchkaffee werden im BUDDE Milch oder kostenfreie Milchalternativen wie Hafer-, Soja-, und laktosefreie Milch zu einer seidigen Creme aufgeschäumt, die den Getränken eine natürliche Süße verleiht, so dass es nicht mehr nötig wird, den Kaffee mit Zucker zu süßen.</P>
          </div>
        </div>
        <NavArrow label='Kaffee' labelBgColor='#FCFAF6' />
      </>
    </Section>
  );
};
