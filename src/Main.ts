import * as Plugin from "iitcpluginkit";


class IitcHelperHandlebars implements Plugin.Class {

    init() {
        console.log("IitcHelperHandlebars " + VERSION);

        

        // FILL ME
    }

}

/**
 * use "main" to access you main class from everywhere
 * (same as window.plugin.IitcHelperHandlebars)
 */
export const main = new IitcHelperHandlebars();
Plugin.Register(main, "IitcHelperHandlebars");
