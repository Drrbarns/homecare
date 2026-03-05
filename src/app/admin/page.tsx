"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { StatsCard } from "@/components/admin/StatsCard";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { FileText, Users, Mail, Star, Briefcase, MapPin, HelpCircle, Clock } from "lucide-react";
import type { DashboardStats, Lead, AdminActivityLog } from "@/types/database";

export default function AdminDashboard() {
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [recentLeads, setRecentLeads] = useState<Lead[]>([]);
    const [recentActivity, setRecentActivity] = useState<AdminActivityLog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {
        const supabase = createClient();

        const [
            { count: totalLeads },
            { count: newLeads },
            { count: totalArticles },
            { count: publishedArticles },
            { count: totalSubscribers },
            { count: totalReviews },
            { count: totalServices },
            { count: totalOffices },
            { data: leads },
            { data: activity },
        ] = await Promise.all([
            supabase.from("leads").select("*", { count: "exact", head: true }),
            supabase.from("leads").select("*", { count: "exact", head: true }).eq("status", "new"),
            supabase.from("articles").select("*", { count: "exact", head: true }),
            supabase.from("articles").select("*", { count: "exact", head: true }).eq("published", true),
            supabase.from("newsletter_subscribers").select("*", { count: "exact", head: true }).eq("subscribed", true),
            supabase.from("reviews").select("*", { count: "exact", head: true }),
            supabase.from("services").select("*", { count: "exact", head: true }),
            supabase.from("office_locations").select("*", { count: "exact", head: true }),
            supabase.from("leads").select("*").order("created_at", { ascending: false }).limit(5),
            supabase.from("admin_activity_log").select("*").order("created_at", { ascending: false }).limit(10),
        ]);

        setStats({
            total_leads: totalLeads ?? 0,
            new_leads: newLeads ?? 0,
            total_articles: totalArticles ?? 0,
            published_articles: publishedArticles ?? 0,
            total_subscribers: totalSubscribers ?? 0,
            total_reviews: totalReviews ?? 0,
            total_services: totalServices ?? 0,
            total_offices: totalOffices ?? 0,
        });
        setRecentLeads(leads ?? []);
        setRecentActivity(activity ?? []);
        setLoading(false);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="w-8 h-8 border-2 border-[#043b67] border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-500 text-sm mt-1">Overview of your website activity</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <StatsCard title="Total Leads" value={stats?.total_leads ?? 0} subtitle={`${stats?.new_leads ?? 0} new`} icon={Users} />
                <StatsCard title="Articles" value={stats?.total_articles ?? 0} subtitle={`${stats?.published_articles ?? 0} published`} icon={FileText} />
                <StatsCard title="Subscribers" value={stats?.total_subscribers ?? 0} icon={Mail} />
                <StatsCard title="Reviews" value={stats?.total_reviews ?? 0} icon={Star} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <StatsCard title="Services" value={stats?.total_services ?? 0} icon={Briefcase} />
                <StatsCard title="Office Locations" value={stats?.total_offices ?? 0} icon={MapPin} />
                <StatsCard title="FAQs" value="-" icon={HelpCircle} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Leads */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                        <h2 className="font-semibold text-gray-900">Recent Leads</h2>
                        <Link href="/admin/leads" className="text-sm text-[#043b67] hover:underline font-medium">
                            View all
                        </Link>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {recentLeads.length === 0 ? (
                            <p className="px-5 py-8 text-center text-sm text-gray-400">No leads yet</p>
                        ) : (
                            recentLeads.map((lead) => (
                                <div key={lead.id} className="px-5 py-3 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{lead.name}</p>
                                        <p className="text-xs text-gray-500">{lead.email}</p>
                                    </div>
                                    <StatusBadge status={lead.status} />
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="px-5 py-4 border-b border-gray-100">
                        <h2 className="font-semibold text-gray-900">Recent Activity</h2>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {recentActivity.length === 0 ? (
                            <p className="px-5 py-8 text-center text-sm text-gray-400">No activity yet</p>
                        ) : (
                            recentActivity.map((log) => (
                                <div key={log.id} className="px-5 py-3 flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                                        <Clock className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            <span className="font-medium">{log.action}</span> {log.entity_type}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-0.5">
                                            {new Date(log.created_at).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
