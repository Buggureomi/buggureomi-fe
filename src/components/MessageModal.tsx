import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MessageModalProps {
  message: string;
  sender: string;
  onClose: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({
  message,
  sender,
  onClose,
}) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-[425px] p-6'>
        <DialogHeader>
          <DialogTitle className='text-xl'>{sender}님의 메시지</DialogTitle>
        </DialogHeader>
        <DialogDescription className='mt-4'>{message}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default MessageModal;
