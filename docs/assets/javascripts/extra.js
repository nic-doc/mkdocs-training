// SPDX-License-Identifier: Apache-2.0
// Copyright 2025 Latchfield Technologies http://latchfield.com

// Function to intecept the Material for MkDocs loading of the mermaid library
// and inject additional logos from the iconify-json/logos package.
(function () {
    const logos = fetch('https://unpkg.com/@iconify-json/logos@1/icons.json')
        .then((res) => res.json())
        .catch(e => console.error("Failed to fetch icon pack:", e));

    Object.defineProperty(window, 'mermaid', {
        configurable: true,
        set: async function (value) {
            delete window.mermaid;
            window.mermaid = value;

            try {
                value.registerIconPacks([
                    { name: 'logos', loader: () => logos }
                ]);
            } catch (e) {
                console.error("Error registering Mermaid icon pack:", e);
            }
        }
    });
})();