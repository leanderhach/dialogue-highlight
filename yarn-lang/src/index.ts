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
        "Variable! Tag! HeaderTag! NodeStart NodeEnd": t.labelName,
        "( )": t.paren,
        "BeginStatement EndStatement Operator Bracket Brace SelectSetup": t.operatorKeyword,
        "Statement Keyword Option JoinedCharacter": t.keyword,
        Function: t.labelName,
        String: t.string,
        Number: t.number,
        Comment: t.comment,
        "Name! NodeHeader": t.heading,
      })
    ]
  }),
})

export function Yarn() {
  return new LanguageSupport(YarnLang)
}