import React, { useState, useEffect, useContext, useRef } from "react";
import { Navigate } from "react-router-dom";
import Styled from "styled-components";
import "./customBlocks";
// import GithubIcon from "mdi-react/GithubIcon";
import { AuthContext } from "../App";
import "blockly/javascript";
import "blockly/javascript_compressed";
import { javascript_compressed } from "blockly/core";
import { BlocklyWorkspace } from "react-blockly";
import { useBlocklyWorkspace } from "react-blockly";
import Blockly, { Block, ToolboxCategory } from "blockly";

import { javascriptGenerator } from "blockly/javascript";
import { pythonGenerator } from "blockly/python";
import { phpGenerator } from "blockly/php";
import { luaGenerator } from "blockly/lua";
import { dartGenerator } from "blockly/dart";

import { INITIAL_TOOLBOX_JSON } from "../toolBoxCategory";
import {motionXml} from "./motion-xml"

export default function Login() {
  const { state, dispatch } = useContext(AuthContext);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });

  const { client_id, redirect_uri } = state;
  let workspace = null;
  let serializer = null;
  let blocklyState = null;
  console.log("blockly", Blockly);
  const [xml, setXml] = useState(
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>'
  );
  const [javascriptCode, setJavascriptCode] = useState("");

  useEffect(() => {}, []);

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
  // const toolboxCategories = {
  //   kind: "categoryToolbox",
  //   contents: [
  //     {
  //       kind: "category",
  //       name: "Logic",
  //       colour: "#5C81A6",
  //       contents: [
  //         {
  //           kind: "block",
  //           type: "controls_if",
  //           colourPrimary: "#5CA65C",
  //           colourSecondary: "#AD7BE9",
  //           colourTertiary: "#CDB6E9",
  //         },
  //         {
  //           kind: "block",
  //           type: "logic_compare",
  //           colour: "360",
  //         },
  //       ],
  //     },
  //     {
  //       kind: "category",
  //       name: "Math",
  //       colour: "#5CA65C",
  //       contents: [
  //         {
  //           kind: "block",
  //           type: "math_round",
  //         },
  //         {
  //           kind: "block",
  //           type: "math_number",
  //         },
  //       ],
  //     },
  //     {
  //       kind: "category",
  //       name: "USACustom",
  //       colour: "#5CA699",
  //       contents: [
  //         {
  //           kind: "block",
  //           type: "move_block_left",
  //         },
  //         {
  //           kind: "block",
  //           type: "move_block_right",
  //         },
  //       ],
  //     },
  //     {
  //       kind: "category",
  //       name: "Core",
  //       contents: [
  //         {
  //           kind: "block",
  //           type: "controls_if",
  //         },
  //         {
  //           kind: "block",
  //           type: "logic_compare",
  //         },
  //       ],
  //     },
  //     {
  //       kind: "category",
  //       name: "Custom",
  //       contents: [
  //         {
  //           kind: "block",
  //           type: "start",
  //         },
  //         {
  //           kind: "category",
  //           name: "Move",
  //           contents: [
  //             {
  //               kind: "block",
  //               type: "move_forward",
  //             },
  //           ],
  //         },
  //         {
  //           kind: "category",
  //           name: "Turn",
  //           contents: [
  //             {
  //               kind: "block",
  //               type: "turn_left",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       kind: "category",
  //       name: "Variable",
  //       colour: "#5CA699",
  //       contents: [
  //         {
  //           kind: "block",
  //           type: "controls_for",
  //           fields: {
  //             VAR: {
  //               name: "index",
  //               type: "Number",
  //             },
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       kind: "category",
  //       name: "Boolean",
  //       colour: "#5CA699",
  //       contents: [
  //         {
  //           kind: "block",
  //           type: "logic_boolean",
  //         },
  //         {
  //           kind: "block",
  //           type: "math_number",
  //           fields: {
  //             NUM: 42,
  //           },
  //         },
  //         {
  //           kind: "block",
  //           type: "controls_for",
  //           inputs: {
  //             FROM: {
  //               block: {
  //                 type: "math_number",
  //                 fields: {
  //                   NUM: 1,
  //                 },
  //               },
  //             },
  //             TO: {
  //               block: {
  //                 type: "math_number",
  //                 fields: {
  //                   NUM: 10,
  //                 },
  //               },
  //             },
  //             BY: {
  //               block: {
  //                 type: "math_number",
  //                 fields: {
  //                   NUM: 1,
  //                 },
  //               },
  //             },
  //           },
  //         },
  //         {
  //           kind: "block",
  //           type: "math_arithmetic",
  //           fields: {
  //             OP: "ADD",
  //           },
  //           inputs: {
  //             A: {
  //               shadow: {
  //                 type: "math_number",
  //                 fields: {
  //                   NUM: 1,
  //                 },
  //               },
  //             },
  //             B: {
  //               shadow: {
  //                 type: "math_number",
  //                 fields: {
  //                   NUM: 1,
  //                 },
  //               },
  //             },
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       kind: "category",
  //       name: "Loop",
  //       colour: "#5CA699",
  //       contents: [
  //         {
  //           kind: "block",
  //           type: "controls_if",
  //         },
  //         {
  //           kind: "block",
  //           type: "controls_whileUntil",
  //         },
  //       ],
  //     },
  //     {
  //       kind: "category",
  //       name: "Logic",
  //       colour: "#5CA699",
  //       contents: [
  //         {
  //           kind: "category",
  //           name: "Control",
  //           contents: [
  //             {
  //               kind: "block",
  //               type: "controls_if",
  //             },
  //           ],
  //         },
  //         {
  //           kind: "category",
  //           name: "Logic",
  //           contents: [
  //             {
  //               kind: "block",
  //               type: "logic_compare",
  //             },
  //             {
  //               kind: "block",
  //               type: "logic_operation",
  //             },
  //             {
  //               kind: "block",
  //               type: "logic_boolean",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       kind: "category",
  //       name: "Nested",
  //       colour: "#5CA699",
  //       contents: [
  //         {
  //           kind: "category",
  //           name: "Core",
  //           contents: [
  //             {
  //               kind: "block",
  //               type: "controls_if",
  //             },
  //             {
  //               kind: "block",
  //               type: "logic_compare",
  //             },
  //           ],
  //         },
  //         {
  //           kind: "category",
  //           name: "Custom",
  //           contents: [
  //             {
  //               kind: "block",
  //               type: "start",
  //             },
  //             {
  //               kind: "category",
  //               name: "Move",
  //               contents: [
  //                 {
  //                   kind: "block",
  //                   type: "move_forward",
  //                 },
  //               ],
  //             },
  //             {
  //               kind: "category",
  //               name: "Turn",
  //               contents: [
  //                 {
  //                   kind: "block",
  //                   type: "turn_left",
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       kind: "category",
  //       name: "maths",
  //       colour: "#5CA699",
  //       contents: [
  //         {
  //           kind: "block",
  //           type: "math_number",
  //         },
  //         {
  //           kind: "block",
  //           type: "math_arithmetic",
  //         },
  //         {
  //           kind: "block",
  //           type: "math_single",
  //           disabled: "false",
  //         },
  //       ],
  //     },
  //     {
  //       kind: "category",
  //       name: "Button",
  //       colour: "#5CA699",
  //       contents: [
  //         {
  //           kind: "block",
  //           type: "logic_operation",
  //         },
  //         {
  //           kind: "label",
  //           text: "A label",
  //           "web-class": "myLabelStyle",
  //         },
  //         {
  //           kind: "label",
  //           text: "Another label",
  //         },
  //         {
  //           kind: "block",
  //           type: "logic_negate",
  //         },
  //         {
  //           kind: "button",
  //           text: "A button",
  //           callbackKey: "myFirstButtonPressed",
  //         },
  //         {
  //           kind: "block",
  //           type: "logic_boolean",
  //         },
  //       ],
  //     },

  //     {
  //       kind: "category",
  //       contents: [
  //         {
  //           kind: "category",
  //           name: "Logic",
  //           categorystyle: "logic_category",
  //           contents: [
  //             {
  //               kind: "category",
  //               name: "If",
  //               contents: [
  //                 {
  //                   kind: "block",
  //                   type: "controls_if",
  //                 },
  //                 {
  //                   kind: "block",
  //                   type: "controls_if",
  //                   extraState: {
  //                     hasElse: "true",
  //                   },
  //                 },
  //                 {
  //                   kind: "block",
  //                   type: "controls_if",
  //                   extraState: {
  //                     hasElse: "true",
  //                     elseIfCount: 1,
  //                   },
  //                 },
  //               ],
  //             },
  //             {
  //               kind: "category",
  //               name: "Boolean",
  //               categorystyle: "logic_category",
  //               contents: [
  //                 {
  //                   kind: "block",
  //                   type: "logic_compare",
  //                 },
  //                 {
  //                   kind: "block",
  //                   type: "logic_operation",
  //                 },
  //                 {
  //                   kind: "block",
  //                   type: "logic_negate",
  //                 },
  //                 {
  //                   kind: "block",
  //                   type: "logic_boolean",
  //                 },
  //                 {
  //                   kind: "block",
  //                   type: "logic_null",
  //                 },
  //                 {
  //                   kind: "block",
  //                   type: "logic_ternary",
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           kind: "category",
  //           name: "Loops",
  //           categorystyle: "loop_category",
  //           contents: [
  //             {
  //               kind: "block",
  //               type: "controls_repeat_ext",
  //               inputs: {
  //                 TIMES: {
  //                   block: {
  //                     type: "math_number",
  //                     fields: {
  //                       NUM: 10,
  //                     },
  //                   },
  //                 },
  //               },
  //             },
  //             {
  //               kind: "block",
  //               type: "controls_whileUntil",
  //             },
  //             {
  //               kind: "block",
  //               type: "controls_for",
  //               fields: {
  //                 VAR: "i",
  //               },
  //               inputs: {
  //                 FROM: {
  //                   block: {
  //                     type: "math_number",
  //                     fields: {
  //                       NUM: 1,
  //                     },
  //                   },
  //                 },
  //                 TO: {
  //                   block: {
  //                     type: "math_number",
  //                     fields: {
  //                       NUM: 10,
  //                     },
  //                   },
  //                 },
  //                 BY: {
  //                   block: {
  //                     type: "math_number",
  //                     fields: {
  //                       NUM: 1,
  //                     },
  //                   },
  //                 },
  //               },
  //             },
  //             {
  //               kind: "block",
  //               type: "controls_forEach",
  //             },
  //             {
  //               kind: "block",
  //               type: "controls_flow_statements",
  //             },
  //           ],
  //         },
  //         {
  //           kind: "category",
  //           name: "Math",
  //           categorystyle: "math_category",
  //           contents: [
  //             {
  //               kind: "block",
  //               type: "math_number",
  //               fields: {
  //                 NUM: 123,
  //               },
  //             },
  //             {
  //               kind: "block",
  //               type: "math_arithmetic",
  //               fields: {
  //                 OP: "ADD",
  //               },
  //             },
  //             {
  //               kind: "block",
  //               type: "math_single",
  //               fields: {
  //                 OP: "ROOT",
  //               },
  //             },
  //             {
  //               kind: "block",
  //               type: "math_trig",
  //               fields: {
  //                 OP: "SIN",
  //               },
  //             },
  //             {
  //               kind: "block",
  //               type: "math_constant",
  //               fields: {
  //                 CONSTANT: "PI",
  //               },
  //             },
  //             {
  //               kind: "block",
  //               type: "math_number_property",
  //               extraState: '<mutation divisor_input="false"></mutation>',
  //               fields: {
  //                 PROPERTY: "EVEN",
  //               },
  //             },
  //             {
  //               kind: "block",
  //               type: "math_round",
  //               fields: {
  //                 OP: "ROUND",
  //               },
  //             },
  //             {
  //               kind: "block",
  //               type: "math_on_list",
  //               extraState: '<mutation op="SUM"></mutation>',
  //               fields: {
  //                 OP: "SUM",
  //               },
  //             },
  //             {
  //               kind: "block",
  //               type: "math_modulo",
  //             },
  //             {
  //               kind: "block",
  //               type: "math_constrain",
  //               inputs: {
  //                 LOW: {
  //                   block: {
  //                     type: "math_number",
  //                     fields: {
  //                       NUM: 1,
  //                     },
  //                   },
  //                 },
  //                 HIGH: {
  //                   block: {
  //                     type: "math_number",
  //                     fields: {
  //                       NUM: 100,
  //                     },
  //                   },
  //                 },
  //               },
  //             },
  //             {
  //               kind: "block",
  //               type: "math_random_int",
  //               inputs: {
  //                 FROM: {
  //                   block: {
  //                     type: "math_number",
  //                     fields: {
  //                       NUM: 1,
  //                     },
  //                   },
  //                 },
  //                 TO: {
  //                   block: {
  //                     type: "math_number",
  //                     fields: {
  //                       NUM: 100,
  //                     },
  //                   },
  //                 },
  //               },
  //             },
  //             {
  //               kind: "block",
  //               type: "math_random_float",
  //             },
  //             {
  //               kind: "block",
  //               type: "math_atan2",
  //             },
  //           ],
  //         },
  //         {
  //           kind: "category",
  //           name: "Lists",
  //           categorystyle: "list_category",
  //           contents: [
  //             {
  //               kind: "block",
  //               type: "lists_create_empty",
  //             },
  //             {
  //               kind: "block",
  //               type: "lists_create_with",
  //               extraState: {
  //                 itemCount: 3,
  //               },
  //             },
  //             {
  //               kind: "block",
  //               type: "lists_repeat",
  //               inputs: {
  //                 NUM: {
  //                   block: {
  //                     type: "math_number",
  //                     fields: {
  //                       NUM: 5,
  //                     },
  //                   },
  //                 },
  //               },
  //             },
  //             {
  //               kind: "block",
  //               type: "lists_length",
  //             },
  //             {
  //               kind: "block",
  //               type: "lists_isEmpty",
  //             },
  //             {
  //               kind: "block",
  //               type: "lists_indexOf",
  //               fields: {
  //                 END: "FIRST",
  //               },
  //             },
  //             {
  //               kind: "block",
  //               type: "lists_getIndex",
  //               fields: {
  //                 MODE: "GET",
  //                 WHERE: "FROM_START",
  //               },
  //             },
  //             {
  //               kind: "block",
  //               type: "lists_setIndex",
  //               fields: {
  //                 MODE: "SET",
  //                 WHERE: "FROM_START",
  //               },
  //             },
  //           ],
  //         },
  //         {
  //           kind: "sep",
  //         },
  //         {
  //           kind: "category",
  //           name: "Variables",
  //           categorystyle: "variable_category",
  //           custom: "VARIABLE",
  //         },
  //         {
  //           kind: "category",
  //           name: "Functions",
  //           categorystyle: "procedure_category",
  //           custom: "PROCEDURE",
  //         },
  //         {
  //           kind: "category",
  //           name: "Library",
  //           expanded: "true",
  //           contents: [
  //             {
  //               kind: "category",
  //               name: "Randomize",
  //               contents: [
  //                 {
  //                   kind: "block",
  //                   type: "procedures_defnoreturn",
  //                   extraState: {
  //                     params: [
  //                       {
  //                         name: "list",
  //                       },
  //                     ],
  //                   },
  //                   icons: {
  //                     comment: {
  //                       text: "Describe this function...",
  //                       pinned: false,
  //                       height: 80,
  //                       width: 160,
  //                     },
  //                   },
  //                   fields: {
  //                     NAME: "randomize",
  //                   },
  //                   inputs: {
  //                     STACK: {
  //                       block: {
  //                         type: "controls_for",
  //                         fields: {
  //                           VAR: {
  //                             name: "x",
  //                           },
  //                         },
  //                         inputs: {
  //                           FROM: {
  //                             block: {
  //                               type: "math_number",
  //                               fields: {
  //                                 NUM: 1,
  //                               },
  //                             },
  //                           },
  //                           TO: {
  //                             block: {
  //                               type: "lists_length",
  //                               inline: false,
  //                               inputs: {
  //                                 VALUE: {
  //                                   block: {
  //                                     type: "variables_get",
  //                                     fields: {
  //                                       VAR: {
  //                                         name: "list",
  //                                       },
  //                                     },
  //                                   },
  //                                 },
  //                               },
  //                             },
  //                           },
  //                           BY: {
  //                             block: {
  //                               type: "math_number",
  //                               fields: {
  //                                 NUM: 1,
  //                               },
  //                             },
  //                           },
  //                           DO: {
  //                             block: {
  //                               type: "variables_set",
  //                               inline: false,
  //                               fields: {
  //                                 VAR: {
  //                                   name: "y",
  //                                 },
  //                               },
  //                               inputs: {
  //                                 VALUE: {
  //                                   block: {
  //                                     type: "math_random_int",
  //                                     inputs: {
  //                                       FROM: {
  //                                         block: {
  //                                           type: "math_number",
  //                                           fields: {
  //                                             NUM: 1,
  //                                           },
  //                                         },
  //                                       },
  //                                       TO: {
  //                                         block: {
  //                                           type: "lists_length",
  //                                           inline: false,
  //                                           inputs: {
  //                                             VALUE: {
  //                                               block: {
  //                                                 type: "variables_get",
  //                                                 fields: {
  //                                                   VAR: {
  //                                                     name: "list",
  //                                                   },
  //                                                 },
  //                                               },
  //                                             },
  //                                           },
  //                                         },
  //                                       },
  //                                     },
  //                                   },
  //                                 },
  //                               },
  //                               next: {
  //                                 block: {
  //                                   type: "variables_set",
  //                                   inline: false,
  //                                   fields: {
  //                                     VAR: {
  //                                       name: "temp",
  //                                     },
  //                                   },
  //                                   inputs: {
  //                                     VALUE: {
  //                                       block: {
  //                                         type: "lists_getIndex",
  //                                         fields: {
  //                                           MODE: "GET",
  //                                           WHERE: "FROM_START",
  //                                         },
  //                                         inputs: {
  //                                           VALUE: {
  //                                             block: {
  //                                               type: "variables_get",
  //                                               fields: {
  //                                                 VAR: {
  //                                                   name: "list",
  //                                                 },
  //                                               },
  //                                             },
  //                                           },
  //                                           AT: {
  //                                             block: {
  //                                               type: "variables_get",
  //                                               fields: {
  //                                                 VAR: {
  //                                                   name: "y",
  //                                                 },
  //                                               },
  //                                             },
  //                                           },
  //                                         },
  //                                       },
  //                                     },
  //                                   },
  //                                   next: {
  //                                     block: {
  //                                       type: "lists_setIndex",
  //                                       inline: false,
  //                                       fields: {
  //                                         MODE: "SET",
  //                                         WHERE: "FROM_START",
  //                                       },
  //                                       inputs: {
  //                                         LIST: {
  //                                           block: {
  //                                             type: "variables_get",
  //                                             fields: {
  //                                               VAR: {
  //                                                 name: "list",
  //                                               },
  //                                             },
  //                                           },
  //                                         },
  //                                         AT: {
  //                                           block: {
  //                                             type: "variables_get",
  //                                             fields: {
  //                                               VAR: {
  //                                                 name: "y",
  //                                               },
  //                                             },
  //                                           },
  //                                         },
  //                                         TO: {
  //                                           block: {
  //                                             type: "lists_getIndex",
  //                                             fields: {
  //                                               MODE: "GET",
  //                                               WHERE: "FROM_START",
  //                                             },
  //                                             inputs: {
  //                                               VALUE: {
  //                                                 block: {
  //                                                   type: "variables_get",
  //                                                   fields: {
  //                                                     VAR: {
  //                                                       name: "list",
  //                                                     },
  //                                                   },
  //                                                 },
  //                                               },
  //                                               AT: {
  //                                                 block: {
  //                                                   type: "variables_get",
  //                                                   fields: {
  //                                                     VAR: {
  //                                                       name: "x",
  //                                                     },
  //                                                   },
  //                                                 },
  //                                               },
  //                                             },
  //                                           },
  //                                         },
  //                                       },
  //                                       next: {
  //                                         block: {
  //                                           type: "lists_setIndex",
  //                                           inline: false,
  //                                           fields: {
  //                                             MODE: "SET",
  //                                             WHERE: "FROM_START",
  //                                           },
  //                                           inputs: {
  //                                             LIST: {
  //                                               block: {
  //                                                 type: "variables_get",
  //                                                 fields: {
  //                                                   VAR: {
  //                                                     name: "list",
  //                                                   },
  //                                                 },
  //                                               },
  //                                             },
  //                                             AT: {
  //                                               block: {
  //                                                 type: "variables_get",
  //                                                 fields: {
  //                                                   VAR: {
  //                                                     name: "x",
  //                                                   },
  //                                                 },
  //                                               },
  //                                             },
  //                                             TO: {
  //                                               block: {
  //                                                 type: "variables_get",
  //                                                 fields: {
  //                                                   VAR: {
  //                                                     name: "temp",
  //                                                   },
  //                                                 },
  //                                               },
  //                                             },
  //                                           },
  //                                         },
  //                                       },
  //                                     },
  //                                   },
  //                                 },
  //                               },
  //                             },
  //                           },
  //                         },
  //                       },
  //                     },
  //                   },
  //                 },
  //               ],
  //             },
  //             {
  //               kind: "category",
  //               name: "Jabberwocky",
  //               contents: [
  //                 {
  //                   kind: "block",
  //                   type: "text_print",
  //                   inputs: {
  //                     TEXT: {
  //                       block: {
  //                         type: "text",
  //                         fields: {
  //                           TEXT: "'Twas brillig, and the slithy toves",
  //                         },
  //                       },
  //                     },
  //                   },
  //                   next: {
  //                     block: {
  //                       type: "text_print",
  //                       inputs: {
  //                         TEXT: {
  //                           block: {
  //                             type: "text",
  //                             fields: {
  //                               TEXT: "  Did gyre and gimble in the wabe:",
  //                             },
  //                           },
  //                         },
  //                       },
  //                       next: {
  //                         block: {
  //                           type: "text_print",
  //                           inputs: {
  //                             TEXT: {
  //                               block: {
  //                                 type: "text",
  //                                 fields: {
  //                                   TEXT: "All mimsy were the borogroves,",
  //                                 },
  //                               },
  //                             },
  //                           },
  //                           next: {
  //                             block: {
  //                               type: "text_print",
  //                               inputs: {
  //                                 TEXT: {
  //                                   block: {
  //                                     type: "text",
  //                                     fields: {
  //                                       TEXT: "  And the mome raths outgrabe.",
  //                                     },
  //                                   },
  //                                 },
  //                               },
  //                             },
  //                           },
  //                         },
  //                       },
  //                     },
  //                   },
  //                 },
  //                 {
  //                   kind: "block",
  //                   type: "text_print",
  //                   inputs: {
  //                     TEXT: {
  //                       block: {
  //                         type: "text",
  //                         fields: {
  //                           TEXT: '"Beware the Jabberwock, my son!',
  //                         },
  //                       },
  //                     },
  //                   },
  //                   next: {
  //                     block: {
  //                       type: "text_print",
  //                       inputs: {
  //                         TEXT: {
  //                           block: {
  //                             type: "text",
  //                             fields: {
  //                               TEXT: "  The jaws that bite, the claws that catch!",
  //                             },
  //                           },
  //                         },
  //                       },
  //                       next: {
  //                         block: {
  //                           type: "text_print",
  //                           inputs: {
  //                             TEXT: {
  //                               block: {
  //                                 type: "text",
  //                                 fields: {
  //                                   TEXT: "Beware the Jubjub bird, and shun",
  //                                 },
  //                               },
  //                             },
  //                           },
  //                           next: {
  //                             block: {
  //                               type: "text_print",
  //                               inputs: {
  //                                 TEXT: {
  //                                   block: {
  //                                     type: "text",
  //                                     fields: {
  //                                       TEXT: '  The frumious Bandersnatch!"',
  //                                     },
  //                                   },
  //                                 },
  //                               },
  //                             },
  //                           },
  //                         },
  //                       },
  //                     },
  //                   },
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // };

  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Core",
        contents: [
          {
            kind: "block",
            type: "controls_if",
          },
          {
            kind: "block",
            type: "logic_compare",
          },
        ],
      },
      {
        kind: "category",
        name: "Custom",
        expanded: "true",
        contents: [
          {
            kind: "block",
            type: "start",
          },
          {
            kind: "category",
            name: "Move",
            contents: [
              {
                kind: "block",
                type: "move_forward",
              },
            ],
          },
          {
            kind: "category",
            name: "Turn",
            contents: [
              {
                kind: "block",
                type: "turn_left",
              },
            ],
          },
        ],
      },
    ],
  };
  const workspaceDidChange = (workspace) => {
    if (workspace) {
      console.log("hello", workspace);
      const jsCode = javascriptGenerator.workspaceToCode(workspace);
      // const pythonCode = pythonGenerator.workspaceToCode(workspace);
      // const phpCode = phpGenerator.workspaceToCode(workspace);
      // const luaCode = luaGenerator.workspaceToCode(workspace);
      // const dartCode = dartGenerator.workspaceToCode(workspace);
      console.log("code", jsCode);
      eval(jsCode);
      // setJavascriptCode(pythonCode);
    }
  };
  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      setData({ ...data, isLoading: true });

      const requestData = {
        code: newUrl[1],
      };

      const proxy_url = state.proxy_url;
      console.log("proxyURL", state.proxy_url);
      // Use code parameter and other parameters to make POST request to proxy_server
      fetch(proxy_url, {
        method: "POST",
        body: JSON.stringify(requestData),
      })
        .then((response) => {
          response.json();
          console.log("response", response.json());
        })
        .then((data) => {
          dispatch({
            type: "LOGIN",
            payload: { user: data, isLoggedIn: true },
          });
        })
        .catch((error) => {
          setData({
            isLoading: false,
            errorMessage: "Sorry! Login failed",
          });
        });
    }
  }, [state, dispatch, data]);

  useEffect(() => {
    workspace = Blockly.inject("blocklyDiv", {
      // toolbox: toolboxCategories,
      // toolbox: document.getElementById("toolbox"),
      toolbox: INITIAL_TOOLBOX_JSON,
      // toolbox: motionXml,
      grid: { spacing: 20, length: 3, colour: "#ccc", snap: true },
      trashcan: true,
    });
    if (!blocklyState && !workspace) {
      serializer.load(blocklyState, workspace);
      console.log("workspace", workspace);
    }
    workspace.addChangeListener(convertCode);
  }, [workspace]);

  const convertCode = () => {
    // const workSpaceCode = blocklyJavascript();
    // console.log("workSpaceCode", workSpaceCode);
    const jsCode = javascriptGenerator.workspaceToCode(workspace);
    console.log("codeblockly", jsCode);
    serializer = new Blockly.serialization.blocks.BlockSerializer();
    blocklyState = serializer.save(workspace);
    setJavascriptCode(jsCode);
  };

  const runCode = () => {
    try {
      console.log(eval(javascriptCode));
    } catch (e) {
      alert("Error", e.error);
    }
  };

  if (state.isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <script src="blocks_compressed.js"></script>;
      <Wrapper>
        <BlocklyWorkspace
          toolboxConfiguration={INITIAL_TOOLBOX_JSON}
          initialXml={xml}
          className="fill-height"
          workspaceConfiguration={{
            grid: {
              spacing: 20,
              length: 3,
              colour: "#ccc",
              snap: true,
            },
          }}
          onWorkspaceChange={workspaceDidChange}
          onXmlChange={setXml}
        />
        <pre id="generated-xml">{xml}</pre>
        <textarea
          id="code"
          style={{ height: "200px", width: "400px" }}
          value={javascriptCode}
          readOnly
        ></textarea>
      </Wrapper>
      <xml id="toolbox" style={{ display: "none" }}>
        <category name="Control">
          <block type="controls_if"></block>
          <block type="move_block_right"></block>
          {/* <block type="moveRightBlock"></block>
          <block type="rightBlock"></block> */}
        </category>
        <category name="Logic">
          <block type="logic_compare"></block>
          <block type="logic_operation"></block>
          <block type="logic_boolean"></block>
        </category>
      </xml>
      <div>
        <div
          id="blocklyDiv"
          style={{ float: "left", height: 600, width: 600, padding: 20 }}
        />
        <div
          id="stage"
          // style={{
          //   position: "relative",
          //   backgroundImage: "url(tunnelPath.png)",
          //   backgroundRepeat: "no-repeat",
          //   width: 600,
          //   marginLeft: 630,
          //   marginTop: 30,
          //   height: 500,
          // }}
        >
          <img
            id="babyWorm"
            src="babyWorm.png"
            style={{ heigth: 50, width: 50, position: "äbsolute" }}
          />
        </div>
      </div>
      <textarea
        id="code"
        style={{
          position: "äbsolute",
          height: "200px",
          width: "595px",
          marginLeft: 20,
        }}
        value={javascriptCode}
        readOnly
      ></textarea>
      <button onClick={convertCode}>Convert</button>
      <button id="runButton" onClick={runCode}>
        Run
      </button>
    </>
    // <Wrapper>
    //   {/* <div ref={blocklyRef} /> */}
    //   {/* <BlocklyWorkspace
    //     className="width-100" // you can use whatever classes are appropriate for your app's CSS
    //     toolboxConfiguration={toolboxCategories} // this must be a JSON toolbox definition
    //     initialXml={xml}
    //     onXmlChange={setXml}
    //   /> */}

    //   <section className="container">
    //     <div>
    //       <h1>Welcome</h1>
    //       <span>Super amazing app</span>
    //       <span>{data.errorMessage}</span>
    //       <div className="login-container">
    //         {data.isLoading ? (
    //           <div className="loader-container">
    //             <div className="loader"></div>
    //           </div>
    //         ) : (
    //           <>
    //             {
    //               // Link to request GitHub access
    //             }
    //             <a
    //               className="login-link"
    //               href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
    //               onClick={() => {
    //                 setData({ ...data, errorMessage: "" });
    //               }}
    //             >
    //               {/* <GithubIcon /> */}
    //               <span>Login with GitHub</span>
    //             </a>
    //           </>
    //         )}
    //       </div>
    //     </div>
    //   </section>
    // </Wrapper>
  );
}

const Wrapper = Styled.section`
.fill-height {
  height: 500px;
} 
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial;
    .fill-height {
      height: 500px;
    }
    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      width: 25%;
      height: 45%;
      > h1 {
        font-size: 2rem;
        margin-bottom: 20px;
      }
      > span:nth-child(2) {
        font-size: 1.1rem;
        color: #808080;
        margin-bottom: 70px;
      }
      > span:nth-child(3) {
        margin: 10px 0 20px;
        color: red;
      }
      .fill-height {
        height: calc(100vh - 114px);
      }
      .login-container {
        background-color: #000;
        width: 70%;
        border-radius: 3px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        > .login-link {
          text-decoration: none;
          color: #fff;
          text-transform: uppercase;
          cursor: default;
          display: flex;
          align-items: center;          
          height: 40px;
          > span:nth-child(2) {
            margin-left: 5px;
          }
        }
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;          
          height: 40px;
        }
        .loader {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 12px;
          height: 12px;
          animation: spin 2s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
`;
