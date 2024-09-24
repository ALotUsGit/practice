import { API_URL } from "../../app/constants";

export async function getDetail(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`세부정보 가져오기 오류: ${response.statusText}`);
  }
  return response.json();
}
