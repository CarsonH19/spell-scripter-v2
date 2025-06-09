import { Button } from "@/components/ui/button";

export default function School({ text, active, onChangeSchool }) {
  const variant = active ? "primary" : "secondary"
  return (
    <Button
      size="lg"
      variant={variant}
      className="w-full h-[3rem] mb-2 transition-transform duration-300 hover:scale-95"
      onClick={onChangeSchool}
    >
      {text}
    </Button>
  );
}
