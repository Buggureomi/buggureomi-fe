import GoBackHeader from "@/components/go-back-header/GoBackHeader";
import SettingsSheet from "@/components/settings-sheet/SettingsSheet";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <GoBackHeader />
      <SettingsSheet />
    </div>
  );
}
