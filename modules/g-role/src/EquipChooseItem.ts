/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_role{
    export class EquipChooseItem extends mo.gui.ItemRenderer{

        static ON_BTN_EQUIP:string = "on_btn_equip";

        ico_item:g_comp.Ico_Item;
        label_desc:mo.gui.Label;
        btn_equip:egret.gui.Button;

        _initProp(){
            super._initProp();
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            self.name = "eqp_cell_" + self.itemIndex;

            var bdc:gd.BagDataCtrl = self.data;
            var trans = gd.equipCtrl.equipTrans(bdc.equipId);

            self.ico_item.set('itemId', bdc.tempId);
            var str = mo.STR.format("[ubb color=%s]%s[/ubb] [ubb]评分:%s[/ubb][/br]", uiHelper.getColorByQuality(bdc.quality), bdc.name, bdc.score);
            var basePropArr = bdc.proptys;
            var addPropObj = utils.kvArr2KvObj(trans.extraPropArr);
            var strTemp1 = "[ubb]%s: %s[/ubb][ubb] +%s[/ubb][/br]";
            var strTemp2 = "[ubb color=0x2EAAF7]%s: %s[/ubb][ubb color=0x2EAAF7] +%s[/ubb][/br]";
            var propData;
            for(var i = 0, li = basePropArr.length; i < li; i++){
                propData = basePropArr[i];
                var key = propData[0];
                var baseV = propData[1];
                str += mo.STR.format(i == 0? strTemp1 : strTemp2, gc.c_prop.equipProp[key], baseV, addPropObj[key] || 0);
            }
            self.label_desc.text = str;
        }

        _tap_btn_equip(){
            var self = this;
            var bdc = self.data;
            self.emitter.emit(self.__class.ON_BTN_EQUIP, bdc.equipId, self);
        }
    }
}