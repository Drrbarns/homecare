"use client";

import { useState } from "react";
import { Search, ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";

export interface Column<T> {
    key: string;
    label: string;
    sortable?: boolean;
    render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T extends { id: string }> {
    columns: Column<T>[];
    data: T[];
    searchPlaceholder?: string;
    searchKeys?: string[];
    onRowClick?: (item: T) => void;
    actions?: (item: T) => React.ReactNode;
    emptyMessage?: string;
}

export function DataTable<T extends { id: string }>({
    columns,
    data,
    searchPlaceholder = "Search...",
    searchKeys = [],
    onRowClick,
    actions,
    emptyMessage = "No data found.",
}: DataTableProps<T>) {
    const [search, setSearch] = useState("");
    const [sortKey, setSortKey] = useState<string | null>(null);
    const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

    const handleSort = (key: string) => {
        if (sortKey === key) {
            setSortDir(sortDir === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setSortDir("asc");
        }
    };

    let filtered = data;
    if (search && searchKeys.length > 0) {
        const q = search.toLowerCase();
        filtered = data.filter((item) =>
            searchKeys.some((key) => {
                const val = (item as Record<string, unknown>)[key];
                return typeof val === "string" && val.toLowerCase().includes(q);
            })
        );
    }

    if (sortKey) {
        filtered = [...filtered].sort((a, b) => {
            const aVal = (a as Record<string, unknown>)[sortKey];
            const bVal = (b as Record<string, unknown>)[sortKey];
            if (aVal == null) return 1;
            if (bVal == null) return -1;
            const cmp = String(aVal).localeCompare(String(bVal), undefined, { numeric: true });
            return sortDir === "asc" ? cmp : -cmp;
        });
    }

    return (
        <div>
            {searchKeys.length > 0 && (
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={searchPlaceholder}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#043b67]/20 focus:border-[#043b67] transition-all"
                    />
                </div>
            )}

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                {columns.map((col) => (
                                    <th
                                        key={col.key}
                                        className={`px-4 py-3 text-left font-semibold text-gray-600 ${
                                            col.sortable ? "cursor-pointer select-none hover:text-gray-900" : ""
                                        }`}
                                        onClick={col.sortable ? () => handleSort(col.key) : undefined}
                                    >
                                        <div className="flex items-center gap-1">
                                            {col.label}
                                            {col.sortable && (
                                                <span className="text-gray-400">
                                                    {sortKey === col.key ? (
                                                        sortDir === "asc" ? (
                                                            <ChevronUp className="w-3.5 h-3.5" />
                                                        ) : (
                                                            <ChevronDown className="w-3.5 h-3.5" />
                                                        )
                                                    ) : (
                                                        <ChevronsUpDown className="w-3.5 h-3.5" />
                                                    )}
                                                </span>
                                            )}
                                        </div>
                                    </th>
                                ))}
                                {actions && <th className="px-4 py-3 text-right font-semibold text-gray-600 w-24">Actions</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={columns.length + (actions ? 1 : 0)}
                                        className="px-4 py-12 text-center text-gray-400"
                                    >
                                        {emptyMessage}
                                    </td>
                                </tr>
                            ) : (
                                filtered.map((item) => (
                                    <tr
                                        key={item.id}
                                        className={`border-b border-gray-50 last:border-0 ${
                                            onRowClick ? "cursor-pointer hover:bg-gray-50" : ""
                                        }`}
                                        onClick={() => onRowClick?.(item)}
                                    >
                                        {columns.map((col) => (
                                            <td key={col.key} className="px-4 py-3 text-gray-700">
                                                {col.render
                                                    ? col.render(item)
                                                    : String((item as Record<string, unknown>)[col.key] ?? "")}
                                            </td>
                                        ))}
                                        {actions && (
                                            <td className="px-4 py-3 text-right" onClick={(e) => e.stopPropagation()}>
                                                {actions(item)}
                                            </td>
                                        )}
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
