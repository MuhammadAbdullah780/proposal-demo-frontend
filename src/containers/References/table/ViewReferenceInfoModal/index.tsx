// Components
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";

// Types
type Props = {
  text: string;
};

const ViewReferenceInfoModal: React.FC<Props> = ({ text }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="text">View</Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-3xl">
        <DialogHeader>
          <DialogTitle>Reference Info Text</DialogTitle>
          <DialogDescription>
            This is Reference Info for the person you selected
          </DialogDescription>
        </DialogHeader>
        <div
          className="w-full h-[400px] bg-secondary p-5 overflow-x-hidden overflow-y-auto rounded-md flex flex-col gap-3"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <DialogFooter>
          <DialogClose>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewReferenceInfoModal;
