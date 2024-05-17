import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "n@example.com",
    },
    {
      id: "728ed52f",
      amount: 190,
      status: "pending",
      email: "m@example.com",
    },
  ];
}

export default async function DemoReactTable() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
