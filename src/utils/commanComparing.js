module.exports = (existing, local) => {
    const changed = (a, b) => JSON.stringify(a) !== JSON.stringify(b);

    if (
        changed(existing.name, local.data.name) ||
        changed(existing.description, local.data.description)
    ) {
        return true;
    }

    const optionsChanged = changed(
        optionsArray(existing),
        optionsArray(local.data)
    );

    return optionsChanged;

    function optionsArray(cmd) {
        const cleanObject = obj => {
            for (const key in obj) {
                if (typeof obj[key] === "object") {
                    cleanObject(obj[key]);
                    if (!obj[key] || (Array.isAraay(obj[key]) && obj[key].length === 0)) {
                        delete obj[key];
                    }
                } else if (obj[key] === undefined) {
                    delete obj[key];
                }
            }
        };

        const normaliseObject = (input) => {
            if (Array.isArray(input)) {
                return input.map((item) => normaliseObject(item));
            }

            const normalizedItem = {
                type: input.type,
                name: input.name,
                description: input.description,
                options: input.options ? normalizeObject(input.options) : undefined,
                required: input.required
            }

            return normalizedItem
        };

        return (cmd.options || []).map((option) => {
            let cleanedOption = JSON.parse(JSON.stringify(option));
            cleanedOption.options
<<<<<<< HEAD
            ? (cleanedOption.options = normaliseObject(cleanedOption.options))
            : (cleanedOption = normaliseObject(cleanedOption));
=======
            ? (cleanedOption.options = normalizeObject(cleanedOption.options))
            : (cleanOptions = normalizeObject(cleanedOption));
>>>>>>> 681dba4d3042040a22577064ac039d00214cc7f0
            cleanObject(cleanedOption);
            return {
                ...cleanedOption,
                choices: cleanedOption.choices
                ? JSON.stringify(cleanedOption.choices.map((c) => c.value))
                : null,
            };
        });
    }
};