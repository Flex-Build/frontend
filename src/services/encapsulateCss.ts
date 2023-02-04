export const encapsulateCss = (htmlString: string, id: string) => {
    const lines = htmlString.split("\n");
    const styleTag = lines.findIndex((e) => e.includes("<style>"));
    if (styleTag == -1) {
        return htmlString;
    }

    let classNames = new Set<string>()
    for (let index = styleTag; index < lines.length; index++) {
        const line = lines[index];
        if (line.includes("{")) {
            if (line.includes(".")) {
                const _classNames = line
                    .split(".")
                    .map(e => e.replace("{", ""))
                    .map((e) => e.trim())
                    .map(e => {
                        return e.split(":")[0]
                    });
                _classNames.forEach((e) => { if (e != " " && e != "") classNames.add(e) })
            }
        }
    }
    classNames.forEach(cN => {
        // const regexExp = `/\\.${cN}|"${cN}| ${cN} |${cN}"/i`;
        const regexExpStr = `\\.${cN}`;
        const regexExp = new RegExp(regexExpStr, "g");
        htmlString = htmlString.replaceAll(regexExp, "." + cN + id);

    })
    classNames.forEach(cN => {
        const regexExpStr = `class="${cN}`;
        const regexExp = new RegExp(regexExpStr, "g");
        htmlString = htmlString.replaceAll(regexExp, `class="` + cN + id);
    })
    // classNames.forEach(cN => {
    //     const regexExpStr = ` ${cN} `;
    //     const regexExp = new RegExp(regexExpStr, "g");
    //     htmlString = htmlString.replaceAll(regexExp, " " + cN + id + " ");
    // })

    return htmlString;
};