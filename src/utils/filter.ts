export function filter({
    content,
    keywords
}: {
    content: string;
    keywords: string[];
}) {
    return content.split(" ").filter(word => keywords.includes(word));
}
