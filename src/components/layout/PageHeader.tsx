import { brand } from "@/config/brand";

export function PageHeader({ title, subtitle }: { title: string, subtitle?: string }) {
    return (
        <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-16 md:py-24 text-center animate-fade-in-up">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white capitalize">{title}</h1>
                {subtitle && (
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    )
}
