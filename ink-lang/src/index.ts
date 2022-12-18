//@ts-nocheck
import { parser } from "./ink.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags as t} from "@lezer/highlight"

export const InkLang = LRLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Application: delimitedIndent({closing: ")", align: false})
      }),
      foldNodeProp.add({
        Application: foldInside
      }),
      styleTags({
        ImageName: t.url,
        ImageDefinition: t.definitionKeyword,
        Divert: t.definitionKeyword,
        SimpleComment: t.comment,
        PriorityComment: t.processingInstruction,
        MultiLineComment: t.comment,
        KnotDefinition: t.contentSeparator,
        StoryEnd: t.escape,
        Glue: t.logicOperator,
        SquareBrackets: t.string,
        "( )": t.paren,
        Choice: t.definitionKeyword,
      })
    ]
  }),
})

export function Ink() {
  return new LanguageSupport(InkLang)
}