//@ts-nocheck
import { parser } from "./yarn.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags as t} from "@lezer/highlight"

export const YarnLang = LRLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Application: delimitedIndent({closing: ")", align: false})
      }),
      foldNodeProp.add({
        Application: foldInside
      }),
      styleTags({
        Arg: t.definitionKeyword,
        "Variable!": t.string,
        "( )": t.paren,
        "BeginStatement EndStatement Operator EndIf OpenBrace CloseBrace OpenSquareBracket CloseSquareBracket Option": t.operatorKeyword,
        "IfBlock VariableSet": t.keyword,
        String: t.string,
        Number: t.number,
        Comment: t.comment,
        "Name!": t.heading,
        "NodeInfo!": t.propertyName,
      })
    ]
  }),
})

export function Yarn() {
  return new LanguageSupport(YarnLang)
}