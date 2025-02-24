import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
  } from '@/src/components/parts/card';

  export default function OrderPage() {
    return (
       <div>
           
            <Card>
              <CardHeader>
                <CardTitle>Order</CardTitle>
                <CardDescription>View all customers and their orders.</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
       </div>
    );
  }
  