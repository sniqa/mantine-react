import MantineCustomReactTable, {
  type MRT_ColumnDef,
} from "@comps/table/MantineCustomReactTable";
import CustomModal from "@comps/CustomModal";

const columns: MRT_ColumnDef[] = [
  { accessorKey: "firstname", header: "firstname" },
  { accessorKey: "lastname", header: "lastname" },
  { accessorKey: "age", header: "age" },
  { accessorKey: "job", header: "job" },
  { accessorKey: "city", header: "city" },
];

const data = Array.from({ length: 100 }, (_, index) => ({
  firstname: "hello " + index,
  lastname: "world " + index,
  age: 18 + index,
  job: "engener " + index,
  city: "New York " + index,
}));

const d = () => {};

export default () => {
  return (
    <>
      <MantineCustomReactTable
        columns={columns}
        data={data}
        onCreate={d}
        onDeleteSelection={d}
        uploadState={{
          onUploadStart: (files) => console.log(files),
        }}
        onEdit={d}
        onDelete={d}
        rowCustomActionsSize={80}
        rowCustomSelectSize={50}
      />

      <CustomModal
        opened={true}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <>fss</>
      </CustomModal>
    </>
  );
};
