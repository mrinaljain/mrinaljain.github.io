export default function Loading() {
    return (
        <main className="mx-auto max-w-6xl px-6 py-16">
            <div className="h-10 w-48 bg-neutral-100 rounded" />
            <div className="mt-3 h-5 w-96 bg-neutral-100 rounded" />

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="rounded-2xl border overflow-hidden">
                        <div className="aspect-video bg-neutral-100" />
                        <div className="p-5">
                            <div className="h-5 w-3/4 bg-neutral-100 rounded" />
                            <div className="mt-3 h-4 w-1/2 bg-neutral-100 rounded" />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
