import Blockly from "blockly";
import "blockly/python";
import { javascriptGenerator } from "blockly/javascript";

Blockly.Msg.MOTION_MOVESTEPS = "move %1 steps";
Blockly.Msg.MOTION_TURNLEFT = "turn %1 %2 degrees";
Blockly.Msg.MOTION_TURNRIGHT = "turn %1 %2 degrees";
Blockly.Msg.MOTION_POINTINDIRECTION = "point in direction %1";
Blockly.Msg.MOTION_POINTTOWARDS = "point towards %1";
Blockly.Msg.MOTION_POINTTOWARDS_POINTER = "mouse-pointer";
Blockly.Msg.MOTION_POINTTOWARDS_RANDOM = "random direction";
Blockly.Msg.MOTION_GOTO = "go to %1";
Blockly.Msg.MOTION_GOTO_POINTER = "mouse-pointer";
Blockly.Msg.MOTION_GOTO_RANDOM = "random position";
Blockly.Msg.MOTION_GOTOXY = "go to x: %1 y: %2";
Blockly.Msg.MOTION_GLIDESECSTOXY = "glide %1 secs to x: %2 y: %3";
Blockly.Msg.MOTION_GLIDETO = "glide %1 secs to %2";
Blockly.Msg.MOTION_GLIDETO_POINTER = "mouse-pointer";
Blockly.Msg.MOTION_GLIDETO_RANDOM = "random position";
Blockly.Msg.MOTION_CHANGEXBY = "change x by %1";
Blockly.Msg.MOTION_SETX = "set x to %1";
Blockly.Msg.MOTION_CHANGEYBY = "change y by %1";
Blockly.Msg.MOTION_SETY = "set y to %1";
Blockly.Msg.MOTION_IFONEDGEBOUNCE = "if on edge, bounce";
Blockly.Msg.MOTION_SETROTATIONSTYLE = "set rotation style %1";
Blockly.Msg.MOTION_SETROTATIONSTYLE_LEFTRIGHT = "left-right";
Blockly.Msg.MOTION_SETROTATIONSTYLE_DONTROTATE = "don't rotate";
Blockly.Msg.MOTION_SETROTATIONSTYLE_ALLAROUND = "all around";
Blockly.Msg.MOTION_XPOSITION = "x position";
Blockly.Msg.MOTION_YPOSITION = "y position";
Blockly.Msg.MOTION_DIRECTION = "direction";
Blockly.Msg.MOTION_SCROLLRIGHT = "scroll right %1";
Blockly.Msg.MOTION_SCROLLUP = "scroll up %1";
Blockly.Msg.MOTION_ALIGNSCENE = "align scene %1";
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMLEFT = "bottom-left";
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMRIGHT = "bottom-right";
Blockly.Msg.MOTION_ALIGNSCENE_MIDDLE = "middle";
Blockly.Msg.MOTION_ALIGNSCENE_TOPLEFT = "top-left";
Blockly.Msg.MOTION_ALIGNSCENE_TOPRIGHT = "top-right";
Blockly.Msg.MOTION_XSCROLL = "x scroll";
Blockly.Msg.MOTION_YSCROLL = "y scroll";
Blockly.Msg.MOTION_STAGE_SELECTED = "Stage selected: no motion blocks";

Blockly.Blocks["move_block_right"] = {
  init: function () {
    this.appendValueInput("moveRightBlock")
      .setCheck(null)
      .appendField(
        new Blockly.FieldLabelSerializable("Move Right"),
        "rightBlock"
      );
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

// Blockly.JavaScript["move_block_right"] = function (block) {
//   var value_moverightblock = Blockly.JavaScript.valueToCode(
//     block,
//     "moveRightBlock",
//     Blockly.JavaScript.ORDER_ATOMIC
//   );
//   // TODO: Assemble JavaScript into code variable.
//   var code = "document.getElementById('runButton').style.backgroundColor='red'";
//   // var code = "docume";
//   return [value_moverightblock];
// };

javascriptGenerator["move_block_right"] = function (block) {
  let value_name = javascriptGenerator.valueToCode(
    block,
    "NAME",
    javascriptGenerator.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  // let code = `return ${value_name}\n`;
  console.log("valuename", value_name);
  let code = `
    setInterval(move, 100);
    let margin = 0;
    function move() {
      margin += 7;
      const worm = document.getElementById("babyWorm");
      worm.style.marginLeft = margin + "px";
    }
  `;
  return code;
};

Blockly.Blocks["move_block_left"] = {
  init: function () {
    this.appendValueInput("moveLeftBlock")
      .setCheck(null)
      .appendField(
        new Blockly.FieldLabelSerializable("Move Left"),
        "leftBlock"
      );
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator["move_block_left"] = function (block) {
  var value_moveleftblock = javascriptGenerator.valueToCode(
    block,
    "moveLeftBlock",
    javascriptGenerator.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code =
    "document.getElementById('runButton').style.backgroundColor='green'";
  return code;
};


Blockly.Blocks["motion_movesteps"] = {
  /**
   * Block to move steps.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: Blockly.Msg.MOTION_MOVESTEPS,
      args0: [
        {
          type: "input_value",
          name: "STEPS",
        },
      ],
      category: "Logic",
      // "extensions": ["shape_statement"]
    });
  },
};

//   Blockly.Blocks['motion_turnright'] = {
//     /**
//      * Block to turn right.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_TURNRIGHT,
//         "args0": [
//           {
//             "type": "field_image",
//             "src": Blockly.mainWorkspace.options.pathToMedia + "rotate-right.svg",
//             "width": 24,
//             "height": 24
//           },
//           {
//             "type": "input_value",
//             "name": "DEGREES"
//           }
//         ],
//         "category": "Logic",
//         // "extensions": ["", "shape_statement"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_turnleft'] = {
//     /**
//      * Block to turn left.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_TURNLEFT,
//         "args0": [
//           {
//             "type": "field_image",
//             "src": Blockly.mainWorkspace.options.pathToMedia + "rotate-left.svg",
//             "width": 24,
//             "height": 24
//           },
//           {
//             "type": "input_value",
//             "name": "DEGREES"
//           }
//         ],
//         "category": "Logic",
//         // "extensions": ["", "shape_statement"]
//       });
//     }
//   };

Blockly.Blocks["motion_pointindirection"] = {
  /**
   * Block to point in direction.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: Blockly.Msg.MOTION_POINTINDIRECTION,
      args0: [
        {
          type: "input_value",
          name: "DIRECTION",
        },
      ],
      category: "Logic",
      // "extensions": ["", "shape_statement"]
    });
  },
};

//   Blockly.Blocks['motion_pointtowards_menu'] = {
//     /**
//      * Point towards drop-down menu.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": "%1",
//         "args0": [
//           {
//             "type": "field_dropdown",
//             "name": "TOWARDS",
//             "options": [
//               [Blockly.Msg.MOTION_POINTTOWARDS_POINTER, '_mouse_'],
//               [Blockly.Msg.MOTION_POINTTOWARDS_RANDOM, '_random_']
//             ]
//           }
//         ],
//         "colour": Blockly.Colours.motion.secondary,
//         "colourSecondary": Blockly.Colours.motion.secondary,
//         "colourTertiary": Blockly.Colours.motion.tertiary,
//         "extensions": ["output_string"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_pointtowards'] = {
//     /**
//      * Block to point in direction.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_POINTTOWARDS,
//         "args0": [
//           {
//             "type": "input_value",
//             "name": "TOWARDS"
//           }
//         ],
//         "category": "Logic",
//         "extensions": ["", "shape_statement"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_goto_menu'] = {
//     /**
//      * Go to drop-down menu.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": "%1",
//         "args0": [
//           {
//             "type": "field_dropdown",
//             "name": "TO",
//             "options": [
//               [Blockly.Msg.MOTION_GOTO_POINTER, '_mouse_'],
//               [Blockly.Msg.MOTION_GOTO_RANDOM, '_random_']
//             ]
//           }
//         ],
//         "colour": Blockly.Colours.motion.secondary,
//         "colourSecondary": Blockly.Colours.motion.secondary,
//         "colourTertiary": Blockly.Colours.motion.tertiary,
//         "extensions": ["output_string"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_gotoxy'] = {
//     /**
//      * Block to go to X, Y.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_GOTOXY,
//         "args0": [
//           {
//             "type": "input_value",
//             "name": "X"
//           },
//           {
//             "type": "input_value",
//             "name": "Y"
//           }
//         ],
//         "category": "Logic",
//         "extensions": ["", "shape_statement"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_goto'] = {
//     /**
//      * Block to go to a menu item.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_GOTO,
//         "args0": [
//           {
//             "type": "input_value",
//             "name": "TO"
//           }
//         ],
//         "category": "Logic",
//         "extensions": ["", "shape_statement"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_glidesecstoxy'] = {
//     /**
//      * Block to glide for a specified time.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_GLIDESECSTOXY,
//         "args0": [
//           {
//             "type": "input_value",
//             "name": "SECS"
//           },
//           {
//             "type": "input_value",
//             "name": "X"
//           },
//           {
//             "type": "input_value",
//             "name": "Y"
//           }
//         ],
//         "category": "Logic",
//         "extensions": ["", "shape_statement"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_glideto_menu'] = {
//     /**
//      * Glide to drop-down menu
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": "%1",
//         "args0": [
//           {
//             "type": "field_dropdown",
//             "name": "TO",
//             "options": [
//               [Blockly.Msg.MOTION_GLIDETO_POINTER, '_mouse_'],
//               [Blockly.Msg.MOTION_GLIDETO_RANDOM, '_random_']
//             ]
//           }
//         ],
//         "colour": Blockly.Colours.motion.secondary,
//         "colourSecondary": Blockly.Colours.motion.secondary,
//         "colourTertiary": Blockly.Colours.motion.tertiary,
//         "extensions": ["output_string"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_glideto'] = {
//     /**
//      * Block to glide to a menu item
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_GLIDETO,
//         "args0": [
//           {
//             "type": "input_value",
//             "name": "SECS"
//           },
//           {
//             "type": "input_value",
//             "name": "TO"
//           }
//         ],
//         "category": "Logic",
//         "extensions": ["", "shape_statement"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_changexby'] = {
//     /**
//      * Block to change X.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_CHANGEXBY,
//         "args0": [
//           {
//             "type": "input_value",
//             "name": "DX"
//           }
//         ],
//         "category": "Logic",
//         "extensions": ["", "shape_statement"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_setx'] = {
//     /**
//      * Block to set X.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_SETX,
//         "args0": [
//           {
//             "type": "input_value",
//             "name": "X"
//           }
//         ],
//         "category": "Logic",
//         "extensions": ["", "shape_statement"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_changeyby'] = {
//     /**
//      * Block to change Y.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_CHANGEYBY,
//         "args0": [
//           {
//             "type": "input_value",
//             "name": "DY"
//           }
//         ],
//         "category": "Logic",
//         "extensions": ["", "shape_statement"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_sety'] = {
//     /**
//      * Block to set Y.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_SETY,
//         "args0": [
//           {
//             "type": "input_value",
//             "name": "Y"
//           }
//         ],
//         "category": "Logic",
//         "extensions": ["", "shape_statement"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_ifonedgebounce'] = {
//     /**
//      * Block to bounce on edge.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_IFONEDGEBOUNCE,
//         "category": "Logic",
//         "extensions": ["", "shape_statement"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_setrotationstyle'] = {
//     /**
//      * Block to set rotation style.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_SETROTATIONSTYLE,
//         "args0": [
//           {
//             "type": "field_dropdown",
//             "name": "STYLE",
//             "options": [
//               [Blockly.Msg.MOTION_SETROTATIONSTYLE_LEFTRIGHT, 'left-right'],
//               [Blockly.Msg.MOTION_SETROTATIONSTYLE_DONTROTATE, 'don\'t rotate'],
//               [Blockly.Msg.MOTION_SETROTATIONSTYLE_ALLAROUND, 'all around']
//             ]
//           }
//         ],
//         "category": "Logic",
//         "extensions": ["", "shape_statement"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_xposition'] = {
//     /**
//      * Block to report X.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_XPOSITION,
//         "category": "Logic",
//         "checkboxInFlyout": true,
//         "extensions": ["", "output_number"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_yposition'] = {
//     /**
//      * Block to report Y.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_YPOSITION,
//         "category": "Logic",
//         "checkboxInFlyout": true,
//         "extensions": ["", "output_number"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_direction'] = {
//     /**
//      * Block to report direction.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_DIRECTION,
//         "category": "Logic",
//         "checkboxInFlyout": true,
//         "extensions": ["", "output_number"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_scroll_right'] = {
//     /**
//      * Block to scroll the stage right. Does not actually do anything. This is
//      * an obsolete block that is implemented for compatibility with Scratch 2.0
//      * projects.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_SCROLLRIGHT,
//         "args0": [
//           {
//             "type": "input_value",
//             "name": "DISTANCE"
//           }
//         ],
//         "category": "Logic",
//         "extensions": ["", "shape_statement"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_scroll_up'] = {
//     /**
//      * Block to scroll the stage up. Does not actually do anything. This is an
//      * obsolete block that is implemented for compatibility with Scratch 2.0
//      * projects.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_SCROLLUP,
//         "args0": [
//           {
//             "type": "input_value",
//             "name": "DISTANCE"
//           }
//         ],
//         "category": "Logic",
//         "extensions": ["", "shape_statement"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_align_scene'] = {
//     /**
//      * Block to change the stage's scrolling alignment. Does not actually do
//      * anything. This is an obsolete block that is implemented for compatibility
//      * with Scratch 2.0 projects.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_ALIGNSCENE,
//         "args0": [
//           {
//             "type": "field_dropdown",
//             "name": "ALIGNMENT",
//             "options": [
//               [Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMLEFT, 'bottom-left'],
//               [Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMRIGHT, 'bottom-right'],
//               [Blockly.Msg.MOTION_ALIGNSCENE_MIDDLE, 'middle'],
//               [Blockly.Msg.MOTION_ALIGNSCENE_TOPLEFT, 'top-left'],
//               [Blockly.Msg.MOTION_ALIGNSCENE_TOPRIGHT, 'top-right']
//             ]
//           }
//         ],
//         "category": "Logic",
//         "extensions": ["", "shape_statement"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_xscroll'] = {
//     /**
//      * Block to report the stage's scroll position's X value. Does not actually
//      * do anything. This is an obsolete block that is implemented for
//      * compatibility with Scratch 2.0 projects.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_XSCROLL,
//         "category": "Logic",
//         "extensions": ["", "output_number"]
//       });
//     }
//   };

//   Blockly.Blocks['motion_yscroll'] = {
//     /**
//      * Block to report the stage's scroll position's Y value. Does not actually
//      * do anything. This is an obsolete block that is implemented for
//      * compatibility with Scratch 2.0 projects.
//      * @this Blockly.Block
//      */
//     init: function() {
//       this.jsonInit({
//         "message0": Blockly.Msg.MOTION_YSCROLL,
//         "category": "Logic",
//         "extensions": ["", "output_number"]
//       });
//     }
//   };
