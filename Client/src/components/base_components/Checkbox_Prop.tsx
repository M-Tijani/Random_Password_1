import { Checkbox } from "@/components/ui/checkbox";

interface CheckboxProps {
  Title: string;
  Handler: Function;
  State: boolean;
}
export default function Checkbox_Prop({
  Title,
  Handler,
  State,
}: CheckboxProps) {
  return (
    <>
      <section className="flex gap-2 items-center justify-start">
        <Checkbox
          onClick={() => Handler()}
          defaultChecked={State ? true : false}
        />
        <span>{Title}</span>
      </section>
    </>
  );
}
