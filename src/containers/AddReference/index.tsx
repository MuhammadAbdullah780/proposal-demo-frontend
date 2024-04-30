import WithPageCenterized from "@/components/withPageCenterized";
import AddRefernceForm from "./Form";

type Props = {};

const AddReference = (props: Props) => {
  return (
    <WithPageCenterized
      component={
        <section className="flex flex-col items-start gap-4 justify-center rounded-xl border w-96 p-8">
          <h1 className="text-lg font-medium">Add Reference Form</h1>
          <AddRefernceForm />
        </section>
      }
    />
  );
};

export default AddReference;
