// flow-typed signature: 5c7248937eba250b209acc675dabd4ac
// flow-typed version: <<STUB>>/cheerio_v1.0.0-rc.2/flow_v0.61.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'cheerio'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

type $Spread<A, B> = /* ::{
  ...$Exact<A>,
  ...$Exact<B>,
}
type noop1<A, B> = */ A & B

declare module 'cheerio' {
  declare type Cheerio = {|
    [index: number]: CheerioElement,
    length: number,

    attr: (name: string) => string,

    data(name?: string, value?: any): any,

    val(value?: string): Cheerio,
    removeAttr(name: string): Cheerio,
    has(selector: string | CheerioElement): Cheerio,

    hasClass(className: string): boolean,
    addClass(classNames: string): Cheerio,

    removeClass(className?: string | (index: number, className: string) => string): Cheerio,

    toggleClass(className: string, toggleSwitch?: boolean): Cheerio,
    toggleClass(toggleSwitch?: boolean): Cheerio,
    toggleClass(func: (index: number, className: string, toggleSwitch: boolean) => string, toggleSwitch?: boolean): Cheerio,

    is(selector: string | CheerioElement | CheerioElement[] | Cheerio | (index: number, element: CheerioElement) => boolean): boolean,

    // Form
    serialize(): string,
    serializeArray(): { name: string, value: string }[],

    // Traversing

    find(selector: string | Cheerio): Cheerio,

    parent(selector?: string): Cheerio,
    parents(selector?: string): Cheerio,
    parentsUntil(selector?: string | CheerioElement | Cheerio, filter?: string): Cheerio,

    prop(name: string): any,
    prop(name: string, value: any): Cheerio,

    closest(): Cheerio,
    closest(selector: string): Cheerio,

    next(selector?: string): Cheerio,
    nextAll(selector?: string): Cheerio,

    nextUntil(selector?: string | CheerioElement | Cheerio, filter?: string): Cheerio,

    prev(selector?: string): Cheerio,
    prevAll(selector?: string): Cheerio,
    prevUntil(selector?: string | CheerioElement | Cheerio, filter?: string): Cheerio,
    slice(start: number, end?: number): Cheerio,
    siblings(selector?: string): Cheerio,

    children(selector?: string): Cheerio,
    contents(): Cheerio,

    each(func: (index: number, element: CheerioElement) => any): Cheerio,
    map(func: (index: number, element: CheerioElement) => any): Cheerio,

    filter(selector: string | Cheerio | CheerioElement | CheerioElement[]): Cheerio,
    filter(func: (index: number, element: CheerioElement) => boolean): Cheerio,

    not(selector: string | Cheerio | CheerioElement): Cheerio,
    not(func: (index: number, element: CheerioElement) => boolean): Cheerio,

    first(): Cheerio,
    last(): Cheerio,

    eq(index: number): Cheerio,
    get(index?: number): string[] | CheerioElement | CheerioElement[],
    index(selector?: string | Cheerio): number,
    end(): Cheerio,
    add(selectorOrHtml: string | CheerioElement | CheerioElement[] | Cheerio, context?: Document): Cheerio,
    addBack(filter?: string): Cheerio,

    // Manipulation
    appendTo(target: Cheerio): Cheerio,
    prependTo(target: Cheerio): Cheerio,
    append(content: string | Document | Document [] | Cheerio, ...contents: any[]): Cheerio,
    prepend(content: string | Document | Document[] | Cheerio, ...contents: any[]): Cheerio,
    after(content: string | Document | Document[] | Cheerio, ...contents: any[]): Cheerio,

    insertAfter(content: string | Document | Cheerio): Cheerio,
    before(content: string | Document | Document[] | Cheerio, ...contents: any[]): Cheerio,
    insertBefore(content: string | Document | Cheerio): Cheerio,
    remove(selector?: string): Cheerio,
    replaceWith(content: string | CheerioElement | CheerioElement[] | Cheerio | () => Cheerio): Cheerio,

    empty(): Cheerio,


    html: () => string | (html: string) => Cheerio,
    text: () => string | (text: string) => Cheerio,

    // See https://github.com/cheeriojs/cheerio/issues/731
    /*wrap(content: string): Cheerio,
    wrap(content: Document): Cheerio,
    wrap(content: Cheerio): Cheerio,*/

    css(propertyName: string): string,
    css(propertyNames: string[]): string[],
    css(propertyName: string, value: string): Cheerio,
    css(propertyName: string, value: number): Cheerio,
    css(propertyName: string, func: (index: number, value: string) => string): Cheerio,
    css(propertyName: string, func: (index: number, value: string) => number): Cheerio,
    css(properties: Object): Cheerio,

    // Rendering

    // Miscellaneous

    clone(): Cheerio,

    // Not Documented

    toArray(): CheerioElement[],
  |}

  declare type CheerioElement = {|
    // Document References
    // Node Console
    tagName: string,
    type: string,
    name: string,
    attribs: { [attr: string]: string },
    children: CheerioElement[],
    childNodes: CheerioElement[],
    lastChild: CheerioElement,
    firstChild: CheerioElement,
    next: CheerioElement,
    nextSibling: CheerioElement,
    prev: CheerioElement,
    previousSibling: CheerioElement,
    parent: CheerioElement,
    parentNode: CheerioElement,
    nodeValue: string,
    data?: string,
  |}

  declare type CheerioOptionsInterface = {|
    // Document References
    // Cheerio https://github.com/cheeriojs/cheerio
    // HTMLParser2 https://github.com/fb55/htmlparser2/wiki/Parser-options
    // DomHandler https://github.com/fb55/DomHandler

    xmlMode?: boolean,
    decodeEntities?: boolean,
    lowerCaseTags?: boolean,
    lowerCaseAttributeNames?: boolean,
    recognizeCDATA?: boolean,
    recognizeSelfClosing?: boolean,
    normalizeWhitespace?: boolean,
  |}

  declare type CheerioSelector =
    | (selector: string | Cheerio | CheerioElement) => Cheerio
    | (selector: string | Cheerio | CheerioElement, context: string | CheerioElement | CheerioElement[] | Cheerio, root: string) => Cheerio


  declare type CheerioStatic = {|
    (selector: string | Cheerio | CheerioElement): Cheerio,
    // Document References
    // Cheerio https://github.com/cheeriojs/cheerio
    // JQuery http://api.jquery.com
    xml(): string,
    root(): Cheerio,
    contains(container: CheerioElement, contained: CheerioElement): boolean,
    parseHTML(data: string, context?: Document, keepScripts?: boolean): Document[],

    html(options?: CheerioOptionsInterface): string,
    html(selector: string | Cheerio | CheerioElement, options?: CheerioOptionsInterface): string,
  |}

  declare type CheerioAPI = $Spread<CheerioStatic, {|
    (selector: string | Cheerio | CheerioElement): Cheerio,
    load(html: string | CheerioElement, options?: CheerioOptionsInterface): CheerioStatic,
  |}>

  declare module.exports: CheerioAPI;
}
