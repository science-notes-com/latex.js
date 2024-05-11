import
    './article': { Article }


export class Webarticle extends Article

    # public static
    @css = "css/webarticle.css"

    # CTOR
    (generator, options) ->
        super ...

        zero = new @g.Length 0, @g.length(\paperwidth).unit

        minusOneIn = new @g.Length -1, "in"

        @g.setLength \textwidth @g.length(\paperwidth)
        @g.setLength \oddsidemargin minusOneIn
        @g.setLength \marginparsep zero
        @g.setLength \marginparwidth zero
