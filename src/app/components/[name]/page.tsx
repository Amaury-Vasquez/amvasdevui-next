import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import {
  getComponentByName,
  getComponentQueryKey,
} from "@/queries/useComponentByName";
import Component from "@/modules/Component";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    name: string;
  };
}

export default async function Page({ params: { name } }: Readonly<PageProps>) {
  // Prefetch the component data
  const queryClient = new QueryClient();
  const queryKey = getComponentQueryKey(name);
  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => getComponentByName(name),
  });
  // Verfiy the component exists
  const queryState = queryClient.getQueryState(queryKey);
  if (!queryState?.data) return notFound();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Component componentName={name} />
    </HydrationBoundary>
  );
}
