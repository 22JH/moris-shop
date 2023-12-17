import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/app/components/write/Editor"), {
  ssr: false,
  loading: () => <p>loading</p>,
});

export default function RegistItem() {
  return (
    <div>
      <Editor />
    </div>
  );
}
