import WithPageCenterized from "@/components/withPageCenterized";
import AddRefernceForm from "./Form";
import PageHeading from "@/components/common/PageHeading";

type Props = {};

const AddReference = (props: Props) => {
  return (
    //  <WithPageCenterized
    //    component={
    //      <section className="flex flex-col items-start gap-4 justify-center rounded-xl border w-[800px] p-8">
    //        <h1 className="text-lg font-medium">Add Reference Form</h1>
    //        <AddRefernceForm />
    //      </section>
    //    }
    //  />

    <div className="w-full h-full flex justify-center py-20 bg-white">
      <div className="flex flex-col gap-5 p-5">
        <PageHeading
          text="Add Reference"
          description="Form to create a new Reference so that this reference can be used as context to AI model."
        />
        <section className="">
          <AddRefernceForm />
        </section>
      </div>
    </div>
  );
};

export default AddReference;
