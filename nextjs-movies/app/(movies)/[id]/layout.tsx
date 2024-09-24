import Navigation from "../../../components/navigation";

type TDetails = {
  params: { id: string };
  children: React.ReactNode;
};

export default async function DetaliLayout({
  params: { id },
  children,
}: TDetails) {
  // const detail = await getDetail(id);

  return (
    <>
      <Navigation id={id} />
      {children}
    </>
  );
}
