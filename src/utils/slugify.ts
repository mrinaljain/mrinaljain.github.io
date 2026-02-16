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

// Build URL portion: "<slug>-<id>"
export function slugAndIdFrom(title: string, id: string) {
    return `${toSlug(title)}-${id}`;
}


// lowercase

// hyphens only (-) as separators (don’t use underscores)

// remove punctuation, emojis, extra filler words

// keep it reasonably short (aim ~3–8 meaningful words)

// don’t put sensitive data in it
