import * as Plugin from 'iitcpluginkit'

import * as Handlebars from 'handlebars'
import {HelperDelegate} from 'handlebars'

class IitcHelperHandlebars implements Plugin.Class {

    init() {
        console.log(`HelperHandlebars ;) ${VERSION}`);
    }

    public compile(template: string): HandlebarsTemplateDelegate {
        return Handlebars.compile(template)
    }

    public registerHelper(name:string, function_: HelperDelegate) {
        Handlebars.registerHelper(name, function_)
    }
}

Plugin.Register(new IitcHelperHandlebars(), 'HelperHandlebars')
