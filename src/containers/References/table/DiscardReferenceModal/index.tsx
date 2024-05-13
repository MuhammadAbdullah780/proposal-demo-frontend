"use client";
import { useTransition } from "react";
import { MdDelete } from "react-icons/md";

// Components
import Spinner from "@/components/common/Spinner";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";

// Actions
import { deleteReference } from "@/actions/referenceHistory";

// Hooks
import { useModalState } from "@/hooks/useModalState";

// Types
type Props = {
  id: string;
};

const DiscardReferenceModal = ({ id }: Props) => {
  // Hooks
  const [isPending, startTransition] = useTransition();
  const { currentValue, handleChange } = useModalState();

  // Functions
  const handleDelete = () => {
    startTransition(async () => {
      await deleteReference(id);
      handleChange(false);
    });
  };

  return (
    <>
      <Button
        onClick={() => handleChange(true)}
        variant="destructive"
        size="icon">
        <MdDelete />
      </Button>
      <Dialog open={currentValue} onOpenChange={handleChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmation Modal</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this record?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="justify-end">
            <Button
              onClick={() => handleChange(false)}
              type="button"
              variant="secondary">
              Close
            </Button>
            <Button
              onClick={() => handleDelete()}
              type="button"
              variant="destructive">
              {isPending ? (
                <Spinner spinnerColor="white" size={"extra_small"} />
              ) : (
                "Delete"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DiscardReferenceModal;
