'use client';

export const ColorsGrid = () => {
    const colors = [
        'background',
        'foreground',
        'card',
        'card-foreground',
        'popover',
        'popover-foreground',
        'primary',
        'primary-foreground',
        'secondary',
        'secondary-foreground',
        'muted',
        'muted-foreground',
        'accent',
        'accent-foreground',
        'destructive',
        'destructive-foreground',
        'border',
        'input',
        'ring',
        'chart-1',
        'chart-2',
        'chart-3',
        'chart-4',
        'chart-5',
    ];

    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {colors.map((color) => (
                <div key={color} className="flex items-center gap-2">
                    <div
                        className="size-10 rounded-full"
                        style={{ backgroundColor: `hsl(var(--${color}))` }}
                    ></div>
                    <div className="text-sm font-medium">{color}</div>
                </div>
            ))}
        </div>
    );
};
