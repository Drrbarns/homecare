const statusConfig: Record<string, { bg: string; text: string; dot: string }> = {
    new: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
    contacted: { bg: "bg-yellow-50", text: "text-yellow-700", dot: "bg-yellow-500" },
    qualified: { bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500" },
    closed: { bg: "bg-gray-50", text: "text-gray-600", dot: "bg-gray-400" },
    published: { bg: "bg-green-50", text: "text-green-700", dot: "bg-green-500" },
    draft: { bg: "bg-orange-50", text: "text-orange-700", dot: "bg-orange-500" },
    active: { bg: "bg-green-50", text: "text-green-700", dot: "bg-green-500" },
    inactive: { bg: "bg-gray-50", text: "text-gray-600", dot: "bg-gray-400" },
};

interface StatusBadgeProps {
    status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
    const config = statusConfig[status] || statusConfig.draft;
    return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
    );
}
