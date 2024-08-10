import { CircleOff } from "lucide-react";

const UnknownUsage = () => (
  <div className="flex flex-col w-full text-center items-center gap-4">
    <h1 className="text-2xl font-bold">
      This component still doesn&apos;t have a story associated with it
    </h1>
    <CircleOff className="text-error" size={80} />
    <p>
      This can be caused due to the component recently being added to the
      library <br />
      Please check back later
    </p>
  </div>
);

export default UnknownUsage;
