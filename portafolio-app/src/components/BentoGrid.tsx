interface BentoGridItemProps {
    className?: string;
    children: React.ReactNode;
}

const BentoGridItem: React.FC<BentoGridItemProps> = ({ className, children }) => {
    return (
        <div className={`rounded-lg p-4 shadow-lg ${className}`}>
            {children}
        </div>
    );
};

interface BentoGridProps {
    children: React.ReactNode;
    className?: string;
}

const BentoGrid: React.FC<BentoGridProps> = ({ children, className }) => {
    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
        >
            {children}
        </div>
    );
};

export { BentoGrid, BentoGridItem };