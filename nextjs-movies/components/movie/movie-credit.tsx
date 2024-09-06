import { API_URL } from "../../app/constants";

export default async function MovieCredit({ id }: { id: string }) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  const credits = await response.json();

  return (
    <>
      {credits.map((credit) => (
        <li key={credit.id} className="flex items-center gap-2">
          <div className="overflow-hidden max-w-20 aspect-square rounded-md">
            <img
              src={credit.profile_path}
              className="w-full object-contain object-center"
            />
          </div>
          <p className="w-full text-sm break-all">
            <strong>{credit.name}</strong> <br />
            {credit.character}
          </p>
        </li>
      ))}
    </>
  );
}
