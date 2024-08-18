import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { JSX, SVGProps } from "react"

// Define the type for a single payment
type Payment = {
  date: string;
  transaction_id: string;
  user_id: string;
  chef_name: string;
  email: string;
  sub_total: string;
  tip: string;
  total: string;
  bank_name: string;
  account_name: string;
  account_number: string;
}

// Define the props for the Chef component
type ChefProps = {
  payments: Payment[];
}

export function Chef({ payments }: ChefProps) {
  // Calculate totals
  const totalEarnings = payments.reduce((sum, payment) => sum + parseFloat(payment.total.replace('$', '')), 0);
  const pendingPayouts = totalEarnings * 0.2; // Assuming 20% pending
  const approvedPayouts = totalEarnings * 0.8; // Assuming 80% approved

  return (
    <div className="flex min-h-screen flex-col bg-muted/40 p-10">
      <main className="flex-1 overflow-auto p-4 sm:p-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Total Earnings</CardTitle>
              <CardDescription>View your total earnings from chef bookings.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold">${totalEarnings.toFixed(2)}</div>
                <DollarSignIcon className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pending Payouts</CardTitle>
              <CardDescription>View your pending payouts that are awaiting approval.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold">${pendingPayouts.toFixed(2)}</div>
                <DollarSignIcon className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Approved Payouts</CardTitle>
              <CardDescription>View your approved payouts that are ready to be transferred.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold">${approvedPayouts.toFixed(2)}</div>
                <DollarSignIcon className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>
        <br />
        <Card>
          <CardHeader className="px-7">
            <CardTitle>Chef Earnings</CardTitle>
            <CardDescription>View and manage your chef earnings and payouts.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>User ID</TableHead>
                  <TableHead>Chef Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Sub Total</TableHead>
                  <TableHead>Tip</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Bank Name</TableHead>
                  <TableHead>Account Name</TableHead>
                  <TableHead>Account Number</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment, index) => (
                  <TableRow key={index}>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>{payment.transaction_id}</TableCell>
                    <TableCell>{payment.user_id}</TableCell>
                    <TableCell>{payment.chef_name}</TableCell>
                    <TableCell>{payment.email}</TableCell>
                    <TableCell>{payment.sub_total}</TableCell>
                    <TableCell>{payment.tip}</TableCell>
                    <TableCell>{payment.total}</TableCell>
                    <TableCell>{payment.bank_name}</TableCell>
                    <TableCell>{payment.account_name}</TableCell>
                    <TableCell>{payment.account_number}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

const DollarSignIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}