import { Skeleton } from "../ui/skeleton";

export function CardSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-[400px] w-[400px]" />
        {/* <Skeleton className="h-[400px] w-[400px]" /> */}
      </div>
    </div>
  );
}
