// Components
import PageHeading from "@/components/common/PageHeading";

// Containers
import AddRefernceForm from "./Form";

const AddReference: React.FC = () => {
  return (
    <div className="w-full min-h-full flex justify-center py-20 bg-white">
      <div className="flex flex-col gap-5 p-5 w-full max-w-5xl">
        <PageHeading
          text="Add Reference"
          description="Form to create a new Reference so that this reference can be used as context to AI model."
        />
        <section>
          <AddRefernceForm />
        </section>
      </div>
    </div>
  );
};

export default AddReference;
