import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
  } from '@/src/components/parts/card';

  export default function CustomersPage() {
    return (
       <div>
           
            <Card>
              <CardHeader>
                <CardTitle>Customers</CardTitle>
                <CardDescription>View all customers and their orders.</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
       </div>
    );
  }
  