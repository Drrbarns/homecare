import { type LucideIcon } from "lucide-react";

interface StatsCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    icon: LucideIcon;
    trend?: { value: string; positive: boolean };
}

export function StatsCard({ title, value, subtitle, icon: Icon, trend }: StatsCardProps) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
                    {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
                    {trend && (
                        <p className={`text-sm mt-2 font-medium ${trend.positive ? "text-green-600" : "text-red-600"}`}>
                            {trend.positive ? "+" : ""}{trend.value}
                        </p>
                    )}
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#043b67]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#043b67]" />
                </div>
            </div>
        </div>
    );
}
