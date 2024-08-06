import { Uploader as UploaderModule } from "uploader";
import { UploadButton } from "react-uploader";

const uploader = UploaderModule({
  apiKey: "free",
});
type Props = {
  onCompleted: (fileUrl: string) => void;
  onFaild: () => void;
  children: React.ReactNode;
};
const Uploader = ({ onCompleted, onFaild, children }: Props) => {
  return (
    <UploadButton
      uploader={uploader}
      onComplete={(file: any) => {
        if (file.length === 0) {
          onFaild();
        } else {
          onCompleted(file[0].fileUrl);
        }
      }}
    >
      {({ onClick }) => <div onClick={onClick}>{children}</div>}
    </UploadButton>
  );
};
export default Uploader;
