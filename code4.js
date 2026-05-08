gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.idToCallbackMap = new Map();
gdjs.Game_32OverCode.GDIr_9595a_9595menu2Objects1= [];
gdjs.Game_32OverCode.GDIr_9595a_9595menu2Objects2= [];
gdjs.Game_32OverCode.GDA_9595Button2Objects1= [];
gdjs.Game_32OverCode.GDA_9595Button2Objects2= [];
gdjs.Game_32OverCode.GDY_9595ButtonObjects1= [];
gdjs.Game_32OverCode.GDY_9595ButtonObjects2= [];
gdjs.Game_32OverCode.GDShadedDarkJoystickObjects1= [];
gdjs.Game_32OverCode.GDShadedDarkJoystickObjects2= [];
gdjs.Game_32OverCode.GDX_9595ButtonObjects1= [];
gdjs.Game_32OverCode.GDX_9595ButtonObjects2= [];
gdjs.Game_32OverCode.GDWalking_9595enemyObjects1= [];
gdjs.Game_32OverCode.GDWalking_9595enemyObjects2= [];
gdjs.Game_32OverCode.GDtrigger_9595abajoObjects1= [];
gdjs.Game_32OverCode.GDtrigger_9595abajoObjects2= [];
gdjs.Game_32OverCode.GDtrigger_9595arribaObjects1= [];
gdjs.Game_32OverCode.GDtrigger_9595arribaObjects2= [];
gdjs.Game_32OverCode.GDtrigger_9595izquierdaObjects1= [];
gdjs.Game_32OverCode.GDtrigger_9595izquierdaObjects2= [];
gdjs.Game_32OverCode.GDtrigger_9595derechaObjects1= [];
gdjs.Game_32OverCode.GDtrigger_9595derechaObjects2= [];
gdjs.Game_32OverCode.GDDinoObjects1= [];
gdjs.Game_32OverCode.GDDinoObjects2= [];
gdjs.Game_32OverCode.GDbeeObjects1= [];
gdjs.Game_32OverCode.GDbeeObjects2= [];
gdjs.Game_32OverCode.GDflyObjects1= [];
gdjs.Game_32OverCode.GDflyObjects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ir_a_menu2"), gdjs.Game_32OverCode.GDIr_9595a_9595menu2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDIr_9595a_9595menu2Objects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDIr_9595a_9595menu2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDIr_9595a_9595menu2Objects1[k] = gdjs.Game_32OverCode.GDIr_9595a_9595menu2Objects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDIr_9595a_9595menu2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDIr_9595a_9595menu2Objects1.length = 0;
gdjs.Game_32OverCode.GDIr_9595a_9595menu2Objects2.length = 0;
gdjs.Game_32OverCode.GDA_9595Button2Objects1.length = 0;
gdjs.Game_32OverCode.GDA_9595Button2Objects2.length = 0;
gdjs.Game_32OverCode.GDY_9595ButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDY_9595ButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.Game_32OverCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.Game_32OverCode.GDX_9595ButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDX_9595ButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.Game_32OverCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.Game_32OverCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.Game_32OverCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.Game_32OverCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.Game_32OverCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.Game_32OverCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.Game_32OverCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.Game_32OverCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.Game_32OverCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.Game_32OverCode.GDDinoObjects1.length = 0;
gdjs.Game_32OverCode.GDDinoObjects2.length = 0;
gdjs.Game_32OverCode.GDbeeObjects1.length = 0;
gdjs.Game_32OverCode.GDbeeObjects2.length = 0;
gdjs.Game_32OverCode.GDflyObjects1.length = 0;
gdjs.Game_32OverCode.GDflyObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
gdjs.Game_32OverCode.GDIr_9595a_9595menu2Objects1.length = 0;
gdjs.Game_32OverCode.GDIr_9595a_9595menu2Objects2.length = 0;
gdjs.Game_32OverCode.GDA_9595Button2Objects1.length = 0;
gdjs.Game_32OverCode.GDA_9595Button2Objects2.length = 0;
gdjs.Game_32OverCode.GDY_9595ButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDY_9595ButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.Game_32OverCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.Game_32OverCode.GDX_9595ButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDX_9595ButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.Game_32OverCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.Game_32OverCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.Game_32OverCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.Game_32OverCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.Game_32OverCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.Game_32OverCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.Game_32OverCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.Game_32OverCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.Game_32OverCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.Game_32OverCode.GDDinoObjects1.length = 0;
gdjs.Game_32OverCode.GDDinoObjects2.length = 0;
gdjs.Game_32OverCode.GDbeeObjects1.length = 0;
gdjs.Game_32OverCode.GDbeeObjects2.length = 0;
gdjs.Game_32OverCode.GDflyObjects1.length = 0;
gdjs.Game_32OverCode.GDflyObjects2.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
