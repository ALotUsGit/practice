import Navigation from "../../../components/navigation";

import { API_URL } from "../../constants";

export async function getDetail(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

type TDetails = {
  params: { id: string };
  children: React.ReactNode;
};

export default async function DetaliLayout({
  params: { id },
  children,
}: TDetails) {
  return (
    <>
      <Navigation id={id} />
      {children}
    </>
  );
}
