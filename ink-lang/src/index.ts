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
        Image: t.definitionKeyword,
        ImageName: t.definitionOperator,
        Knot: t.string,
        Divert: t.string,
        "( )": t.paren
      })
    ]
  }),
  languageData: {
    commentTokens: {line: ";"}
  } 
})

export function Ink() {
  return new LanguageSupport(InkLang)
}