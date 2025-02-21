import { ContactForm } from "@/src/components/ContactForm";
//import {setRequestLocale} from 'next-intl/server';

//type Props = {
//    params: {locale: string};
//  };

  
export default function ContactPage(){
      // Enable static rendering
    //setRequestLocale(locale);

    return (
        <div>
            <ContactForm />
        </div>
    );
}