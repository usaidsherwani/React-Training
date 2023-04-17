const isStage = false;
export const motionXml = `
<xml>
    <category name="Logic" id="motion" colour="#4C97FF" secondaryColour="#3373CC">
            ${
            isStage
                ? `
            <label text="hello"></label>
            `
                : `
            <block type="motion_movesteps">
                <value name="STEPS">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="motion_turnright">
                <value name="DEGREES">
                    <shadow type="math_number">
                        <field name="NUM">15</field>
                    </shadow>
                </value>
            </block>
            <block type="motion_turnleft">
                <value name="DEGREES">
                    <shadow type="math_number">
                        <field name="NUM">15</field>
                    </shadow>
                </value>
            </block>

            <block type="motion_goto">
                <value name="TO">
                    <shadow type="motion_goto_menu">
                    </shadow>
                </value>
            </block>
            <block type="motion_gotoxy">
                <value name="X">
                    <shadow id="movex" type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="Y">
                    <shadow id="movey" type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block type="motion_glideto" id="motion_glideto">
                <value name="SECS">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="TO">
                    <shadow type="motion_glideto_menu">
                    </shadow>
                </value>
            </block>
            <block type="motion_glidesecstoxy">
                <value name="SECS">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="X">
                    <shadow id="glidex" type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="Y">
                    <shadow id="glidey" type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            
            <block type="motion_pointindirection">
                <value name="DIRECTION">
                    <shadow type="math_angle">
                        <field name="NUM">90</field>
                    </shadow>
                </value>
            </block>
            <block type="motion_pointtowards">
                <value name="TOWARDS">
                    <shadow type="motion_pointtowards_menu">
                    </shadow>
                </value>
            </block>
        
            <block type="motion_changexby">
                <value name="DX">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="motion_setx">
                <value name="X">
                    <shadow id="setx" type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block type="motion_changeyby">
                <value name="DY">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="motion_sety">
                <value name="Y">
                    <shadow id="sety" type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            
            <block type="motion_ifonedgebounce"/>
            
            <block type="motion_setrotationstyle"/>
            `
            }
            
        </category>
    </xml>
`;
