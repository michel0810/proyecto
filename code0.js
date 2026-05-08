gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDPurpleButtonWithShadowObjects1= [];
gdjs.MenuCode.GDPurpleButtonWithShadowObjects2= [];
gdjs.MenuCode.GDA_9595Button2Objects1= [];
gdjs.MenuCode.GDA_9595Button2Objects2= [];
gdjs.MenuCode.GDY_9595ButtonObjects1= [];
gdjs.MenuCode.GDY_9595ButtonObjects2= [];
gdjs.MenuCode.GDShadedDarkJoystickObjects1= [];
gdjs.MenuCode.GDShadedDarkJoystickObjects2= [];
gdjs.MenuCode.GDX_9595ButtonObjects1= [];
gdjs.MenuCode.GDX_9595ButtonObjects2= [];
gdjs.MenuCode.GDWalking_9595enemyObjects1= [];
gdjs.MenuCode.GDWalking_9595enemyObjects2= [];
gdjs.MenuCode.GDtrigger_9595abajoObjects1= [];
gdjs.MenuCode.GDtrigger_9595abajoObjects2= [];
gdjs.MenuCode.GDtrigger_9595arribaObjects1= [];
gdjs.MenuCode.GDtrigger_9595arribaObjects2= [];
gdjs.MenuCode.GDtrigger_9595izquierdaObjects1= [];
gdjs.MenuCode.GDtrigger_9595izquierdaObjects2= [];
gdjs.MenuCode.GDtrigger_9595derechaObjects1= [];
gdjs.MenuCode.GDtrigger_9595derechaObjects2= [];
gdjs.MenuCode.GDDinoObjects1= [];
gdjs.MenuCode.GDDinoObjects2= [];
gdjs.MenuCode.GDbeeObjects1= [];
gdjs.MenuCode.GDbeeObjects2= [];
gdjs.MenuCode.GDflyObjects1= [];
gdjs.MenuCode.GDflyObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs.MenuCode.GDPurpleButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPurpleButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPurpleButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPurpleButtonWithShadowObjects1[k] = gdjs.MenuCode.GDPurpleButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDPurpleButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena1", true);
}
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.MenuCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.MenuCode.GDA_9595Button2Objects1.length = 0;
gdjs.MenuCode.GDA_9595Button2Objects2.length = 0;
gdjs.MenuCode.GDY_9595ButtonObjects1.length = 0;
gdjs.MenuCode.GDY_9595ButtonObjects2.length = 0;
gdjs.MenuCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.MenuCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.MenuCode.GDX_9595ButtonObjects1.length = 0;
gdjs.MenuCode.GDX_9595ButtonObjects2.length = 0;
gdjs.MenuCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.MenuCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.MenuCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.MenuCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.MenuCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.MenuCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.MenuCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.MenuCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.MenuCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.MenuCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.MenuCode.GDDinoObjects1.length = 0;
gdjs.MenuCode.GDDinoObjects2.length = 0;
gdjs.MenuCode.GDbeeObjects1.length = 0;
gdjs.MenuCode.GDbeeObjects2.length = 0;
gdjs.MenuCode.GDflyObjects1.length = 0;
gdjs.MenuCode.GDflyObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.MenuCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.MenuCode.GDA_9595Button2Objects1.length = 0;
gdjs.MenuCode.GDA_9595Button2Objects2.length = 0;
gdjs.MenuCode.GDY_9595ButtonObjects1.length = 0;
gdjs.MenuCode.GDY_9595ButtonObjects2.length = 0;
gdjs.MenuCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.MenuCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.MenuCode.GDX_9595ButtonObjects1.length = 0;
gdjs.MenuCode.GDX_9595ButtonObjects2.length = 0;
gdjs.MenuCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.MenuCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.MenuCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.MenuCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.MenuCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.MenuCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.MenuCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.MenuCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.MenuCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.MenuCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.MenuCode.GDDinoObjects1.length = 0;
gdjs.MenuCode.GDDinoObjects2.length = 0;
gdjs.MenuCode.GDbeeObjects1.length = 0;
gdjs.MenuCode.GDbeeObjects2.length = 0;
gdjs.MenuCode.GDflyObjects1.length = 0;
gdjs.MenuCode.GDflyObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
