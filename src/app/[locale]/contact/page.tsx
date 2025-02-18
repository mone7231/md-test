import { ContactForm } from "@/src/components/ContactForm";
import { IndexNavBar } from "@/src/components/IndexNavBar";
//import {setRequestLocale} from 'next-intl/server';

//type Props = {
//    params: {locale: string};
//  };

  
export default function ContactPage(){
      // Enable static rendering
    //setRequestLocale(locale);

    return (
        <div>
            <IndexNavBar/>
            <ContactForm />
        </div>
    );
}