import type { Metadata } from "next";
//import { signIn } from '@/lib/auth';
import { Button } from '@/src/components/parts/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/src/components/parts/card';

export const metadata: Metadata = {
  title: "Login",
  description: "Login Page",
};

export default function LoginPage(){
      // Enable static rendering
    //setRequestLocale(locale);

    return (
        <div className="min-h-screen flex justify-center items-start md:items-center p-8">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                  This demo uses GitHub for authentication.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <form className="w-full">
                  <Button className="w-full">Sign in with GitHub</Button>
                </form>
              </CardFooter>
            </Card>
        </div>
    );
}