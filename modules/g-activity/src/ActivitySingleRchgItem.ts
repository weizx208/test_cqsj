/**
 * Created by Administrator on 2015/10/8.
 */
module g_activity{
    export class ActivitySingleRchgItem extends mo.gui.ItemRenderer{
        label_desc;
        ico_hasGet;
        btn_get;
        list_items;
        _Item_list_items;
        ico_bg;
        effect_get;

        _initProp(){
            super._initProp();
            var self = this;

            self._Item_list_items = g_base.BaseItemCell;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.list_items.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        }


        dataChanged(){
            super.dataChanged();
            var self = this;
            var actItem = self.data;
            self.label_desc.text = mo.STR.format("%s", actItem[gc.dsConsts.ActivityItem.rmb]/10);
            self.refreshList("list_items");
        }

        _initItem_list_items(cell:g_base.BaseItemCell){
            var self = this;
            cell.tapShowDetail = true;
        }

        _data_list_items():any[]{
            var self = this;
            return utils.itemObj2ObjArr(self.data[gc.dsConsts.ActivityItem.items]);
        }
    }
}