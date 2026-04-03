export function toSlug(title: string) {
    return title
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "") // remove accents
        .replace(/[^a-z0-9\s-]/g, "")    // remove punctuation
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}
