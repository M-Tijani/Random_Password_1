export default function Input({ Title }: { Title: string }) {
  return (
    <>
      <input disabled className="Input" placeholder={Title} type="text" />
    </>
  );
}
