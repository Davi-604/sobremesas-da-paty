import { Skeleton } from '../ui/skeleton';

export const MenuCardSkeleton = () => {
    return (
        <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            <Skeleton className="h-[200px] lg:h-[270px] w-full overflow-hidden rounded-lg " />
            <Skeleton className="h-[200px] lg:h-[270px] w-full overflow-hidden rounded-lg " />
            <Skeleton className="h-[200px] lg:h-[270px] w-full overflow-hidden rounded-lg " />
            <Skeleton className="h-[200px] lg:h-[270px] w-full overflow-hidden rounded-lg " />
            <Skeleton className="h-[200px] lg:h-[270px] w-full overflow-hidden rounded-lg " />
            <Skeleton className="h-[200px] lg:h-[270px] w-full overflow-hidden rounded-lg " />
        </div>
    );
};
