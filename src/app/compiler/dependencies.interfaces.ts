
export interface IDep {
    id?: string;
    type: string;
    name: string;
}



export interface IInjectableDep extends IDep {
    file: any;
    properties: Array<any>;
    methods: Array<any>;
    description: string;
    sourceCode: string;

    accessors?: Object;
    constructorObj?: Object;
    jsdoctags?: Array<string>;
}

export interface IInterceptorDep extends IDep {
    file: any;
    properties: Array<any>;
    methods: Array<any>;
    description: string;
    sourceCode: string;

    accessors?: Object;
    constructorObj?: Object;
    jsdoctags?: Array<string>;
}

export interface IPipeDep extends IDep {
    file: any;
    description: string;
    sourceCode: string;
    exampleUrls?;

    methods: Array<any>;
    properties: Array<any>;
    pure: string;
    ngname: string;

    jsdoctags?: Array<string>;
}


export interface IInterfaceDep extends IDep {
    file: any;
    sourceCode: string;

    properties?: Array<any>;
    indexSignatures?: any;
    kind?: any;
    description?: string;
    methods?: Array<any>;
    extends?: Array<any>;
}

export interface IFunctionDecDep extends IDep {
    file: any;
    subtype: string;
    description: string;

    args?: Array<any>;
    jsdoctags?: string;
}

export interface IEnumDecDep extends IDep {
    childs: Array<any>;
    subtype: string;
    description: string;
    file: any;
}

export interface ITypeAliasDecDep extends IDep {
    subtype: string;
    file: any;
    rawtype: any;
    description: string;

    kind?;
}

export interface Deps {
    id: string;
    name: string;
    type: string;
    subtype?: string;
    rawtype?: any;
    kind?: string;
    label?: string;
    file?: string;
    sourceCode?: string;
    description?: string;

    // Component

    animations?: string[]; // TODO
    changeDetection?: string;
    encapsulation?: string;
    entryComponents?: string; // TODO
    exportAs?: string;
    host?: string;
    inputs?: string[];
    interpolation?: string; // TODO
    moduleId?: string;
    outputs?: string[];
    queries?: Deps[]; // TODO
    selector?: string;
    styleUrls?: string[];
    styles?: string[];
    template?: string;
    templateUrl?: string[];
    viewProviders?: Deps[];
    exampleUrls?: string[];

    implements?;
    extends?;

    inputsClass?: Object[];
    outputsClass?: Object[];
    propertiesClass?: Object[];
    methodsClass?: Object[];

    hostBindings?: Object[];
    hostListeners?: Object[];

    // common
    providers?: Deps[];

    // module
    declarations?: Deps[];
    bootstrap?: Deps[];

    imports?: Deps[];
    exports?: Deps[];

    routesTree?;
}

export interface SymbolDeps {
    full: string;
    alias: string;
}
