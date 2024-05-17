import DataTable from "@/components/common/DataTable";
import DemoReactTable from "../data-table-demo";
import { columns } from "../data-table-demo/columns";

const MainPage = () => {
  return (
    <div className="bg-white p-10">
      <DataTable
        columns={columns}
        data={[
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
        ]}
      />
    </div>
  );
};

export default MainPage;
