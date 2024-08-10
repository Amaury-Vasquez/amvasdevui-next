import { useQuery } from "@tanstack/react-query";
import { IDbComponent } from "@/models/dbComponent";
import { request } from "@/services/api";

export async function getComponentByName(name: string) {
  return await request<IDbComponent>(`components/${name}`);
}

export const getComponentQueryKey = (name: string) => ["component", name];

export default function useComponentByName(name: string) {
  const { data: component, ...args } = useQuery({
    queryKey: getComponentQueryKey(name),
    queryFn: () => getComponentByName(name),
  });

  return { component, ...args };
}
