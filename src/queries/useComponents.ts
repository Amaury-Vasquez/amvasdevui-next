import { useQuery } from "@tanstack/react-query";
import { IDbComponent } from "@/models/dbComponent";
import { request } from "@/services/api";

export async function getAllComponents() {
  return await request<IDbComponent[]>("components");
}

const COMPONENTS_QUERY_KEY = ["components"];

export default function useComponents() {
  const { data: components = [], ...args } = useQuery({
    queryKey: COMPONENTS_QUERY_KEY,
    queryFn: getAllComponents,
  });

  return { components, ...args };
}
