const Slug=(title)=>{
    if(title && (typeof(title)==="string")){
        return title.trim()
            .toLowerCase()
            .replace(/[^a-zA-Z0-9\s-]/g, "") // Remove special characters
            .replace(/\s+/g, "-")           // Replace spaces with hyphens
            .replace(/-+/g, "-");
    }
    return "";
}
export default Slug