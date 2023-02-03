export const encapsulateCss = (htmlString: string, id: string) => {
    const lines = htmlString.split("\n");
    const styleTag = lines.findIndex((e) => e.includes("<style>"));
    if (styleTag == -1) {
        return htmlString;
    }

    let classNames: string[] = [];
    for (let index = styleTag; index < lines.length; index++) {
        const line = lines[index];
        if (line.includes("{")) {
            if (line.includes(".")) {
                const _classNames = line
                    .slice(1, -1)
                    .split(".")
                    .map((e) => e.trim());
                classNames = classNames.concat(_classNames.filter((e) => e != " "));
            }
        }
    }

    for (let cN of classNames) {
        // const regexExp = `/\\.${cN}|"${cN}| ${cN} |${cN}"/i`;
        const regexExpStr = `\\.${cN}`;
        const regexExp = new RegExp(regexExpStr, "g");
        htmlString = htmlString.replaceAll(regexExp, "." + cN + id);
    }
    for (let cN of classNames) {
        const regexExpStr = `"${cN}`;
        const regexExp = new RegExp(regexExpStr, "g");
        htmlString = htmlString.replaceAll(regexExp, `"` + cN + id);
    }
    for (let cN of classNames) {
        const regexExpStr = ` ${cN}`;
        const regexExp = new RegExp(regexExpStr, "g");
        htmlString = htmlString.replaceAll(regexExp, " " + cN + id + " ");
    }

    return htmlString;
};