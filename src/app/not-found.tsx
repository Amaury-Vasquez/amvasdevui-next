import { Link } from "@/components";

export default function NotFound() {
  return (
    <div className="flex w-full items-center justify-center text-center p-8 pt-20 flex-col gap-6 h-full">
      <h1 className="text-2xl sm:text-4xl font-bold">
        Oops, something went wrong
      </h1>
      <p className="sm:text-xl font-semibold">
        The page you are looking for does not exist or has been removed.
      </p>
      <Link href="/" variant="primary">
        Go back to home
      </Link>
    </div>
  );
}
