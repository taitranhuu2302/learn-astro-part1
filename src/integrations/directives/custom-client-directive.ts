import type {AstroIntegration} from "astro";

export default function CustomClientDirective(): AstroIntegration {
    return {
        name: "astro-directives",
        hooks: {
            "astro:config:setup": ({addClientDirective}) => {
                addClientDirective({
                    name: "click",
                    entrypoint: "./src/integrations/directives/click.ts"
                })
                addClientDirective({
                    name: "hover",
                    entrypoint: "./src/integrations/directives/hover.ts"
                })
                addClientDirective({
                    name: "scroll",
                    entrypoint: "./src/integrations/directives/scroll.ts"
                })
            }
        },
    }
}